# MINTvernetzt Docs

## Technical Documentation

### Useful commands

```
$ npm run start (-- --host 0.0.0.0 or --locale de) # Start the server
$ npm run build # Build the website
$ npm run serve # Serves the built website
```

### Technologies used

[Docusaurus](https://docusaurus.io/) in combination with [TypeScript](https://docusaurus.io/docs/typescript-support) and [TailwindCSS](https://dev.to/sajclarke_62/using-tailwindcss-v3-in-docusaurus-in-5-steps-5c26).

### Customizations made

#### custom.css
- The color theme (from custom.css) was modified to use #154194 as the primary color
- The default font was changed to [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)
- The link to GitHub was modified to only display an icon

#### docusaurus.config.js
- Use with tailwind (custom plugin)
- Docs-only mode (see [docs-only mode](https://docusaurus.io/docs/docs-introduction#docs-only-mode))
- The dark mode was disabled (contrast with the primary color was not sufficient)
- Localization was added (de, en)
- Versioning was added (currently only "Next" version)#
- Custom fields for the footer were added (to support the customisations)

#### Swizzling
- The language icon was modified to be inline with the language label (tailwind probably broke this)
- The pages in context with tagging (for the docs as well as the blogs) were redesigned to be more consistent and less cluttered
- The footer was completely customized to match the one on the [MINTvernetzt Website](https://www.mint-vernetzt.de/)
