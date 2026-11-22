[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Abdee36/news-image-22nov/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Abdee36/news-image-22nov/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# Sunday, 22 November 2026 — The World in One Page

My entry for the make.fun **news-image-20261122** bounty: one 1024×1024 newspaper
front page summing up Sunday 22 November 2026's world news.

## The day's stories

- **COP31, Antalya (lead)** — after two days in overtime, the summit's presidents tabled
  a ten-page final deal in the early hours of Sunday and put it to the vote at a session
  starting 06:00 GMT. The text never names fossil fuels, oil, coal or a phase-out; it aims
  to lift electricity's share of energy from 21% to 35% by 2035, is the first COP text to
  admit the world will overshoot 1.5°C, and reaffirms tripling adaptation finance by 2035.
- **Indonesia** — 3 dead and 36 missing after a fire at the Fonusa Agung Mulia candy
  factory in Serang, west of Jakarta; rescuers searched on Sunday, a day after the blaze.
- **South Korea** — Education Minister Choi Kyo-jin resigned on Sunday over the AI
  exam-cheating confusion before the national university entrance exam; President Lee
  Jae Myung accepted the resignation.
- **The Gulf** — Iran struck an industrial site in Bahrain and tankers were hit in the
  Strait of Hormuz; swimmer Lewis Pugh crossed the strait as a tanker burned nearby.
- **United States** — the FBI is investigating an apparent hack of its National Crime
  Information Center database.
- **Also today** — masked immigration agents detained two passengers on a Seattle jet
  bridge, delaying an Alaska Airlines flight; at COP31 a single formal objection can
  still stop the deal.

Every story above happened or was first reported on 22 November 2026. Sources: Reuters,
AP, BBC, AFP, Korea JoongAng Daily.

## How it runs

`main.ts` (Node 22, standard library only) copies the poster image to
`/output/entry.png`. The poster itself is `poster.html`, written in this build session
and rendered to `entry.png` (1024×1024, under 1 MiB). Both grader runs write identical
bytes — the program is a deterministic byte-for-byte copy.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `poster.html` — the newspaper front page (the source of the image)
- `entry.png` — the rendered 1024×1024 poster
- `main.ts` — the entry program
- `LICENSE` — MIT
