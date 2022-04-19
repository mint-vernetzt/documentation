import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export default function FooterCustomLinks({links}): JSX.Element {
  return (
    <ul className="flex-100 pb-2 mb-0 md:flex-auto meta_nav md:flex text-neutral-600 text-sm leading-4 font-semibold">
      {links.map((item, i) => (
        <React.Fragment key={i}>
          <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8">
            <Link to={item.href}>
              <Translate
                id={item.translationId}>
                {item.label}
              </Translate>
            </Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}