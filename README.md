# Scripture Atlas — Professional Edition

A polished interactive Bible geography and learning website based on the supplied **Bible Class Atlas** source material.

## What changed in this professional pass

- Consolidated the project to **one canonical deployable website** and removed the competing `/site` implementation.
- Added a refined editorial homepage with selective source imagery.
- Added favicon, web manifest, Open Graph metadata and theme metadata.
- Brought selected source atlas visuals into `/assets/images` for context-rich pages.
- Added a professional source/transparency page (`about.html`).
- Upgraded page hierarchy, typography, card system, spacing, responsive design and footer.
- Preserved the Atlas, Timeline, Journeys, Jesus, Paul, Empires, Temples, Seven Churches, Learn and Games experiences.
- Preserved the interactive quiz arena, Bible typing test, memory challenge, journey ordering, score/streak storage, theme toggle and global search.
- Removed Git metadata, Mac metadata, duplicate front-end files and conversion workspace from the distributable package.

## Run

Open `index.html` directly, or deploy the folder as a static site. No build step is required.

## Source / copyright note

The supplied Bible Class Atlas is copyrighted teaching material. Selected source visuals are included in this private project as teaching/source material. Do not assume unrestricted commercial republication rights. Review the source copyright notice before a public commercial launch.

## Recommended production next steps

- Deploy to a proper static host and set canonical URLs.
- Replace simplified geographic layers with MapLibre + custom historical GeoJSON.
- Add a licensed Bible translation/API for full passage reading.
- Add bibliography / academic sources for historical claims.
- Add multi-language support and printable teacher resources.
