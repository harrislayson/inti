# INTI — website

A clean, bilingual (English / Spanish) one-page website for the artist **INTI**
in Lobitos, Piura, Peru. Plain HTML, CSS and JavaScript — no build step, no
dependencies. It just works in any browser and on free static hosting.

```
site/
├── index.html        ← the page
├── styles.css        ← all styling (colors, layout, fonts)
├── app.js            ← language toggle, gallery, lightbox, WhatsApp links
├── config.js         ← ★ edit this for contact details (WhatsApp etc.)
└── images/
    ├── art/          ← cropped & enhanced artwork (the gallery + signatures)
    └── space/        ← photos of the studio (hero, residency, programs…)
```

---

## 1. The one thing you must edit: `config.js`

Open **`config.js`** in any text editor and replace the placeholder WhatsApp
number with INTI's real number:

```js
whatsapp: "51955555555",   // ← Peru code 51 + the number, digits only
```

- Use **international format, digits only**: country code `51` + the number,
  with **no `+`, spaces, or dashes**. Example: `955 123 456` → `"51955123456"`.
- Every "Message / Ask about…" button and the Contact section use this number,
  with a friendly pre-written message (in whatever language the visitor chose).

Optional — turn on more contact buttons later by filling these in (leave as
`""` to keep them hidden):

```js
instagram: "inti.lobitos",     // username only (no @)
email:     "inti@example.com",
```

That's it. No other file needs editing for contact info.

---

## 2. Publish it free on GitHub Pages

1. Create a free account at <https://github.com> and click **New repository**.
   Name it e.g. `inti` and make it **Public**. Create it.
2. On the new repo page, click **uploading an existing file**.
3. Open the `site` folder on your computer and drag **everything inside it**
   (the `index.html`, `styles.css`, `app.js`, `config.js`, and the `images`
   folder) into the browser. ⚠️ Upload the *contents* of `site/`, not the
   `site` folder itself — `index.html` must sit at the top level of the repo.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**,
   then **Save**.
6. Wait ~1 minute. The page address appears at the top of that same Pages
   screen, like `https://yourname.github.io/inti/`. Done. 🎉

To update later (new number, new photos): edit the file or drag a replacement
into the repo and commit — the live site updates in about a minute.

---

## 3. Adding the clothing photos later

The Clothing section is currently **inquiry-only** (people message to order).
When you have product photos:

1. Drop the images into `images/art/` (or a new `images/clothing/` folder).
2. Tell whoever maintains the site, or follow the gallery pattern in `app.js`
   (the `GALLERY` array) to add them. The shop can stay inquiry-only or grow
   into a full grid — the layout already supports it.

---

## 4. Run it on your own computer (optional preview)

From inside the `site` folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

---

## Notes

- **Languages:** the EN / ES toggle (top right) switches every text on the page,
  including button messages and gallery captions. It remembers the visitor's
  choice and defaults to their browser language.
- **Images:** the artwork in `images/art/` was cropped, straightened and color-
  enhanced from the original studio photos so each piece looks framed and clean.
  The originals are untouched and kept outside this `site/` folder.
- **Fonts:** loaded from Google Fonts (Fraunces for the INTI wordmark, Work Sans
  for text). They need internet to display; if offline, the browser falls back
  to a similar system font.
