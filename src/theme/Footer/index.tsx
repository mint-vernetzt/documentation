/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FooterCustomLinks from "@site/src/theme/Footer/CustomLinks";

function Footer(): JSX.Element | null {
  const {siteConfig} = useDocusaurusContext();
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  const {customLogo, customLinks} = siteConfig.customFields.footer;

  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      links2={customLinks && customLinks.length > 0 && <FooterCustomLinks links={customLinks} />}
      logo={logo && <FooterLogo logo={logo} />}
      logo2={customLogo && <FooterLogo logo={customLogo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
