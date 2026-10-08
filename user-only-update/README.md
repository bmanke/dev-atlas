# Dev Atlas — User-only catalogue update

This is an update package, not a full Astro project.

## Apply (recommended)

1. Extract this archive into a folder named `user-only-update` in your Dev Atlas project root.
2. From the project root, run:

```sh
node user-only-update/apply.mjs
npm run check
npm run build
```

The script replaces the entire catalogue, preserves IDs for matching category-and-URL entries, updates the package version and README, and prepends the changelog without discarding earlier entries. It creates `src/data/resources.json.before-user-only.bak`. Remove that backup before committing if you no longer need it.

Do not run the earlier additive update script again: it would reintroduce its merge behaviour.

## Manual alternative

Replace `src/data/resources.json` with the included `resources.json` and copy the release entry from CHANGELOG.md into the project's changelog. Manual replacement uses new sequential IDs, so clear the `dev-atlas:favourites:v1` localStorage key to avoid associating old favourite IDs with different links. The recommended apply script avoids ID reuse.

All 63 category placements use only user-provided URLs. Both MDN learning URLs are deliberately retained, as are cross-category links. Existing entries appear only if they were explicitly included in the user list. Category labels match the original project so the existing icon mapping continues to work.

No external links were revalidated for this removal-only update, and no Node build was run. Descriptions are neutral directory labels and can be edited in the catalogue.
