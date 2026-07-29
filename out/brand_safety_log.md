# Brand-safety gate log — TLC Models event image library

Run date: 2026-07-29. Model: Higgsfield soul_2, 16:9 @ 2K, converted to WebP 1920x1080 <=500KB.

Gate criteria: no logos or brand marks, no readable text or signage, no recognizable
real people, no existing franchise characters, no real artworks, no car marque badging.
Each failing shot was retried once with ", absolutely no text, signage, or logos
anywhere in frame" appended. Shots that failed both rounds are quarantined in
`out/flagged/` and listed below — they are NOT part of the shippable library in `out/web/`.

## Shippable (out/web/) — 38 images

new-york-events: 01, 02, 04
los-angeles-events: 01, 02, 03, 05
las-vegas-events: 01, 03, 04, 05
miami-events: 02, 03, 04, 05
ny-comic-con: 01, 02, 03, 04
ny-fashion-week: 01, 05, 06
ultra-music-festival: 03, 04
art-basel-miami: 01, 02, 03, 04, 05, 06 (complete topic)
la-comic-con: 02, 03, 05
grammy-weekend: 02, 04, 06
la-auto-show: 01, 05

## Failed twice — quarantined (out/flagged/) — 34 images

Severity HARD = real brand mark, franchise trade dress, or clearly readable text.
Severity SOFT = small or illegible gibberish lettering; may be acceptable at web size
or fixable with light retouching.

| File | Severity | Reason (round-2 render) |
|---|---|---|
| new-york-events-03 | HARD | Venue marquee reads "MANYANTAT VUEAT" |
| new-york-events-05 | SOFT | Faint caption text lines on LED gradient walls |
| new-york-events-06 | SOFT | Small dark lettering on white marquee tents |
| los-angeles-events-04 | SOFT | Faint dimensional letters on gallery wall + printed tote |
| los-angeles-events-06 | HARD | Large white text rendered across the sky |
| las-vegas-events-02 | HARD | Lounge signage "HALS COIIG VENII" + mirrored table text |
| las-vegas-events-06 | HARD | Stage screen literally reads "LAS VEGAS 20818" |
| miami-events-01 | HARD | Awning text, red circular sign, lettered pink door |
| miami-events-06 | SOFT | Small stamp-style emblem and tiny text lines on mural wall |
| us-open-01 | HARD | Sponsor-style wordmarks on stadium walls |
| us-open-02 | HARD | Nike swooshes on shoes/socks, brand mark on shorts |
| us-open-03 | HARD | Ball printed with logo + "raaritaokes" |
| us-open-04 | SOFT | Hat band lettering "ROHO" |
| us-open-05 | HARD | Court-wall text "DROR S YORK" + banner text |
| us-open-06 | HARD | "BNA…ACA" backdrop, Nike swoosh on shirt, W-style racquet stencil |
| ny-comic-con-05 | HARD | Helmet reads as Mandalorian-style franchise trade dress |
| ny-comic-con-06 | HARD | Building lettering "COCAIHAINAT ANGR" |
| ny-fashion-week-02 | HARD | Mirror-frame lettering "ANGLSK EAP…" |
| ny-fashion-week-03 | HARD | Multiple readable street signs |
| ny-fashion-week-04 | HARD | Handwritten script on invitation card (prompt asked blank) |
| ultra-music-festival-01 | SOFT | Tiny "M" marks on truss towers + faint caption on screen |
| ultra-music-festival-02 | SOFT | Flag with crown emblem + faint lettering |
| ultra-music-festival-05 | HARD | Neon sign text on background buildings/screens |
| ultra-music-festival-06 | HARD | Large "LOM" sign letters + circular logo glyph |
| la-comic-con-01 | HARD | Banners densely covered in readable text |
| la-comic-con-04 | HARD | T-shirt text + lettered panels on set piece |
| la-comic-con-06 | HARD | Facade lettering "LOS ALES S IINCAL CONVVEANTON…" |
| grammy-weekend-01 | HARD | Backdrop reads "MUSIC AWARDS / OSLN AWAROS" |
| grammy-weekend-03 | SOFT | Champagne bottle label text |
| grammy-weekend-05 | HARD | Theater marquee full of readable text |
| la-auto-show-02 | HARD | Hood badge text "ORggnaAL" + license-style plate "2MLS772" |
| la-auto-show-03 | HARD | Script marks on hood/door of concept car |
| la-auto-show-04 | HARD | Trident-style badges (Maserati-like) on clay model fascia |
| la-auto-show-06 | HARD | Dashboard covered in UI text, "91" roundel, "Engage" label |

## Notes

- soul_2 strongly gravitates toward inventing signage/wordmarks in event scenes;
  the appended no-text clause helped in 10/44 retries.
- Topics needing people/venue signage (US Open, comic cons, awards) fail most;
  abstract/nature/crowd scenes pass easily. Art Basel is the only complete topic.
- SOFT failures may be recoverable by regenerating with different seeds, cropping,
  or object-removal retouch rather than full regeneration.
