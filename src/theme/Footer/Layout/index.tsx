/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  _style,
  links,
  links2,
  logo,
  logo2,
  copyright,
}: Props): JSX.Element {
  return (
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
  );
}
