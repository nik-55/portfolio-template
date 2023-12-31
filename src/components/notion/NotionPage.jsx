/**
 * @file contains the rendered notion component along with other components in a card format
 * Header --> Title
 * Body --> Rendered Notion Page
 * Footer --> Time [optional]
 */

import { notionpage } from '@/services/notion';
import NotionRender from './NotionRender';
import ComponentError from '../ComponentError';

export default async function NotionPage({ id, title, time }) {
  let recordMap = null,
    error = null;
  try {
    recordMap = await notionpage(id);
  } catch (err) {
    error = 'Error occured while fetching highlights';
  }
  return (
    <div>
      <div className='card border-dark text-dark'>
        <div
          className='card-header border-dark'
          style={{ background: 'inherit' }}
        >
          <h5 className='card-title'>{title}</h5>
        </div>
        <div
          className='card-body'
          style={{ overflowY: 'auto', maxHeight: '70vh' }}
        >
          {error ? (
            <ComponentError error={error} />
          ) : (
            <>
              <NotionRender recordMap={recordMap} />
              {time && (
                <div className='mt-3'>
                  <small
                    href='#'
                    className='border border-dark rounded p-1'
                    target={'_blank'}
                  >
                    {time}
                  </small>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
