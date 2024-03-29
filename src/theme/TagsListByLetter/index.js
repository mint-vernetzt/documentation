/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Tag from '@theme/Tag';
import {listTagsByLetters} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function TagLetterEntryItem({letterEntry}) {
  return (
    <article>
      <h2 className='text-xl'>{letterEntry.letter}</h2>
      <ul className="padding--none">
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
      <hr  className='my-4'/>
    </article>
  );
}

export default function TagsListByLetter({tags}) {
  const letterList = listTagsByLetters(tags);
  return (
    <section>
      <hr  className='my-4'/>
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}
