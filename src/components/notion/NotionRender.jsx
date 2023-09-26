/**
 * @file contains the NotionRender component which renders the Notion page using recordMap
 */

'use client';
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic';

/**
 * Imports of code and collection markdown support for rendering
 */

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);

export default function NotionRender({ recordMap }) {
  return (
    <div className='bg-light rounded-3'>
      <NotionRenderer
        className='font-monospace'
        recordMap={recordMap}
        darkMode={false}
        components={{
          Code,
          Collection,
        }}
      />
    </div>
  );
}