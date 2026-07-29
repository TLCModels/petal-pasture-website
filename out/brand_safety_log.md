# Brand-safety gate log — TLC Models event image library (v2, with TLC models)

Run date: 2026-07-29. Model: Higgsfield soul_2 with trained TLC Soul identities,
16:9 @ 2K, converted to WebP 1920x1080 <=500KB. Every shot features one TLC model
(13-Soul roster: Kira, Luna, Nova, Nia, Camille, Aisha, Zara, Valentina, Sophia,
Natasha, Layla*, Astrid, South Asian) as the working talent for the event category.
(*Layla was rostered but her assigned shots rotated to other models in the final mix.)

Gate criteria: no logos or brand marks, no readable text or signage, no other
recognizable people, no franchise characters, no real artworks, no car badging.
Each failing shot was retried once with strengthened anti-text/anti-badge language.
Shots that failed both rounds are quarantined in `out/flagged/` — NOT shipped.

## Shippable (out/web/) — 45 images

| Topic | Shipped | Shots |
|---|---|---|
| new-york-events | 4/6 | 01, 02, 04, 06 |
| los-angeles-events | 3/6 | 01, 02, 05 |
| las-vegas-events | 5/6 | 01, 02, 04, 05, 06 |
| miami-events | 5/6 | 02, 03, 04, 05, 06 |
| us-open | 2/6 | 04, 05 |
| ny-comic-con | 3/6 | 02, 04, 05 |
| ny-fashion-week | 5/6 | 01, 02, 04, 05, 06 |
| ultra-music-festival | 5/6 | 01, 03, 04, 05, 06 |
| art-basel-miami | 6/6 | complete |
| la-comic-con | 2/6 | 02, 03 |
| grammy-weekend | 3/6 | 02, 04, 06 |
| la-auto-show | 2/6 | 04, 06 |

## Failed twice — quarantined (out/flagged/) — 27 images

| File | Reason (round-2 render) |
|---|---|
| new-york-events-03 | Venue sign "PARYLGFEAN" + window monograms |
| new-york-events-05 | LED wall covered in pseudo-copy ("AlintBod MAwwaster…") |
| los-angeles-events-03 | Giant "LOSO" road lettering + parking signs |
| los-angeles-events-04 | Posters with dense readable text on pillars |
| los-angeles-events-06 | Champagne bottle label persists |
| las-vegas-events-03 | Stage screen reads "LAS VEAS LGAY" |
| miami-events-01 | Balcony banner text + wall graffiti lettering |
| us-open-01 | Polo chest text "DUEL TRIK" + "New York" court walls |
| us-open-02 | Bird emblem on tank + skirt text + racquet mark |
| us-open-03 | "New York" walls, sponsor board, Nike swoosh on hat band |
| us-open-06 | Wall wordmarks ("Eloode", "ES Raoern") + kit emblem |
| ny-comic-con-01 | Text-covered hanging banners + booth counter lettering |
| ny-comic-con-03 | Rendered as a diptych + "NEW YORK" screens |
| ny-comic-con-06 | Canopy lettering "Ehegntete Kneo" |
| ny-fashion-week-03 | Mercedes three-pointed star on car + street signage |
| ultra-music-festival-02 | Flag literally reads "MIAMI" + tent emblems |
| la-comic-con-01 | Banner walls of readable text |
| la-comic-con-04 | Interface text on cockpit panels + jacket lettering |
| la-comic-con-05 | Letter patches ("AA", "B") + lanyard badges with text |
| la-comic-con-06 | Building sign "LOS.ANEIS CONTVITIONA CENTENTER" |
| grammy-weekend-01 | Gold wall lettering "LOCIO …ARDS" |
| grammy-weekend-03 | "AWAKLBS AWARD" backdrop text + bottle labels |
| grammy-weekend-05 | Marquee crammed with readable text |
| la-auto-show-01 | Nose badge + license-style plate "LAND…" |
| la-auto-show-02 | Circular hood roundel badge |
| la-auto-show-03 | Nose badge glyph + hand-held ID card + lanyard |
| la-auto-show-05 | Plinth text "PIAMSOMA" + background grille badge + exit sign |

## Notes

- soul_2 compulsively invents signage in "venue" contexts (award backdrops,
  marquees, convention banners, stadium walls, car badges); anti-text clauses
  recover roughly half the failures per round. Topics staged as model-first
  close/medium shots pass at a far higher rate than venue-first wide shots.
- Recovery rates: v2 round 1 passed 33/72; round 2 recovered 12 of 39 retries.
- Recommended for the 27 gaps: regenerate with tighter framing on the model
  (venue as pure bokeh), or generative-erase retouching of the offending marks.
