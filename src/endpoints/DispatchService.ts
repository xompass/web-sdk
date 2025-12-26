import { ApiFetch } from '../core/ApiFetch';

/**
 * Api services for the `Dispatch` model.
 */

/**
 * Forward event data to the dispatch service.
 * /Dispatches/:id/forward
 */
export async function Dispatch_forward(id: string, payload: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Dispatches/:id/forward',
    routeParams: {
      id,
    },
    body: {
      payload,
    },
  });
}
