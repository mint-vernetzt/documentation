/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';

function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className="" // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: item.html,
      }}
    />
  ) : (
    <li key={item.href || item.to} className="">
      <LinkItem item={item} />
    </li>
  );
}

function Column({column}) {
  return (
    <div className="col mb-3 mt-3 lg:mb-10 lg:mt-5">
      <div className="text-primary-500"><b>{column.title}</b></div>
      <ul className="">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="row">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
