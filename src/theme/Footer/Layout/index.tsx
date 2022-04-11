/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ReactNode} from 'react';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  logo,
  logo2,
  copyright,
}: Props): JSX.Element {
  return (
    <footer>
      <div className='footer-section py-6 lg:py-8 border-t border-neutral-400 overflow-hidden'>
        <div className="container">
          <div className="text-center">
            {links}
          </div>
        </div>
      </div>
      <div className='footer-section py-4 lg:py-10 border-t border-neutral-400 overflow-hidden'>
        <div className='container'>
          <div className="flex flex-wrap lg:items-center">
            {/* MINTvenertzt logo */}
            <div className="logo-mint md:pt-8 lg:pt-0 md:order-1 lg:pr-8 xl:pr-16"><a aria-current="page" className="" href="/">
              {logo}
            </a></div>
            {/* MINTvenertzt links imprint, privacy, etc. -> not (yet) configurable */}
            <div className="flex-100 lg:flex-auto pt-6 lg:pt-0 lg:pb-0 flex flex-wrap md:order-3 lg:order-2">
              <ul
                className="flex-100 pb-2 mb-0 md:flex-auto meta_nav md:flex text-neutral-600 text-sm leading-4 font-semibold">
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block" href="https://mint-vernetzt.de/imprint/" target="_blank">Impressum</a></li>
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block" href="https://mint-vernetzt.de/privacy/" target="_blank">Datenschutz</a></li>
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block"
                                                                href="https://mint-vernetzt.de/mintvernetzt/#newsletter" target="_blank">Newsletter</a></li>
                <li className="pb-4 md:pb-0 md:pr-4 xl:pr-8"><a className="block"
                                                                href="https://mint-vernetzt.de/about/#contact-details" target="_blank">Kontakt</a></li>
              </ul>
              <div className="flex-100 md:flex-initial md:text-right pb-6 lg:pt-0 lg:pb-0 md:ml-auto">
                { copyright }
              </div>
            </div>
            {/* BMBF logo */}
            <div className="pb-4 md:pb-0 logo-bmbf md:ml-auto lg:ml-0 md:order-2 lg:order-3 lg:pl-8 xl:pl-16"><a
              href="https://www.bmbf.de/" target="_blank">
              {logo2}
            </a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
