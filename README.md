# Abdelrahman Safwat — Portfolio

A dark, cybersecurity-themed personal portfolio built with React + Vite.

## Tech stack

- React 18
- Vite 5
- react-icons
- Plain CSS (design tokens in `src/index.css`)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Certificates.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── assets/
│   ├── images/       (profile photo already added)
│   └── certificates/ (drop certificate images here)
├── App.jsx
├── main.jsx
└── index.css
```

## Things to finish later

- **CV**: add your PDF as `public/cv.pdf` — the "Download CV" button in
  `Hero.jsx` already points to `/cv.pdf`.
- **Project details**: `src/components/Projects.jsx` has a `PROJECTS`
  array — update the `description`, `githubUrl` and `liveUrl` fields for
  Global Freight DB, and add more objects to the array for future
  projects (the grid and card layout already support it).
- **Certificate images & dates**: `src/components/Certificates.jsx` has
  a `CERTIFICATES` array with `date` and `certificateUrl` left empty —
  drop images into `src/assets/certificates/`, import them, and fill
  those fields in.
- **Project preview image**: replace the placeholder text in the
  `.project-image` block of `Projects.jsx` with an `<img>` once you have
  a screenshot.

## Notes

- The profile photo you provided is already wired into the hero section
  at `src/assets/images/profile.jpg`.
- No skill levels or progress bars are shown, since those weren't
  provided — skills are listed as tags instead.
