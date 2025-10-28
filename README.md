# Girl Scout Badges

This repository now includes a lightweight React + Vite front-end (in [`web/`](web/)) for parents and troop leaders to browse earned patches, review award criteria, and double-check uniform placement.

## Project structure

```
.
├── README.md
└── web/
    ├── index.html
    ├── package.json
    ├── public/
    │   └── badges/
    └── src/
        ├── App.tsx
        ├── components/
        │   ├── PatchDetail.tsx
        │   └── PatchList.tsx
        ├── data/
        │   └── badges.json
        ├── hooks/
        │   └── useBadges.ts
        ├── pages/
        │   ├── PatchDetailPage.tsx
        │   ├── PatchListPage.tsx
        │   └── UniformGuidePage.tsx
        ├── assets/
        │   └── uniform.svg
        ├── styles.css
        ├── main.tsx
        └── types.ts
```

### Routes

The application exposes parent-friendly routes via React Router:

- `/patches` — shows the list of earned patches.
- `/patches/:id` — detail view for a single patch with award criteria.
- `/uniform-guide` — interactive placement guide overlaying badge locations on a uniform illustration.

## Running the site locally

1. Install dependencies:

   ```bash
   cd web
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The server runs on [`http://localhost:5173`](http://localhost:5173) by default.

3. To create a production build:

   ```bash
   npm run build
   ```

   Preview the built assets with `npm run preview`.

## Managing badge data

Badge metadata is stored in [`web/src/data/badges.json`](web/src/data/badges.json). Each badge entry includes:

- `id`: unique identifier used for routing (keep it URL-friendly).
- `name`: display name.
- `image`: path to an image located under [`web/public/badges`](web/public/badges).
- `description`: summary shown in lists and detail views.
- `awardDate`: ISO date string used for display.
- `uniformPlacement`: placement instructions and guide coordinates.
  - `area`: short label for the uniform area (e.g., "Front Sash").
  - `position`: descriptive text for pinning/sewing guidance.
  - `coordinates`: `{ "top": number, "left": number }` percentages used by the uniform overlay.
- `criteria`: array of strings describing how the badge was earned.

To add or update a badge:

1. Place the badge image (`.svg` or `.png`) in `web/public/badges/`.
2. Add a new badge object or update an existing one in `badges.json`.
3. (Optional) Adjust `coordinates` so the placement marker aligns with the correct spot on the uniform illustration.

Because the data is static, no rebuild is required during development—Vite will reload changes automatically. For production builds, rerun `npm run build` to capture the latest data.
