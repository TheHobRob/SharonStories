/* =========================================================================
   SHARON STORIES — EVENTS

   This is the ONLY file you need to touch to add a new meeting.
   The home page, the "Scheduled Meetings" list, and each event's own page
   are all built automatically from what's in this file.

   HOW TO ADD A NEW MEETING:
   1. Copy one whole block below, from the opening { to the closing },
   2. Paste it right before the closing bracket "];" at the bottom.
   3. Give it a unique "id" — short, no spaces, e.g. "2nd-meeting".
   4. Fill in each field between the quotes.
   5. Save the file and push/commit it to GitHub. The site updates itself
      — no other files need to change.

   Fields:
   - id           unique short name, used in the page link (no spaces)
   - title        the meeting name, e.g. "2nd meeting"
   - date         YYYY-MM-DD — used to sort meetings, doesn't show on page
   - dateDisplay  the date exactly as you want it to read on the page
   - time         the time range as you want it to read
   - bookTitle    book being discussed
   - bookAuthor   author's name
   - coverImage   a link to the book cover image (see note below), or ""
   - food         what to bring / what's served
   - drink        the drink
   - activity     the planned activity
   ========================================================================= */

const EVENTS = [
  {
    id: "1st-meeting",
    title: "1st meeting",
    date: "2026-10-03",
    dateDisplay: "Saturday, October 3, 2026",
    time: "4:00 PM – 8:00 PM",
    bookTitle: "The Only One Left",
    bookAuthor: "Riley Sager",
    coverImage: "images/theonlyoneleft.webp",
    food: "Charcuterie",
    drink: "Something themed",
    activity: "Book discussion questions and DIY bookmark"
  }

  // Add your next meeting here — copy the block above this line, paste
  // below it with a comma after the closing "}", and fill in the details.
];

/* -------------------------------------------------------------------------
   NOTE ON COVER IMAGES:
   Easiest option — search the book on Google Images, right-click the
   cover, "Copy image address", and paste that link as coverImage.
   Or upload a cover image file into an "images" folder in this repo and
   set coverImage to "images/your-file-name.jpg".
   Leaving coverImage as "" just shows a plain placeholder — totally fine.
   ------------------------------------------------------------------------- */
