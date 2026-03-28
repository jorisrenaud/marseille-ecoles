const TELEGRAM_BOT_TOKEN = '8750169085:AAE7zzehjvYhM_S9C3zQLhwi3utc1IzQ3lE';
const TELEGRAM_CHAT_ID   = '675206855';

export async function onRequestPost({ request, env }) {
  let data;
  try { data = await request.json(); }
  catch { return json(400, { ok: false, error: 'JSON invalide' }); }

  const email = (data.email || '').trim().toLowerCase();
  const arr   = (data.arrondissement || '').trim();

  if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    return json(400, { ok: false, error: 'Email invalide' });
  }

  try {
    await env.DB.prepare(
      'INSERT INTO subscribers (email, arrondissement) VALUES (?, ?)'
    ).bind(email, arr || null).run();

    // Notif Telegram
    const arr_label = arr ? `${arr}e arrondissement` : 'arrondissement non précisé';
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `📬 *Nouvelle inscription — Ecoles Marseille*\n\n📧 ${email}\n📍 ${arr_label}`,
        parse_mode: 'Markdown'
      })
    });

    return json(200, { ok: true, message: 'Inscription enregistrée !' });
  } catch (e) {
    if (e.message && e.message.includes('UNIQUE')) {
      return json(200, { ok: true, message: 'Déjà inscrit !' });
    }
    return json(500, { ok: false, error: e.message });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
