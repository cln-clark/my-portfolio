# Portfolio Feedback — Kirk Griffin F. Tan

**Site reviewed:** https://kirktan.vercel.app/  
**Review date:** October 31, 2026  
**Reviewed on:** desktop (1440×900), phone (390×844), and all three project links.  
**For:** Kirk, and any developer or AI agent helping him update the site.  
**How to use this file:** Fix **P0** first. Then **P1**. P2 and P3 are polish. Each item has a plain-language explanation, a clear action, and a "Done when" check. Technical notes are marked **[For the agent]**.

---

## The short version

The design is the strongest part — warm, magazine-style, and it does not look like a template. **Do not redesign it.** The problems are in the details and the story.

The five highest-impact fixes:

1. Fix the broken SafeZone PH link.
2. Replace the Brew-Ha and Oppo screenshots — both currently show errors.
3. Add a resume and rewrite the intro; say he is open to internships.
4. Show all three projects properly, and clean up the GitHub profile.
5. Make the phone version readable, and add a link preview + tab icon.

---

## Read this first (for the agent)

- **Preserve the existing visual style:** cream background (`#eeefeb` / `#fcfbf8`), serif headlines, thin rules, generous spacing, small uppercase labels.
- **Do not invent facts, numbers, clients, metrics, or links.** If something is not confirmed, ask Kirk or leave a clearly marked placeholder.
- **Test every change at 390px, 768px, and 1440px wide.**
- **Check every link in a real browser**, including the SafeZone link.
- The live site is a Vite + React single-page app. The source repo may be separate; use the live site as the content reference.
- After changes, run the production build and check the browser console for errors.
- Prefer small, targeted fixes over a rewrite.

---

# P0 — Fix before sharing the link again

## 1. The SafeZone PH link is broken

**What happens:** The project title links to `https://safezoneph.com` (no "www"). That address shows a **"Your connection is not private"** certificate warning. The same site works at `https://www.safezoneph.com`.

**Why it matters:** SafeZone PH is the strongest proof that Kirk can build real software. A security warning is the worst possible first click. Many visitors will stop there.

**What to do:**
- Change the project link to `https://www.safezoneph.com` immediately.
- If Kirk controls the domain, also fix the bare domain so it redirects to `www`.
- Re-test in Chrome, Safari, and Firefox.

**Done when:** Clicking "SafeZone PH" opens the live site with no warning.

**[For the agent]** Search the source for `safezoneph.com`. It is the project data entry with `url: "https://safezoneph.com"` (visible in the built bundle around the project array). Update that value. If the source uses a content file or constants file, update it there and rebuild.

---

## 2. The Brew-Ha screenshot shows an error

**What happens:** The Brew-Ha preview image literally says **"Error loading products."** There is also an **"Activate Windows"** watermark in the bottom-right corner.

**Why it matters:** The screenshot is the only thing a visitor sees for that project, and it makes the project look broken and unfinished. The watermark looks unprofessional.

**What to do:**
- Retake the screenshot on a working build with real product data.
- Use a clean browser window at a desktop size (for example 1440×900 or 1600×1000).
- Crop to the most interesting part: the brand header plus a row of products, not the whole page.
- Remove the operating-system watermark (use a clean machine or crop it out).
- Replace the source file that builds to `/assets/images/brew-ha.png`.
- Compress the new image before adding it.

**Done when:** The image has no error text, no watermark, readable text at about 600px wide, and is under ~200 KB.

**[For the agent]** Do not fake the screenshot or use a generic mockup. Ask Kirk for a working demo, a local build, or a staged version with product data. If no working build exists, use a clearly labeled concept image rather than a broken screenshot.

---

## 3. The Oppo screenshot shows an error too

**What happens:** The Oppo preview shows a red **"Could not load this section — The request data is invalid"** box and a placeholder account, `admin@example.edu`. The screenshot itself says **"Pathway Internship Hub,"** but the project card says **"Oppo."**

**Why it matters:** An error message and an `example.edu` placeholder make the project look like an unfinished demo. Two different names make it confusing to talk about in an interview.

