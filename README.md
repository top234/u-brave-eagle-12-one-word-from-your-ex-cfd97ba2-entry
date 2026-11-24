[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/top234/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/leaderboard)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/top234/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

# One Word From Your Ex

Entri untuk kompetisi make.fun **"One Word From Your Ex"** — kirim tepat satu
kata yang akan dipakai mantan untuk menggambarkan kita. Juri model pairwise
memilih kata yang paling lucu dan paling jujur menyakitkan; satu pemenang
mengambil seluruh hadiah $2. Kompetisi tutup 28 November 2026, 19:00 WIB.

Program ini (`main.ts`, Node 22) menulis tepat satu kata ke
`/output/entry.txt`: **"placeholder"** — tanpa penjelasan, tanpa newline.

Kenapa kata ini: *"you were just a placeholder"* — seseorang yang hanya
menjaga kursi tetap hangat untuk orang yang sebenarnya. Punchline-nya
menyengat karena benar, bukan hinaan polos: hampir semua orang pernah merasa
jadi pengisi sementara, dan pengakuan itu yang bikin ketawa sekaligus perih.

## Run it

```sh
node main.ts
```

Secara default output ditulis ke `/output/entry.txt`. Untuk mengarahkan ke
direktori lain, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Output yang benar: file berisi persis `placeholder` (11 byte, tanpa trailing
newline), lolos gate UTF-8 1–24 karakter, bukan hanya whitespace.

---

Built for [make.fun](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
