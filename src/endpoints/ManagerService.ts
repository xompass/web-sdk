import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  UploadFile,
  UploadableFile,
  unwrapCount,
} from "../core/ApiFetch";
import { Asset } from "../models/Asset";
import { CctvDashboard } from "../models/CctvDashboard";
import { CommonAccessToken } from "../models/CommonAccessToken";
import { CountReport } from "../models/CountReport";
import { Country } from "../models/Country";
import { Credential } from "../models/Credential";
import { Customer } from "../models/Customer";
import { EventDashboard } from "../models/EventDashboard";
import { Log } from "../models/Log";
import {
  Manager,
  ManagerStorageContainer,
  Permission,
} from "../models/Manager";
import { PeopleCounterReport } from "../models/PeopleCounterReport";
import { Report } from "../models/Report";
import { StoreVideoAnalyticDashboard } from "../models/StoreVideoAnalyticDashboard";
import { TimeZone } from "../models/TimeZone";
import { TrafficFlowAnalysis } from "../models/TrafficFlowAnalysis";
import { View } from "../models/View";

/**
 * Find a related item by id for accessTokens.
 * /Managers/:id/accessTokens/:fk
 */
export async function Manager_FindByIdAccessTokens(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/accessTokens/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for activityLogs.
 * /Managers/:id/activityLogs/:fk
 */
export async function Manager_FindByIdActivityLogs(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/activityLogs/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for credentials.
 * /Managers/:id/credentials/:fk
 */
export async function Manager_FindByIdCredentials(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Credential> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/credentials/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Check the existence of credentials relation to an item by id.
 * /Managers/:id/credentials/rel/:fk
 */
export async function Manager_ExistsCredentials(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Managers/:id/credentials/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation customer.
 * /Managers/:id/customer
 */
export async function Manager_GetCustomer(
  id: string,
  options?: ApiRequestOptions,
): Promise<Customer> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/customer",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation country.
 * /Managers/:id/country
 */
export async function Manager_GetCountry(
  id: string,
  options?: ApiRequestOptions,
): Promise<Country> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/country",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a related item by id for assets.
 * /Managers/:id/assets/:fk
 */
export async function Manager_FindByIdAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for assets.
 * /Managers/:id/assets/:fk
 */
export async function Manager_DestroyByIdAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for assets.
 * /Managers/:id/assets/:fk
 */
export async function Manager_UpdateByIdAssets(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for assets.
 * /Managers/:id/assets/rel/:fk
 */
export async function Manager_LinkAssets(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the assets relation to an item by id.
 * /Managers/:id/assets/rel/:fk
 */
export async function Manager_UnlinkAssets(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for cctvDashboards.
 * /Managers/:id/cctvDashboards/:fk
 */
export async function Manager_FindByIdCctvDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CctvDashboard> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/cctvDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for cctvDashboards.
 * /Managers/:id/cctvDashboards/:fk
 */
export async function Manager_DestroyByIdCctvDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/cctvDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for cctvDashboards.
 * /Managers/:id/cctvDashboards/:fk
 */
export async function Manager_UpdateByIdCctvDashboards(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<CctvDashboard> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/cctvDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for cctvDashboards.
 * /Managers/:id/cctvDashboards/rel/:fk
 */
export async function Manager_LinkCctvDashboards(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/cctvDashboards/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the cctvDashboards relation to an item by id.
 * /Managers/:id/cctvDashboards/rel/:fk
 */
export async function Manager_UnlinkCctvDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/cctvDashboards/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for countReports.
 * /Managers/:id/countReports/:fk
 */
export async function Manager_FindByIdCountReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<CountReport> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/countReports/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for countReports.
 * /Managers/:id/countReports/:fk
 */
export async function Manager_DestroyByIdCountReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/countReports/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for countReports.
 * /Managers/:id/countReports/:fk
 */
export async function Manager_UpdateByIdCountReports(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<CountReport> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/countReports/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for countReports.
 * /Managers/:id/countReports/rel/:fk
 */
export async function Manager_LinkCountReports(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/countReports/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the countReports relation to an item by id.
 * /Managers/:id/countReports/rel/:fk
 */
export async function Manager_UnlinkCountReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/countReports/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for eventDashboards.
 * /Managers/:id/eventDashboards/:fk
 */
export async function Manager_FindByIdEventDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<EventDashboard> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/eventDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for eventDashboards.
 * /Managers/:id/eventDashboards/:fk
 */
export async function Manager_DestroyByIdEventDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/eventDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for eventDashboards.
 * /Managers/:id/eventDashboards/:fk
 */
export async function Manager_UpdateByIdEventDashboards(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<EventDashboard> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/eventDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for eventDashboards.
 * /Managers/:id/eventDashboards/rel/:fk
 */
export async function Manager_LinkEventDashboards(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/eventDashboards/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the eventDashboards relation to an item by id.
 * /Managers/:id/eventDashboards/rel/:fk
 */
export async function Manager_UnlinkEventDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/eventDashboards/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches hasOne relation container.
 * /Managers/:id/container
 */
export async function Manager_GetContainer(
  id: string,
  options?: ApiRequestOptions,
): Promise<ManagerStorageContainer> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/container",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a related item by id for peopleCounterReports.
 * /Managers/:id/peopleCounterReports/:fk
 */
export async function Manager_FindByIdPeopleCounterReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/peopleCounterReports/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for peopleCounterReports.
 * /Managers/:id/peopleCounterReports/:fk
 */
export async function Manager_DestroyByIdPeopleCounterReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/peopleCounterReports/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for peopleCounterReports.
 * /Managers/:id/peopleCounterReports/:fk
 */
export async function Manager_UpdateByIdPeopleCounterReports(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/peopleCounterReports/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for peopleCounterReports.
 * /Managers/:id/peopleCounterReports/rel/:fk
 */
export async function Manager_LinkPeopleCounterReports(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/peopleCounterReports/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the peopleCounterReports relation to an item by id.
 * /Managers/:id/peopleCounterReports/rel/:fk
 */
export async function Manager_UnlinkPeopleCounterReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/peopleCounterReports/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches hasOne relation permission.
 * /Managers/:id/permission
 */
export async function Manager_GetPermission(
  id: string,
  options?: ApiRequestOptions,
): Promise<Permission> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/permission",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in permission of this model.
 * /Managers/:id/permission
 */
export async function Manager_CreatePermission(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Permission> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/:id/permission",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Update permission of this model.
 * /Managers/:id/permission
 */
export async function Manager_UpdatePermission(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Permission> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/permission",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for reports.
 * /Managers/:id/reports/:fk
 */
export async function Manager_FindByIdReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Report> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/reports/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for reports.
 * /Managers/:id/reports/:fk
 */
export async function Manager_DestroyByIdReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/reports/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for reports.
 * /Managers/:id/reports/:fk
 */
export async function Manager_UpdateByIdReports(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Report> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/reports/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for reports.
 * /Managers/:id/reports/rel/:fk
 */
export async function Manager_LinkReports(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/reports/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the reports relation to an item by id.
 * /Managers/:id/reports/rel/:fk
 */
export async function Manager_UnlinkReports(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/reports/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for storeVideoAnalyticDashboards.
 * /Managers/:id/storeVideoAnalyticDashboards/:fk
 */
export async function Manager_FindByIdStoreVideoAnalyticDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<StoreVideoAnalyticDashboard> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/storeVideoAnalyticDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for storeVideoAnalyticDashboards.
 * /Managers/:id/storeVideoAnalyticDashboards/:fk
 */
export async function Manager_DestroyByIdStoreVideoAnalyticDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/storeVideoAnalyticDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for storeVideoAnalyticDashboards.
 * /Managers/:id/storeVideoAnalyticDashboards/:fk
 */
export async function Manager_UpdateByIdStoreVideoAnalyticDashboards(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<StoreVideoAnalyticDashboard> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/storeVideoAnalyticDashboards/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for storeVideoAnalyticDashboards.
 * /Managers/:id/storeVideoAnalyticDashboards/rel/:fk
 */
export async function Manager_LinkStoreVideoAnalyticDashboards(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/storeVideoAnalyticDashboards/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the storeVideoAnalyticDashboards relation to an item by id.
 * /Managers/:id/storeVideoAnalyticDashboards/rel/:fk
 */
export async function Manager_UnlinkStoreVideoAnalyticDashboards(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/storeVideoAnalyticDashboards/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches belongsTo relation timeZone.
 * /Managers/:id/timeZone
 */
export async function Manager_GetTimeZone(
  id: string,
  options?: ApiRequestOptions,
): Promise<TimeZone> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/timeZone",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Find a related item by id for trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/:fk
 */
export async function Manager_FindByIdTrafficFlowAnalysis(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/trafficFlowAnalysis/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/:fk
 */
export async function Manager_DestroyByIdTrafficFlowAnalysis(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/trafficFlowAnalysis/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/:fk
 */
export async function Manager_UpdateByIdTrafficFlowAnalysis(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/trafficFlowAnalysis/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/rel/:fk
 */
export async function Manager_LinkTrafficFlowAnalysis(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/trafficFlowAnalysis/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the trafficFlowAnalysis relation to an item by id.
 * /Managers/:id/trafficFlowAnalysis/rel/:fk
 */
export async function Manager_UnlinkTrafficFlowAnalysis(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/trafficFlowAnalysis/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for views.
 * /Managers/:id/views/:fk
 */
export async function Manager_FindByIdViews(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<View> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/views/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Add a related item by id for views.
 * /Managers/:id/views/rel/:fk
 */
export async function Manager_LinkViews(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id/views/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the views relation to an item by id.
 * /Managers/:id/views/rel/:fk
 */
export async function Manager_UnlinkViews(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/views/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Queries activityLogs of Manager.
 * /Managers/:id/activityLogs
 */
export async function Manager_GetActivityLogs(
  id: string,
  filter?: Filter<Log>,
  options?: ApiRequestOptions,
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/activityLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts activityLogs of Manager.
 * /Managers/:id/activityLogs/count
 */
export async function Manager_CountActivityLogs(
  id: string,
  where?: Filter<Log>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/activityLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries credentials of Manager.
 * /Managers/:id/credentials
 */
export async function Manager_GetCredentials(
  id: string,
  filter?: Filter<Credential>,
  options?: ApiRequestOptions,
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/credentials",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts credentials of Manager.
 * /Managers/:id/credentials/count
 */
export async function Manager_CountCredentials(
  id: string,
  where?: Filter<Credential>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/credentials/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries assets of Manager.
 * /Managers/:id/assets
 */
export async function Manager_GetAssets(
  id: string,
  filter?: Filter<Asset>,
  options?: ApiRequestOptions,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts assets of Manager.
 * /Managers/:id/assets/count
 */
export async function Manager_CountAssets(
  id: string,
  where?: Filter<Asset>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries cctvDashboards of Manager.
 * /Managers/:id/cctvDashboards
 */
export async function Manager_GetCctvDashboards(
  id: string,
  filter?: Filter<CctvDashboard>,
  options?: ApiRequestOptions,
): Promise<CctvDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/cctvDashboards",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts cctvDashboards of Manager.
 * /Managers/:id/cctvDashboards/count
 */
export async function Manager_CountCctvDashboards(
  id: string,
  where?: Filter<CctvDashboard>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/cctvDashboards/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries countReports of Manager.
 * /Managers/:id/countReports
 */
export async function Manager_GetCountReports(
  id: string,
  filter?: Filter<CountReport>,
  options?: ApiRequestOptions,
): Promise<CountReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/countReports",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts countReports of Manager.
 * /Managers/:id/countReports/count
 */
export async function Manager_CountCountReports(
  id: string,
  where?: Filter<CountReport>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/countReports/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries eventDashboards of Manager.
 * /Managers/:id/eventDashboards
 */
export async function Manager_GetEventDashboards(
  id: string,
  filter?: Filter<EventDashboard>,
  options?: ApiRequestOptions,
): Promise<EventDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/eventDashboards",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts eventDashboards of Manager.
 * /Managers/:id/eventDashboards/count
 */
export async function Manager_CountEventDashboards(
  id: string,
  where?: Filter<EventDashboard>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/eventDashboards/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries peopleCounterReports of Manager.
 * /Managers/:id/peopleCounterReports
 */
export async function Manager_GetPeopleCounterReports(
  id: string,
  filter?: Filter<PeopleCounterReport>,
  options?: ApiRequestOptions,
): Promise<PeopleCounterReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/peopleCounterReports",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts peopleCounterReports of Manager.
 * /Managers/:id/peopleCounterReports/count
 */
export async function Manager_CountPeopleCounterReports(
  id: string,
  where?: Filter<PeopleCounterReport>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/peopleCounterReports/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries reports of Manager.
 * /Managers/:id/reports
 */
export async function Manager_GetReports(
  id: string,
  filter?: Filter<Report>,
  options?: ApiRequestOptions,
): Promise<Report[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/reports",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts reports of Manager.
 * /Managers/:id/reports/count
 */
export async function Manager_CountReports(
  id: string,
  where?: Filter<Report>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/reports/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries storeVideoAnalyticDashboards of Manager.
 * /Managers/:id/storeVideoAnalyticDashboards
 */
export async function Manager_GetStoreVideoAnalyticDashboards(
  id: string,
  filter?: Filter<StoreVideoAnalyticDashboard>,
  options?: ApiRequestOptions,
): Promise<StoreVideoAnalyticDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/storeVideoAnalyticDashboards",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts storeVideoAnalyticDashboards of Manager.
 * /Managers/:id/storeVideoAnalyticDashboards/count
 */
export async function Manager_CountStoreVideoAnalyticDashboards(
  id: string,
  where?: Filter<StoreVideoAnalyticDashboard>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/storeVideoAnalyticDashboards/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries trafficFlowAnalysis of Manager.
 * /Managers/:id/trafficFlowAnalysis
 */
export async function Manager_GetTrafficFlowAnalysis(
  id: string,
  filter?: Filter<TrafficFlowAnalysis>,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysis[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/trafficFlowAnalysis",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts trafficFlowAnalysis of Manager.
 * /Managers/:id/trafficFlowAnalysis/count
 */
export async function Manager_CountTrafficFlowAnalysis(
  id: string,
  where?: Filter<TrafficFlowAnalysis>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/trafficFlowAnalysis/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries views of Manager.
 * /Managers/:id/views
 */
export async function Manager_GetViews(
  id: string,
  filter?: Filter<View>,
  options?: ApiRequestOptions,
): Promise<View[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/views",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts views of Manager.
 * /Managers/:id/views/count
 */
export async function Manager_CountViews(
  id: string,
  where?: Filter<View>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Managers/:id/views/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Managers
 */
export async function Manager_create(
  data?: any,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "POST",
    url: "/Managers",
    body: data,
    ...options,
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Managers/:id
 */
export async function Manager_findById(
  id: string,
  filter?: Filter<Manager>,
  options?: ApiRequestOptions,
): Promise<Manager> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Replace attributes for a model instance and persist it into the data source.
 * /Managers/:id/replace
 */
export async function Manager_replaceById(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/:id/replace",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Managers/:id
 */
export async function Manager_deleteById(
  id: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /Managers/:id
 */
export async function Manager_patchAttributes(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "PUT",
    url: "/Managers/:id",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Login a user with username/email and password.
 * /Managers/login
 */
export async function Manager_login(
  credentials: ({ username: string } | { email: string }) & {
    password: string;
    twoFactorMethod?: "totp" | "recovery";
    twoFactorCode?: string;
  },
  include?: Filter<Manager>["include"],
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "POST",
    url: "/Managers/login",
    urlParams: _urlParams,
    body: { ...credentials },
    ...options,
  });
}
/**
 * Logout a user with access token.
 * /Managers/logout
 */
export async function Manager_logout(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/logout",
    ...options,
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /Managers/:id/verify
 */
export async function Manager_verify(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/:id/verify",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Confirm a user registration with identity verification token.
 * /Managers/confirm
 */
export async function Manager_confirm(
  uid: string,
  token: string,
  redirect?: string,
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (uid != null) {
    _urlParams["uid"] = uid;
  }
  if (token != null) {
    _urlParams["token"] = token;
  }
  if (redirect != null) {
    _urlParams["redirect"] = redirect;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/confirm",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Reset password for a user with email.
 * /Managers/reset
 */
export async function Manager_resetPassword(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/reset",
    body: options,
    ...requestOptions,
  });
}
/**
 * Change a user's password.
 * /Managers/change-password
 */
export async function Manager_changePassword(
  oldPassword: string,
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/change-password",
    body: { oldPassword, newPassword },
    ...options,
  });
}
/**
 * Reset user's password via a password-reset token.
 * /Managers/reset-password
 */
export async function Manager_setPassword(
  newPassword: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/reset-password",
    body: { newPassword },
    ...options,
  });
}
/**
 * Get the current access token for the user.
 * /Managers/:id/currentAccessToken
 */
export async function Manager_getCurrentToken(
  id: string,
  include?: Filter<CommonAccessToken>["include"],
  options?: ApiRequestOptions,
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams["include"] = include;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/currentAccessToken",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get telegram sessions active for user.
 * /Managers/:id/miniapp/activeSessions
 */
export async function Manager_getMiniAppUserSessionsActive(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/miniapp/activeSessions",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Logout user from miniapp
 * /Managers/:id/telegram/miniapp/logout
 */
export async function Manager_MiniAppUserSessionActiveLogout(
  id: string,
  data: any,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/:id/telegram/miniapp/logout",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Verify account for a user with email.
 * /Managers/verify
 */
export async function Manager_verifyAccount(
  options: any,
  requestOptions?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Managers/verify",
    body: options,
    ...requestOptions,
  });
}
/**
 * Whether this environment requires email verification for this user type.
 * /Managers/emailVerificationRequired
 */
export async function Manager_getEmailVerificationRequired(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/emailVerificationRequired",
    ...options,
  });
}
/**
 * Get information about specified container
 * /Managers/:id/container/info
 */
export async function Manager_getContainerInfo(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/container/info",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * List all files within specified container
 * /Managers/:id/container/files
 */
export async function Manager_getFiles(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/container/files",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get information for specified file within specified container
 * /Managers/:id/container/files/:file
 */
export async function Manager_getFile(
  id: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
/**
 * Delete a file within a given container by name
 * /Managers/:id/container/files/:file
 */
export async function Manager_removeFile(
  id: string,
  property: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<void> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/Managers/:id/container/files/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Managers/:id/container/upload
 */
export async function Manager_upload(
  id: string,
  property: string,
  file: UploadableFile,
  onProgress?: (progress: number) => void,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return UploadFile({
    url: "/Managers/:id/container/upload",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    file: file,
    onProgress: onProgress,
    ...options,
  });
}
/**
 * Download a file within specified container
 * /Managers/:id/container/download/:file
 */
export async function Manager_download(
  id: string,
  property: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "GET",
    url: "/Managers/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
