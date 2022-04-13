/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import BlogLayout from '@theme/BlogLayout';
import TagsListByLetter from '@theme/TagsListByLetter';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function BlogTagsListPage(props) {
  const {tags, sidebar} = props;
  const title = translateTagsPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <BlogLayout sidebar={sidebar}>
        <header className="mb-8">
          <h1 className='text-3xl mb-0'>{title}</h1>
          <Link className='underline hover:no-underline' href='/blog'>
            <Translate
              id="theme.common.skipToMainContent"
              description="The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation">
              Skip to main content
            </Translate>
          </Link>
        </header>
        <TagsListByLetter tags={Object.values(tags)} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
