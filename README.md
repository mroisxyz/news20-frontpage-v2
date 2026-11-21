[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/mroisxyz/news20-frontpage-v2/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/mroisxyz/news20-frontpage-v2/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# The World in One Day — Friday 20 November 2026

A single-page, newspaper-style infographic that packs an entire day of world news into one 1024×1024 image. Under the masthead "THE WORLD IN ONE DAY," the front page leads with a headline strip — Russian missiles hit Kyiv bridges, Cyclone Akvan strikes India, an AI sell-off sinks Asian markets, and the UK and EU seal a deal — followed by seven at-a-glance stat tiles (3 Kyiv bridges hit, 300,000+ moved to shelters, −6.2% Taiwan shares, 100,000 on the UK visa-fee scheme, 2.3% Japan inflation, 118 for Phillips v India, and 55 GTA VI trophies).

Below, a grid of region-labeled cards — Kyiv, Cyclone Akvan, the AI sell-off, the UK–EU deal, COP31, Poland, Italy, Japan, Kenya, Bukele, Phillips, and Myanmar — pairs each short, source-attributed story with a hand-drawn sparkline or data mark. A "Also on Friday · 23 more stories" digest, a "Where it happened" dotted world map, and a "Date check" fact-check box round out the page, which closes on the note: 35 stories · 7 regions · every one dated Friday 20 November 2026.

## Run it

```sh
node main.ts
```

The program is pure Node 22 standard library with no dependencies. It creates `${MAKEFUN_OUTPUT_DIR}` (default `/output`) and copies `entry.png` from the repo root to `<out>/entry.png`, logging a short confirmation to stderr.

Made for the make.fun bounty: https://make.fun/?ref=jhbwqchj&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120
