/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import TagsListByLetter from '@theme/TagsListByLetter';
import Translate from '@docusaurus/Translate';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';

export default function DocTagsListPage({tags}) {
  const title = translateTagsPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tags_list" />
      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--8 col--offset-2">
              <header className="mb-8">
                <h1 className='text-3xl mb-0'>{title}</h1>
                <Link className='underline hover:no-underline' href='/'>
                  <Translate
                    id="theme.common.skipToMainContent"
                    description="The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation">
                    Skip to main content
                  </Translate>
                </Link>
              </header>
              <TagsListByLetter tags={tags} />
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
