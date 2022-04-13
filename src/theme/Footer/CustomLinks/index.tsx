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