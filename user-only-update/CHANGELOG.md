# Changelog

## [1.3.0] - 2026-10-09

### Added

- GitHub contribution panel above the directory footer.
- GitHub icon linking to the project repository.
- “Create an issue or make a pull request for changes” invitation.
- Direct links to the issue creation and pull-request comparison pages.
- Responsive layout and accessible labels for links opening in a new tab.

### Unchanged

- User-provided resource catalogue and category placements.
- Search, filters, sorting, and saved favourites.

## [1.2.0] - 2026-10-07

### Changed

- Replaced the starter catalogue with only the links supplied by the user.
- Retained all 63 requested category placements across ten categories.
- Removed all original resources not included in the user-provided list.
- Kept original resources that the user explicitly supplied.
- Preserved exact URLs, including both MDN JavaScript learning URLs.
- Kept links in multiple categories when explicitly requested.
- Apply script preserves matching category-and-URL IDs and allocates new IDs above the previous maximum.
- A backup of the previous catalogue is created before replacement.
- No React, Astro, Tailwind, or layout changes.

### Category counts

| Category | Entries |
| --- | ---: |
| Community | 2 |
| Git | 5 |
| VS Code Extensions | 4 |
| JavaScript | 18 |
| Validators & Checkers | 5 |
| Regex | 3 |
| JetBrains Plugins | 1 |
| UI / UX | 10 |
| CSS | 11 |
| HTML | 4 |
| Total | 63 |

### Retained user-provided links

#### Community

- [Scrimba — Learn JavaScript](https://scrimba.com/learn-javascript-c0v)
- [SDEV Resources](https://bmanke.github.io/SDEV-Resources/)

#### Git

- [Oh My Git!](https://ohmygit.org/)
- [So You Think You Know Git — FOSDEM 2024](https://www.youtube.com/watch?v=aolI_Rz0ZqY)
- [So You Think You Know Git Part 2 — DevWorld 2024](https://www.youtube.com/watch?v=Md44rcw13k4)
- [Git Internals — CS50 Tech Talk](https://www.youtube.com/watch?v=lG90LZotrpo)
- [Git & GitHub Tutorial — JavaScript Mastery](https://www.youtube.com/watch?v=S7XpTAnSDL4)

#### VS Code Extensions

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Open in Browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [VS Code Extensions for React Developers](https://dev.to/devland/vs-code-extensions-you-should-use-as-a-react-developer-2f6i)

#### JavaScript

- [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/default.asp)
- [MDN — Learn JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
- [freeCodeCamp — JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Edabit JavaScript Tutorial](https://edabit.com/tutorial/javascript)
- [Codewars JavaScript Kata](https://www.codewars.com/kata/search/javascript)
- [LeetCode — 30 Days of JavaScript](https://leetcode.com/studyplan/30-days-of-javascript/)
- [Exercism JavaScript Track](https://exercism.org/tracks/javascript)
- [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges)
- [Smashing Magazine — JavaScript](https://www.smashingmagazine.com/category/javascript/)
- [JavaScript Roadmap](https://roadmap.sh/javascript)
- [web.dev — Learn JavaScript](https://web.dev/learn/javascript)
- [JavaScript30](https://javascript30.com/)
- [MDN — Core Scripting](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)
- [JSbooks](https://jsbooks.revolunet.com/)
- [React Developer Tools — Chrome](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1)

#### Validators & Checkers

- [W3C Markup Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JSONLint](https://jsonlint.com/)
- [AccessibilityChecker.org](https://www.accessibilitychecker.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### Regex

- [RexEgg Regex Cheat Sheet](https://www.rexegg.com/regex-quickstart.php)
- [regex101](https://regex101.com/)
- [Regex Crossword](https://regexcrossword.com/)

#### JetBrains Plugins

- [WireMock](https://plugins.jetbrains.com/plugin/23695-wiremock)

#### UI / UX

- [Google Material Symbols & Icons](https://fonts.google.com/icons)
- [Iconify Icon Sets](https://icon-sets.iconify.design/)
- [SVG Repo](https://www.svgrepo.com/)
- [Uiverse](https://uiverse.io/)
- [Aceternity UI](https://ui.aceternity.com/)
- [Lorem Picsum](https://picsum.photos/)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [Adobe Color Wheel](https://color.adobe.com/create/color-wheel)
- [WhatTheFont](https://www.myfonts.com/pages/whatthefont)
- [OpenMoji](https://openmoji.org/)

#### CSS

- [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [CodePen Blog](https://blog.codepen.io/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
- [CSSBattle](https://cssbattle.dev/)
- [CSS Generators](https://css-generators.com/)
- [web.dev — Learn CSS](https://web.dev/learn/css/)

#### HTML

- [W3Schools HTML Tag Reference](https://www.w3schools.com/tags/default.asp)
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/default.asp)
- [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges)

### Validation

- Catalogue size and category counts checked during generation.
- The project production build and browser interactions have not been tested.
