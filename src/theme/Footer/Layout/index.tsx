/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  logo,
  logo2,
  copyright,
}: Props): JSX.Element {
  return (
    <div className='bg-secondary-500'>
      <footer className='bg-secondary-300 text-center'>
        <div className='container'>
          <div className="flex flex-wrap lg:items-center">
            <div className="logo-mint md:pt-8 lg:pt-0 md:order-1 lg:pr-8 xl:pr-16 mb-4"><a aria-current="page" className="" href="/">
              {logo}
            </a></div>
            <div className="flex-100 lg:flex-auto pt-6 lg:pt-0 lg:pb-0 flex flex-wrap md:order-3 lg:order-2">
              <ul
                className="flex-100 pb-2 mb-0 md:flex-auto meta_nav md:flex text-neutral-600 text-sm leading-4 font-semibold">
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block" href="/imprint/">Impressum</a></li>
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block" href="/privacy/">Datenschutz</a></li>
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block"
                                                                href="/mintvernetzt/#newsletter">Newsletter</a></li>
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block"
                                                                href="/about/#contact-details">Kontakt</a></li>
              </ul>
              <div className="flex-100 md:flex-initial md:text-right pb-6 lg:pt-0 lg:pb-0 md:ml-auto"><p
                className="text-sm leading-4 font-semibold">Copyright © 2021. All Rights Reserved matrix gGmbH</p></div>
            </div>
            <div className="pb-4 md:pb-0 logo-bmbf md:ml-auto lg:ml-0 md:order-2 lg:order-3 lg:pl-8 xl:pl-16  mb-4"><a
              href="https://www.bmbf.de/" target="_blank">
              {logo2}
            </a></div>
          </div>
        </div>
      </footer>
      <footer className='bg-secondary-500 text-center'>
        <div className="container pt-4 pb-4">
          <div className="bg-secondary-500">
            {links}
          </div>
        </div>
      </footer>
    </div>
  );
}
