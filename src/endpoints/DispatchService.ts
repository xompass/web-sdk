import { ApiFetch, ApiRequestOptions } from "../core/ApiFetch";

/**
 * Forward event data to the dispatch service.
 * /Dispatches/:id/forward
 */
export async function Dispatch_forward(
  id: string,
  payload: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Dispatches/:id/forward",
    routeParams: {
      id,
    },
    body: payload,
    ...options,
  });
}
