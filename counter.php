<?php
/**
 * counter.php — Compteur partagé stocké dans counter.json
 * GET  /counter.php        → { "count": 147 }
 * POST /counter.php        → incrémente et retourne { "count": 148 }
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

// Préflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$file = __DIR__ . '/counter.json';

// ── Lecture ──────────────────────────────────────────────
function readCount(string $file): int {
    if (!file_exists($file)) return 0;
    $data = json_decode(file_get_contents($file), true);
    return isset($data['count']) ? (int)$data['count'] : 0;
}

// ── Écriture atomique ────────────────────────────────────
function writeCount(string $file, int $count): void {
    // Écriture dans un fichier temporaire puis renommage
    // pour éviter les corruptions en cas d'accès concurrent
    $tmp = $file . '.tmp.' . uniqid();
    file_put_contents($tmp, json_encode(['count' => $count], JSON_PRETTY_PRINT));
    rename($tmp, $file);
}

// ── Routage ──────────────────────────────────────────────
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo json_encode(['count' => readCount($file)]);

} elseif ($method === 'POST') {
    // Verrou fichier pour éviter les race conditions
    $lock = fopen($file . '.lock', 'c');
    if (flock($lock, LOCK_EX)) {
        $count = readCount($file) + 1;
        writeCount($file, $count);
        flock($lock, LOCK_UN);
        fclose($lock);
        echo json_encode(['count' => $count]);
    } else {
        fclose($lock);
        http_response_code(503);
        echo json_encode(['error' => 'Lock unavailable']);
    }

} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
