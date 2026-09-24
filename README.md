# Sharon Stories

A small static website for the Sharon Stories book club. Plain HTML/CSS/JS —
no build step, no framework, free to host on GitHub Pages.

## Files

- `index.html` — home page
- `events.html` — "Scheduled Meetings" list (builds itself from events-data.js)
- `event.html` — single meeting detail page (builds itself from events-data.js)
- `events-data.js` — **the only file you need to edit to add a new meeting**
- `styles.css` — all the styling

## Adding a new meeting

Open `events-data.js` (directly on GitHub, or in any text editor) and follow
the instructions in the comment at the top of the file: copy one event
block, paste it in, fill in the details, save. Both `events.html` and
`event.html` update automatically — no other file needs to change.

## Hosting it on GitHub Pages (one-time setup)

1. Create a new repository on GitHub (e.g. `sharon-stories`).
2. Upload these 5 files to the repository (drag-and-drop works on
   github.com, or use `git push` if you're comfortable with git).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch **main**, folder **/ (root)**. Save.
5. GitHub will give you a live URL, usually
   `https://<your-username>.github.io/sharon-stories/` — it can take a
   minute or two to go live the first time.

Every time you edit and save a file (including `events-data.js` to add a
new meeting), the live site updates automatically within a minute or so.

## Optional: custom domain

If you want the site at your own domain instead of the github.io one,
GitHub Pages supports that under Settings → Pages → Custom domain — happy
to walk through the DNS setup when you're ready for it.
