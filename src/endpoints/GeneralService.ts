import { ApiFetch, ApiRequestOptions } from "../core/ApiFetch";

type GeocodeResponse = {
  address: string;
  latitude: number;
  longitude: number;
  id: string;
};

/**
 * activityLogs consultas de Admin.
 * /geocode
 */
export async function Geocode(
  address: string,
  options?: ApiRequestOptions,
): Promise<GeocodeResponse> {
  const _urlParams: any = {};
  if (address) {
    _urlParams["address"] = address;
  }

  return ApiFetch({
    method: "GET",
    url: "/geocode",
    urlParams: _urlParams,
    routeParams: {},
    ...options,
  });
}
