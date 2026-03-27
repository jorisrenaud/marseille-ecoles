#!/usr/bin/env python3
"""Serveur HTTP pour la page marseille-ecoles + API /subscribe (SQLite)."""
import http.server, json, sqlite3, urllib.parse, os, re
from pathlib import Path

PORT = 8080
DB   = Path(__file__).parent / "subscribers.db"
ROOT = Path(__file__).parent

# Init DB
def init_db():
    con = sqlite3.connect(DB)
    con.execute("""
        CREATE TABLE IF NOT EXISTS subscribers (
            id           INTEGER PRIMARY KEY AUTOINCREMENT,
            email        TEXT NOT NULL,
            arrondissement TEXT,
            created_at   DATETIME DEFAULT (datetime('now'))
        )
    """)
    con.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_email ON subscribers(email)")
    con.commit()
    con.close()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)

    def do_POST(self):
        if self.path == "/subscribe":
            length = int(self.headers.get("Content-Length", 0))
            body   = self.rfile.read(length)
            try:
                data = json.loads(body)
            except Exception:
                data = dict(urllib.parse.parse_qsl(body.decode()))

            email = (data.get("email") or "").strip().lower()
            arr   = (data.get("arrondissement") or "").strip()

            # Validation basique
            if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
                self._json(400, {"ok": False, "error": "Email invalide"})
                return

            try:
                con = sqlite3.connect(DB)
                con.execute(
                    "INSERT INTO subscribers (email, arrondissement) VALUES (?,?)",
                    (email, arr or None)
                )
                con.commit()
                con.close()
                self._json(200, {"ok": True, "message": "Inscription enregistrée !"})
            except sqlite3.IntegrityError:
                self._json(200, {"ok": True, "message": "Déjà inscrit !"})
            except Exception as ex:
                self._json(500, {"ok": False, "error": str(ex)})
        else:
            self.send_error(404)

    def _json(self, code, payload):
        body = json.dumps(payload).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", len(body))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        print(fmt % args)

if __name__ == "__main__":
    init_db()
    print(f"Serving on http://localhost:{PORT}")
    http.server.HTTPServer(("", PORT), Handler).serve_forever()
