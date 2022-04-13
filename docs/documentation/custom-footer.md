---
sidebar_position: 2
tags:
- docs
- custom-element
---

# Custom Footer
The standard Docusaurus footer was customized to better resemble the footer of the [MINTvernetzt website](https://mint-vernetzt.de/). This
was achieved by swizzeling (ejecting) the footer components to `src/theme/Footer`.

## The changes

### Changes in the FooterLayout component
The FooterLayout component was extended to have two footer sections, one for the traditional links, the ones from the themeConfig,
and the other for the links to the [MINTvernetzt website](https://mint-vernetzt.de/), e.g. the imprint and the privacy policy. Furthermore,
the website logo was also moved into that section and a second logo was added to show the [bmbf](https://bmbf.de) as a supporter.

```tsx
...

<footer>
  <div className='footer-section py-6 lg:py-8 border-t border-neutral-400 overflow-hidden'>
    <div className="container">
      {/* Links from siteConfig.themeConfig.footer.links */}
      <div className="text-center">
        {links}
      </div>
    </div>
  </div>
  <div className='footer-section py-4 lg:py-10 border-t border-neutral-400 overflow-hidden'>
    <div className='container'>
      <div className="flex flex-wrap lg:items-center">
        {/* Logo from siteConfig.themeConfig.footer.logo */}
        <div className="logo-mint md:pt-8 lg:pt-0 md:order-1 lg:pr-8 xl:pr-16">
          {logo}
        </div>
        {/* Links from siteConfig.customFields.footer.customLinks */}
        <div className="flex-100 lg:flex-auto pt-6 lg:pt-0 lg:pb-0 flex flex-wrap md:order-3 lg:order-2">
          {links2}
          {/* Links from siteConfig.themeConfig.footer.copyright */}
          <div className="flex-100 md:flex-initial md:text-right pb-6 lg:pt-0 lg:pb-0 md:ml-auto">
            { copyright }
          </div>
        </div>
        {/* Links from siteConfig.customFields.footer.customLogo */}
        <div className="pb-4 md:pb-0 logo-bmbf md:ml-auto lg:ml-0 md:order-2 lg:order-3 lg:pl-8 xl:pl-16">
          {logo2}
        </div>
      </div>
    </div>
  </div>
</footer>

...
```

### New FooterCustomLinks component
To cleanly add the links while preserving the styling a new component was created, which does exactly that.

```tsx
import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';

export default function FooterCustomLinks({links}): JSX.Element {
  return (
    <ul className="flex-100 pb-2 mb-0 md:flex-auto meta_nav md:flex text-neutral-600 text-sm leading-4 font-semibold">
      {links.map((item, i) => (
        <React.Fragment key={i}>
          <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8">
            <LinkItem item={item} />
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}
```

## Custom Config Fields
To keep the footer configurable, the following fields were added to the `siteConfig.customFields` object:

```
footer: {
  de: {
    customLinks: [
      {
        label: 'Impressum',
        href: 'https://mint-vernetzt.de/imprint/',
      },
      {
        label: 'Datenschutz',
        href: 'https://mint-vernetzt.de/privacy/',
      },
      {
        label: 'Newsletter',
        href: 'https://mint-vernetzt.de/mintvernetzt/#newsletter',
      },
      {
        label: 'Kontakt',
        href: 'https://mint-vernetzt.de/about/#contact-details',
      },
    ],
    customLogo:{
      src: 'img/bmbf.svg',
      alt: 'Bundesministerium für Bildung und Forschung',
      srcDark: 'img/bmbf.svg',
    }
  },
  en: {
    customLinks: [
      {
        label: 'Imprint',
        href: 'https://mint-vernetzt.de/imprint/',
      },
      {
        label: 'Privacy Policy',
        href: 'https://mint-vernetzt.de/privacy/',
      },
      {
        label: 'Newsletter',
        href: 'https://mint-vernetzt.de/mintvernetzt/#newsletter',
      },
      {
        label: 'Contact',
        href: 'https://mint-vernetzt.de/about/#contact-details',
      },
    ],
    customLogo:{
      src: 'img/bmbf.svg',
      alt: 'Bundesministerium für Bildung und Forschung',
      srcDark: 'img/bmbf.svg',
    }
  }
}
```
The footer config is divided into the config for the `de` and `en` language. This was necessary, because Docusaurus does not natively translate the customFields.
Instead, I built a system where the current i18n locale decides which config to use. In case that the current i18n locale is not present, the
system will fallback to the `en` config.

The customLogo is as can be seen from the src the logo of the [Bundesministerium für Bildung und Forschung](https://www.bmbf.de/), while
the custom links are the links to the imprint, privacy policy, newsletter and contact page of the [MINTvernetzt website](https://mint-vernetzt.de/).
It's advised to keep the number of links to exactly four, as that is what the component was designed for.