**What to do:**
- Retake the screenshot with clean demo data and a realistic-looking demo account (for example `admin@pathway.edu`, or Kirk's own demo account).
- Fix or hide the error state before taking the screenshot.
- Choose one name:
  - Rename the project to **"Pathway Internship Hub"** to match the screenshot, or
  - Keep **"Oppo"** only if it is a real product name, and add a subtitle explaining it.
- Use the same name in the card, screenshot, description, and any links.
- Replace the source file that builds to `/assets/images/oppo.png`.

**Done when:** No error boxes, no `example.edu` placeholder, one consistent project name throughout.

---

## 4. The section numbers skip 03

**What happens:** The page shows **01 Skills**, **02 Background**, **04 Certifications**. There is no 03.

**Why it matters:** It looks like a section was deleted and the page was not finished.

**What to do:**
- Renumber to 01, 02, 03, **or**
- Add a real 03 section. An **Experience / Internship / Activities** section would be ideal. If Kirk has no formal experience, use 03 for Certifications and renumber.

**Done when:** The visible section numbers are sequential and match the sections on the page.

---

## 5. There is no link preview and no tab icon

**What happens:**
- When the URL is pasted into LinkedIn, Messenger, WhatsApp, or similar apps, it does not show a proper preview card with an image and title.
- `/favicon.ico` returns 404. The browser tab shows a generic icon.
- The page has a title and a description, but the description is only his degree, not what he does.

**Why it matters:** A portfolio is shared through links. A plain link is easy to ignore; a clean preview card looks professional and gets more clicks.

**What to do:**
- Add a **1200×630 preview image** with his name, role, and one project screenshot. Keep it readable at small sizes.
- Add the standard social preview tags: `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`, `twitter:image`.
- Add a simple **"KT" favicon** in 32×32 and 180×180 sizes.
- Rewrite the meta description to mention what he builds and one real project, for example: "Portfolio of Kirk Griffin F. Tan, a web and mobile developer in the Philippines. Builder of SafeZone PH, a disaster-response mapping platform."
- Use absolute URLs for the preview image.

**Done when:**
- Pasting the link into LinkedIn or Messenger shows an image, title, and description.
- The browser tab shows the "KT" icon.
- `/favicon.ico` returns 200.

**[For the agent]** For a Vite app, put the images in `public/` and the meta tags in `index.html`. Use absolute URLs for `og:image` and `twitter:image`. Verify with a social-preview debugging tool if available.

---

# P1 — Content changes that will get more interviews

## 6. Add a resume

**What happens:** There is no resume or CV anywhere on the site.

**Why it matters:** Recruiters and internship coordinators expect a one-page PDF. Without it, they have to copy information from the site by hand.

**What to do:**
- Add a one-page PDF resume to `public/` (for example `/kirk-tan-resume.pdf`).
- Add a clear **"Download CV"** button in the top section and again near the contact section.
- Open it in a new tab.
- Keep the resume consistent with the site: same name, role, projects, email, LinkedIn, GitHub.

**Done when:** The button opens a one-page PDF and never returns a 404.

**[For the agent]** Kirk must provide the PDF. Do not generate a fake resume. If the file is missing, add the button behind a TODO only after the PDF exists.

---

## 7. Rewrite the intro

**What happens:** The current intro is 47 words of generic resume language:

> "Motivated Information Technology student with Specialization in Web and Mobile Technology, bringing knowledge of programming, database management, and UI/UX design. Uses creative problem-solving and strong communication to contribute to development tasks, while continuing to learn modern technologies and industry practice."

It is written in third person, could describe almost anyone, and does not name a single project.

**Why it matters:** The first screen should answer three questions in seconds: Who is this? What does he build? Is he available?

**What to do:**
- Rewrite it in first person, 2–3 short sentences.
- Name one real project.
- Say what he is looking for (internship, freelance, entry-level).
- Add a small availability line near the top.

**Suggested copy (confirm facts before publishing):**

> I'm a web and mobile developer from the Philippines. I like turning messy real-world problems into simple apps — my latest, SafeZone PH, was built for a local disaster-response team and shows reports on a map. I'm looking for a 2026 internship where I can keep shipping real products.

**Availability line examples:**

- "Open to 2026 internships · Based in the Philippines · Open to remote"
- "Available for freelance web and mobile work"
- "Looking for an entry-level developer role"

**Done when:** The first screen says who he is, what he builds, and that he is open to opportunities — without generic filler.

**[For the agent]** Do not claim SafeZone is "used by" the MDRRMO, or invent user numbers, unless Kirk confirms it. "Built for" is safe. Ask Kirk to confirm the graduation year and availability before publishing.

---

## 8. Tell the story of each project

**What happens:** SafeZone PH has one sentence and one screenshot. Brew-Ha and Oppo each have one sentence and no link. Two of the three projects are dead ends.

**Why it matters:** A recruiter cannot judge a project from a single line. They need to see the problem, what Kirk actually built, and the result. For a student, a strong project write-up is worth more than a long skills list.

**What to do:**

For **SafeZone PH**, add a proper project page or an expandable section with:
- The problem: what was hard or broken before.
- What the system does, in plain language.
- Kirk's specific part: what he built, what he connected, what he decided.
- The result: is it live? Who uses it? How many barangays or users? Only if confirmed.
- 2–3 screenshots: the map, the report form, the alert flow.
- A clear **"Visit live site"** button.

For **Brew-Ha**, add:
- 2–3 bullets: what it does, what he built, what happened.
- A live link or a GitHub repo.
- If the code is private: "Code available on request."

For **Oppo / Pathway**, add:
- The same 2–3 bullets.
- The correct name and a one-line explanation of what "Oppo" means, if it is kept.
- A live link, repo, or "Code available on request."

**Done when:** Every project has a clear next step and enough detail to talk about in an interview.

**[For the agent]** Use a dedicated project page or an expandable section — not the single-sentence card. Keep the existing visual style. If adding a modal, make it keyboard-accessible and closable with Escape.

---

## 9. Show all three projects

**What happens:** The project slider shows one project at a time. The other two are hidden behind small Previous/Next buttons. Many visitors will only see SafeZone PH.

**Why it matters:** Two-thirds of his work is easy to miss, especially on a phone.

**What to do:** Choose one:
- **Best option:** Stack the three projects vertically, each with its screenshot, role, and details.
- **Or:** Keep the slider but make it obvious: larger buttons, dots or thumbnails, swipe support, keyboard support, and a visible "1 / 3" counter.
- Preload the other project images after the first one loads.

**Done when:** All three projects are easy to find without hunting, and the slider is usable on a phone.

---

## 10. Fix the skills list

**What happens:** The skills section lists ten programming languages in one line, plus "GitHub proficiency." It reads like a checklist, not evidence.

**Why it matters:** Listing ten languages invites doubt. An interviewer will ask about the weakest one. It also hides the skills he actually used in his projects.

**What to do:**
- Group skills into 3–5 clear categories, for example:
  - **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Next.js
  - **Mobile:** Kotlin, Android
  - **Backend / Data:** Java, PHP, Python, SQL, Firebase
  - **Design / Tools:** Figma, Git, GitHub
- Only list what he can defend in an interview.
- If he has touched something but is not confident, put it under **"Familiar with"**, not "Comfortable with."
- Tie skills to projects where possible: "React (SafeZone PH)".
- Remove "GitHub proficiency." Git/GitHub is a tool, not a skill category.

**Done when:** The list is shorter, grouped, honest, and connected to real work.

**[For the agent]** Ask Kirk to confirm comfort levels. Do not silently keep a language just because it is already on the page.

---

## 11. Fill out the Background section

**What happens:** The Background section is three lines — school, year, degree — and a lot of empty space. "2027" is ambiguous.

**Why it matters:** For a student, this is where recruiters look for coursework, capstone work, organizations, and signs of initiative. Empty space makes the page feel unfinished.

**What to do:**
- Change "2027" to **"Expected graduation: 2027."**
- Add relevant coursework: web systems, databases, mobile development, UI/UX, networking.
- Add the capstone or thesis, if applicable.
- Add organizations, leadership roles, hackathons, awards, or volunteering.
- Keep each item to one line.

**Done when:** The section has at least 4–5 substantive lines and no large empty area.

---

## 12. Clean up GitHub

**What happens:** The portfolio links prominently to GitHub. The profile currently shows:
- 40 public repositories, many duplicates and school exercises.
- Pinned projects: `AD-Final-Project`, `AD-MeetingCalendar-2`, `AD-Task-3`, `DionelaLibrary` (a fork), `IT0043---FINALS`.
- No bio.
- Public repo names like `kotlin-shits`, `trylang`, `all`, `final`, and several `menu-contact` duplicates.
- A profile README with a "Buy Me A Matcha" / "pang bili ng bahay" section.

**Why it matters:** GitHub is the second portfolio a recruiter will click. Right now it tells a different, less polished story than the site. The three projects on the portfolio are not the projects shown at the top of the profile.

**What to do (manual task for Kirk):**
- Pin the three portfolio projects (or the best three) to the top of the profile.
- Add a short README to each: one-sentence description, screenshot, tech stack, live link, and what Kirk did.
- Rename or archive the joke/duplicate repos. At minimum, make them private or archive them.
- Add a one-line bio and location.
- Remove the "Buy Me A Matcha" section if he is applying to companies. Keep the playful tone on the portfolio if he wants, but the GitHub profile should look work-ready.

**Done when:** The top of the GitHub profile shows the same three projects as the portfolio, each with a README, and the profile has a bio.

**[For the agent]** This is outside the site repo. Flag it as a manual task for Kirk. If the agent has GitHub access, list the exact repos to pin, rename, or archive before making changes.

---

# P2 — Phone and readability

## 13. On a phone, the photo comes before the name

**What happens:** At 390px wide, the portrait fills the first screen. The name and pitch start below it. A visitor sees a headshot before knowing who Kirk is or what he does.

**Why it matters:** Most people will open the link on a phone. The first screen should introduce him, not just show a photo.

**What to do:**
- Put the name and one-line pitch **before** the photo on phones.
- Then show a smaller portrait (about 240–280px wide), or a small round avatar next to the name.
- Keep the desktop layout as it is: text left, photo right.
- Do not simply shrink the photo; move it in the reading order.

**Done when:** At 390×844, the name and a one-line pitch are visible before scrolling, and the photo does not dominate the first screen.

**[For the agent]** In the current markup, the portrait appears before the introduction in the DOM. On mobile, the single-column grid places the portrait first. Either move the introduction before the portrait in the DOM and use CSS grid placement for desktop, or set explicit `grid-row`/`order` values at the mobile breakpoint. Verify at 390px and 768px.

---

## 14. The text is too small

**What happens:**
- Main paragraph: **13px**
- Menu links: **10px**
- Small labels: **8–9px**
- Phone menu: **9px**

**Why it matters:** It reads like fine print on a large screen and is hard to read on a phone. The elegant look comes from the typefaces and spacing, not from tiny text.

**What to do:**
- Main paragraph: **15–16px**
- Menu links: **12–13px**
- Small labels: **10–11px minimum**
- Keep the hierarchy: headlines can stay large, but body text should be comfortable.
- Adjust line-height after increasing the size so the page does not feel loose.

**Done when:** No meaningful text is below 10px, the main paragraph is at least 15px, and the page is readable at 100% zoom on a laptop and a phone.

---

## 15. The menu links are too small to tap

**What happens:** The menu text is 10px with no padding, so the clickable area is tiny — especially on a phone.

**Why it matters:** People will miss the link or tap the wrong one.

**What to do:**
- Add padding so each link has a tap area of at least **44×44px**.
- Keep the text size readable.
- Test at 390px wide with a finger, not a mouse.

**Done when:** Every menu link and button is easy to tap on a phone, with no overlap.

---

## 16. The first screen has no work on it

**What happens:** On a 1440×900 laptop, only the hero is visible. "My Projects" is at the very bottom edge; no actual project is visible. There is also a large empty gap between the email and the projects heading.

**Why it matters:** A portfolio should show work quickly. The current page is beautiful, but it makes people scroll before they see any proof.

**What to do:** Choose one:
- Reduce the hero height: smaller portrait, less top/bottom padding.
- Add a small "Selected work" strip below the intro with one project thumbnail and a link.
- Move the first project preview up so at least part of it is visible on a normal laptop screen.

**Done when:** At 1440×900 and 1280×800, at least part of the first project is visible without scrolling, and the hero still feels balanced.

---

# P3 — Visual polish

## 17. The portrait looks like a cutout

**What happens:** The portrait has a white background, so the decorative grid behind it barely shows. The bottom is cropped at the chest, leaving a hard horizontal edge. The suit photo feels more "job application" than the warm, magazine-style site.

**Why it matters:** The photo is the largest element on the page. If it looks pasted on, it weakens an otherwise well-designed layout.

**What to do:** Choose one:
- Use a photo with a natural background that fits the warm palette.
- Use a transparent cutout so the grid shows through.
- Match the photo background to the page cream (`#fcfbf8`) if it is a studio shot.
- Choose an intentional crop: head-and-shoulders, or waist-up — not a random cut at the chest.
- A slightly less formal photo would fit the site's tone better, unless Kirk is targeting corporate roles.

**Done when:** The portrait blends with the page, the grid is visible, and the crop looks intentional.

**[For the agent]** Kirk must choose the photo. Do not replace it with an AI-generated or stock photo. If a transparent cutout is used, keep the file size reasonable and provide a fallback background color.

---

## 18. The project screenshots are too dense to read

**What happens:** The dashboard screenshots are shown at about 500–600px wide. The text inside them is tiny and unreadable.

**Why it matters:** A screenshot that cannot be read is decoration, not proof. Visitors cannot see what the product actually does.

**What to do:**
- Add click-to-zoom: clicking or tapping the image opens it at full size in a simple overlay.
- Or link the image to a dedicated project page with larger screenshots.
- Use a tighter crop that shows one key feature, not the entire dashboard.
- Make the overlay keyboard-accessible: Escape to close, focus returns to the image.

**Done when:** A visitor can view the detail at full size on desktop and phone, and close it easily.

---

## 19. Small usability fixes

- **Make the email clickable.** The email in the top section is plain text. Make it a `mailto:` link and add a "Copy email" button with a short confirmation.
- **Make the slider controls obvious.** If the slider stays, use larger arrows, dots or thumbnails, and swipe support.
- **Be consistent with names.**
  - "My Projects" in the section vs "My work" in the menu.
  - "Oppo" in the card vs "Pathway Internship Hub" in the screenshot.
  - Pick one name for each and use it everywhere.
- **Reconsider "INTERESTED IN ME?"** It is a little awkward. "LET'S WORK TOGETHER" or "HAVE A PROJECT IN MIND?" is warmer.

**Done when:** All interactive elements work, labels match, and the copy sounds natural.

---

## 20. The images are heavy

**What happens:** Current file sizes:
- SafeZone preview: **1.4 MB**
- Brew-Ha: **550 KB**
- Portrait: **362 KB**
- Oppo: **128 KB**
- Certification badges: **36–277 KB**

**Why it matters:** Large images make the page slow on mobile data, especially for visitors in the Philippines.

**What to do:**
- Resize images to the size they are actually displayed at:
  - Project screenshots: max ~1200px wide (2× the display width).
  - Portrait: max ~800px wide.
  - Certification badges: max ~600px wide.
- Convert to WebP or AVIF.
- Add `srcset` and `sizes` so phones do not download desktop-size images.
- Lazy-load images below the first screen.
- Keep explicit width and height so the layout does not jump.
- Target under ~200 KB per image.

**Done when:** Every image is under ~200 KB, the page loads quickly on a phone, and the layout does not shift while images load.

---

## 21. Add image descriptions for screen readers

**What happens:** The Brew-Ha and Oppo screenshots have empty description text. People using screen readers cannot tell what the images show.

**What to do:**
- Add a short description to each meaningful image, for example:
  - Brew-Ha: "Brew-Ha coffee shop homepage with the brand logo and featured drinks."
  - Oppo/Pathway: "Pathway internship hub dashboard showing placement reviews and student records."
- Keep the existing SafeZone description.
- Decorative images should have an empty description.

**Done when:** Every meaningful image has a useful description.

---

# What is already working — do not change these

- The cream background and magazine-style headlines. It is distinctive and looks expensive. Most student portfolios use a dark template; this one has a point of view.
- The big name headline and the "K. Tan / PORTFOLIO" mark. Strong and memorable.
- The certifications section with "Verify" links. Credible and clean.
- The project layout: screenshot, role, description. It is a good format — it just needs better content.
- The subtle motion, focus outlines, and reduced-motion handling. Good craft.

---

# Do not do these

- Do not redesign the site or replace the cream/serif look with a generic dark theme.
- Do not add a new color palette, new fonts, or a new layout system.
- Do not replace real project screenshots with generic mockups.
- Do not invent metrics, clients, testimonials, or "used by" claims.
- Do not hide more content behind animations or sliders.
- Do not add popups, chat widgets, or autoplay video.
- Do not publish placeholder text like "Lorem ipsum" or `example.edu`.

---

# Content Kirk must provide

The agent cannot finish these without Kirk:

- [ ] A one-page PDF resume.
- [ ] Confirmation of SafeZone PH's status: Is it live? Is it used by the Santa Maria MDRRMO? How many barangays or users? (Only publish what is confirmed.)
- [ ] Live links or GitHub repos for Brew-Ha and Oppo/Pathway, or permission to say "Code available on request."
- [ ] The correct name for "Oppo" vs "Pathway Internship Hub."
- [ ] Availability: internship dates, freelance availability, location, remote preference.
- [ ] A preferred photo (or approval to use the current one with a better crop/background).
- [ ] GitHub cleanup decisions: which repos to pin, rename, archive, or make private.
- [ ] Confirmation of skills he is comfortable defending in an interview.

---

# Suggested order of work

1. **P0 (today):** SafeZone link, two screenshots, section numbers, preview/favicon.
2. **P1 (this week):** Resume, intro, project stories, show all projects, skills, background, GitHub.
3. **P2 (next):** Mobile order, text sizes, tap targets, work above the fold.
4. **P3 (polish):** Portrait, screenshot zoom, email/slider/copy, image compression, image descriptions.

---

# Definition of done

- [ ] Every link opens without a warning or 404.
- [ ] The SafeZone PH link goes to `https://www.safezoneph.com` (or a fixed bare domain).
- [ ] Brew-Ha and Oppo screenshots have no errors, no watermarks, and no placeholder accounts.
- [ ] Section numbers are sequential.
- [ ] A working resume button is present.
- [ ] The intro is specific, first-person, and includes availability.
- [ ] All three projects are visible and have a clear next step.
- [ ] Skills are grouped, honest, and tied to real work.
- [ ] Background has substantive content and says "Expected graduation: 2027."
- [ ] GitHub shows the same three projects at the top.
- [ ] On a phone, the name and pitch appear before the photo.
- [ ] Main text is at least 15px; no meaningful text below 10px.
- [ ] Menu links have at least 44px tap areas.
- [ ] At least part of a project is visible on a 1440×900 laptop screen.
- [ ] The portrait blends with the page and the crop is intentional.
- [ ] Project screenshots can be viewed at full size.
- [ ] The email is clickable and copyable.
- [ ] Images are compressed and under ~200 KB each.
- [ ] Every meaningful image has a description.
- [ ] The page has a social preview image, title, description, and favicon.
- [ ] Tested at 390px, 768px, and 1440px in Chrome, Safari, and Firefox.
- [ ] Production build passes with no console errors.

---

# Evidence from the review

These are the observations behind the items above, in case the agent needs to verify them:

- At **1440×900**, the first screen shows only the hero. "My Projects" is at the bottom edge, with no project visible.
- At **390×844**, the portrait appears first and fills most of the first screen. The name and pitch start below it.
- The hero email is plain text, not a link.
- The project section is a one-at-a-time slider with small Previous/Next buttons and a "1 / 3" counter.
- The SafeZone link `https://safezoneph.com` fails with a certificate name error; `https://www.safezoneph.com` works.
- The Brew-Ha image contains "Error loading products." and an "Activate Windows" watermark.
- The Oppo image contains "Could not load this section. The request data is invalid." and `admin@example.edu`; the screenshot says "Pathway Internship Hub."
- The section numbers are 01 Skills, 02 Background, 04 Certifications.
- The CSS sets the main paragraph to 13px, menu links to 10px, small labels to 8–9px, and the phone menu to 9px.
- The live HTML has no social preview image tags and no favicon; `/favicon.ico` returns 404.
- Image sizes: SafeZone 1.4 MB, Brew-Ha 550 KB, portrait 362 KB, Oppo 128 KB.
- GitHub profile: 40 public repos, no bio, pinned projects are school exercises, and several public repo names are joke-style or duplicates.

---

*This document is a working brief, not a redesign request. Keep the design; fix the proof.*
