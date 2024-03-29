/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';

function Separator() {
  return <span className="footer__link-separator">·</span>;
}

function SimpleLinkItem({item}) {
  return item.html ? (
    <span
      className="" // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: item.html,
      }}
    />
  ) : (
    <LinkItem item={item} />
  );
}

export default function FooterLinksSimple({links}) {
  return (
    <div className="text-center">
      <div className="">
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <SimpleLinkItem item={item} />
            {links.length !== i + 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
