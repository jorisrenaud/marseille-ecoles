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
