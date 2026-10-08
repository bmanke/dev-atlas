# Dev Atlas

An Astro + React + Tailwind CSS resource directory with 63 user-provided category entries across 10 categories.

## Run locally

Use a Node.js release supported by Astro 5 (Node 22 LTS is a suitable choice).

```sh
npm install
npm run dev
```

Open the localhost URL printed by Astro.

```sh
npm run check
npm run build
npm run preview
```

The project intentionally targets Astro 5, React 19, and Tailwind 4. npm resolves compatible releases within those major versions. No lockfile is included; commit the generated package-lock.json after installing and validating locally.

## Features

- Responsive dark interface with lime accents
- All ten requested categories with four starter resources each
- Case-insensitive multi-word search across title, description, category, and tag
- Category filters, saved-only view, curated and alphabetical sorting
- Favourites stored locally in the browser; no account or server required
- Keyboard focus styles, skip link, labelled controls, live result counts, reduced-motion support
- Static Astro output, with one hydrated React island for the directory

## Edit resources

Edit `src/data/resources.json`. Each record contains a unique numeric `id`, `category`, `title`, `description`, `url`, and `tag`. Categories and counts are derived from the data. Add a category icon to `marks` in `src/components/Directory.tsx` if adding a new category.

Saved IDs are local to each browser and origin. Do not reuse IDs for different resources. There is no cross-device synchronisation. Resource links open in a new tab. External services, extension compatibility, and pricing can change; review links before publishing. The catalogue is a starter selection, not a claim that every destination was individually verified.

## Deployment

Run `npm run build` and deploy the generated `dist` directory to a static hosting service. For deployment at a subpath rather than a domain root, configure Astro's `base` and adjust the home and favicon paths accordingly.

## Architecture

- `src/pages/index.astro`: metadata and document shell
- `src/components/Directory.tsx`: React interface and local favourites
- `src/data/resources.json`: editable resource catalogue
- `src/styles/global.css`: Tailwind import and global styles
- `astro.config.mjs`: React integration and Tailwind Vite plugin

## Validation note

This archive was generated without a Node.js runtime or network package installation. Dependency installation, type checking, and production build have not been run. Run the commands above before deployment.

## User-only catalogue

Version 1.2.0 replaces the starter selection with only the 63 category placements supplied by the user. Cross-category links and both supplied MDN JavaScript learning URLs are retained. See CHANGELOG.md.
