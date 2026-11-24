import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Satu kata yang akan ditulis ke entry.txt: kata yang dipakai mantan
// untuk menggambarkan kita. Program ini deterministik: tanpa network,
// tanpa random, selalu menulis kata yang sama.
const word = "placeholder";

// Kenapa "placeholder" — kata yang mantan pakai untuk kita:
// "You were just a placeholder" — seseorang yang hanya menjaga kursi
// tetap hangat untuk orang yang sebenarnya. Punchline-nya menyengat
// karena benar, bukan hinaan polos: hampir semua orang pernah merasa
// jadi pengisi sementara, dan pengakuan itu yang bikin ketawa sekaligus
// perih. Satu kata, mendarat instan, tanpa penjelasan.

// Validasi gate (sesuai RULES.txt): tepat satu kata, 1-24 karakter,
// bukan hanya whitespace. Kalau kata tidak lolos, gagal keras sebelum
// menulis apa pun — entri invalid lebih buruk daripada tidak jalan.
if (!/^\S{1,24}$/.test(word)) {
  throw new Error(
    "kata entri tidak valid: harus satu kata, 1-24 karakter, bukan whitespace",
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
