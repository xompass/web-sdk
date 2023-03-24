import { ApiFetch, Filter, Include } from '../core/ApiFetch';
import { Manager } from '../models/Manager';
import { Log } from '../models/Log';
import { Credential } from '../models/Credential';
import { Customer } from '../models/Customer';
import { Country } from '../models/Country';
import { Asset } from '../models/Asset';
import { CctvDashboard } from '../models/CctvDashboard';
import { EventDashboard } from '../models/EventDashboard';
import { PeopleCounterReport } from '../models/PeopleCounterReport';
import { Report } from '../models/Report';
import { TimeZone } from '../models/TimeZone';
import { TrafficFlowAnalysis } from '../models/TrafficFlowAnalysis';
import { View } from '../models/View';
import { UserCrendentials } from '../core/User';
import { CommonAccessToken } from '../models/CommonAccessToken';

/**
 * Api services for the `Manager` model.
 */

/**
 * Buscar un elemento relacionado por id para accessTokens.
 * /Managers/:id/accessTokens/:fk
 */
export async function Manager_FindByIdAccessTokens(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/accessTokens/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para accessTokens.
 * /Managers/:id/accessTokens/:fk
 */
export async function Manager_UpdateByIdAccessTokens(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/accessTokens/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para activityLogs.
 * /Managers/:id/activityLogs/:fk
 */
export async function Manager_FindByIdActivityLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/activityLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Managers/:id/trackingLogs/:fk
 */
export async function Manager_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/trackingLogs/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para credentials.
 * /Managers/:id/credentials/:fk
 */
export async function Manager_FindByIdCredentials(
  id: string,
  fk: string
): Promise<Credential> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/credentials/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación credentials con un elemento por id.
 * /Managers/:id/credentials/rel/:fk
 */
export async function Manager_ExistsCredentials(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Managers/:id/credentials/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo customer.
 * /Managers/:id/customer
 */
export async function Manager_GetCustomer(id: string): Promise<Customer> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/customer',
    routeParams: {
      id,
    },
  });
}
/**
 * Capta la relación belongsTo country.
 * /Managers/:id/country
 */
export async function Manager_GetCountry(id: string): Promise<Country> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/country',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para assets.
 * /Managers/:id/assets/:fk
 */
export async function Manager_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para assets.
 * /Managers/:id/assets/:fk
 */
export async function Manager_DestroyByIdAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para assets.
 * /Managers/:id/assets/:fk
 */
export async function Manager_UpdateByIdAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para assets.
 * /Managers/:id/assets/rel/:fk
 */
export async function Manager_LinkAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación assets con un elemento por id.
 * /Managers/:id/assets/rel/:fk
 */
export async function Manager_UnlinkAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/assets/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para cctvDashboards.
 * /Managers/:id/cctvDashboards/:fk
 */
export async function Manager_FindByIdCctvDashboards(
  id: string,
  fk: string
): Promise<CctvDashboard> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/cctvDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para cctvDashboards.
 * /Managers/:id/cctvDashboards/:fk
 */
export async function Manager_DestroyByIdCctvDashboards(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/cctvDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para cctvDashboards.
 * /Managers/:id/cctvDashboards/:fk
 */
export async function Manager_UpdateByIdCctvDashboards(
  id: string,
  fk: string,
  data: any = {}
): Promise<CctvDashboard> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/cctvDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para cctvDashboards.
 * /Managers/:id/cctvDashboards/rel/:fk
 */
export async function Manager_LinkCctvDashboards(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/cctvDashboards/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación cctvDashboards con un elemento por id.
 * /Managers/:id/cctvDashboards/rel/:fk
 */
export async function Manager_UnlinkCctvDashboards(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/cctvDashboards/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para eventDashboards.
 * /Managers/:id/eventDashboards/:fk
 */
export async function Manager_FindByIdEventDashboards(
  id: string,
  fk: string
): Promise<EventDashboard> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/eventDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para eventDashboards.
 * /Managers/:id/eventDashboards/:fk
 */
export async function Manager_DestroyByIdEventDashboards(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/eventDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para eventDashboards.
 * /Managers/:id/eventDashboards/:fk
 */
export async function Manager_UpdateByIdEventDashboards(
  id: string,
  fk: string,
  data: any = {}
): Promise<EventDashboard> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/eventDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para eventDashboards.
 * /Managers/:id/eventDashboards/rel/:fk
 */
export async function Manager_LinkEventDashboards(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/eventDashboards/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación eventDashboards con un elemento por id.
 * /Managers/:id/eventDashboards/rel/:fk
 */
export async function Manager_UnlinkEventDashboards(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/eventDashboards/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación hasOne container.
 * /Managers/:id/container
 */
export async function Manager_GetContainer(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en container de este modelo.
 * /Managers/:id/container
 */
export async function Manager_CreateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/:id/container',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar container de este modelo.
 * /Managers/:id/container
 */
export async function Manager_UpdateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/container',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime container de este modelo.
 * /Managers/:id/container
 */
export async function Manager_DestroyContainer(id: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para peopleCounterReports.
 * /Managers/:id/peopleCounterReports/:fk
 */
export async function Manager_FindByIdPeopleCounterReports(
  id: string,
  fk: string
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/peopleCounterReports/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para peopleCounterReports.
 * /Managers/:id/peopleCounterReports/:fk
 */
export async function Manager_DestroyByIdPeopleCounterReports(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/peopleCounterReports/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para peopleCounterReports.
 * /Managers/:id/peopleCounterReports/:fk
 */
export async function Manager_UpdateByIdPeopleCounterReports(
  id: string,
  fk: string,
  data: any = {}
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/peopleCounterReports/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para peopleCounterReports.
 * /Managers/:id/peopleCounterReports/rel/:fk
 */
export async function Manager_LinkPeopleCounterReports(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/peopleCounterReports/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación peopleCounterReports con un elemento por id.
 * /Managers/:id/peopleCounterReports/rel/:fk
 */
export async function Manager_UnlinkPeopleCounterReports(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/peopleCounterReports/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación hasOne permission.
 * /Managers/:id/permission
 */
export async function Manager_GetPermission(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/permission',
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en permission de este modelo.
 * /Managers/:id/permission
 */
export async function Manager_CreatePermission(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/:id/permission',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar permission de este modelo.
 * /Managers/:id/permission
 */
export async function Manager_UpdatePermission(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/permission',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para reports.
 * /Managers/:id/reports/:fk
 */
export async function Manager_FindByIdReports(
  id: string,
  fk: string
): Promise<Report> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/reports/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para reports.
 * /Managers/:id/reports/:fk
 */
export async function Manager_DestroyByIdReports(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/reports/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para reports.
 * /Managers/:id/reports/:fk
 */
export async function Manager_UpdateByIdReports(
  id: string,
  fk: string,
  data: any = {}
): Promise<Report> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/reports/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para reports.
 * /Managers/:id/reports/rel/:fk
 */
export async function Manager_LinkReports(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/reports/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación reports con un elemento por id.
 * /Managers/:id/reports/rel/:fk
 */
export async function Manager_UnlinkReports(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/reports/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para storeVideoAnalyticDashboards.
 * /Managers/:id/storeVideoAnalyticDashboards/:fk
 */
export async function Manager_DestroyByIdStoreVideoAnalyticDashboards(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/storeVideoAnalyticDashboards/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para storeVideoAnalyticDashboards.
 * /Managers/:id/storeVideoAnalyticDashboards/rel/:fk
 */
export async function Manager_LinkStoreVideoAnalyticDashboards(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/storeVideoAnalyticDashboards/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación storeVideoAnalyticDashboards con un elemento por id.
 * /Managers/:id/storeVideoAnalyticDashboards/rel/:fk
 */
export async function Manager_UnlinkStoreVideoAnalyticDashboards(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/storeVideoAnalyticDashboards/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Capta la relación belongsTo timeZone.
 * /Managers/:id/timeZone
 */
export async function Manager_GetTimeZone(id: string): Promise<TimeZone> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/timeZone',
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/:fk
 */
export async function Manager_FindByIdTrafficFlowAnalysis(
  id: string,
  fk: string
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/trafficFlowAnalysis/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/:fk
 */
export async function Manager_DestroyByIdTrafficFlowAnalysis(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/trafficFlowAnalysis/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/:fk
 */
export async function Manager_UpdateByIdTrafficFlowAnalysis(
  id: string,
  fk: string,
  data: any = {}
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/trafficFlowAnalysis/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para trafficFlowAnalysis.
 * /Managers/:id/trafficFlowAnalysis/rel/:fk
 */
export async function Manager_LinkTrafficFlowAnalysis(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/trafficFlowAnalysis/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación trafficFlowAnalysis con un elemento por id.
 * /Managers/:id/trafficFlowAnalysis/rel/:fk
 */
export async function Manager_UnlinkTrafficFlowAnalysis(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/trafficFlowAnalysis/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para views.
 * /Managers/:id/views/:fk
 */
export async function Manager_FindByIdViews(
  id: string,
  fk: string
): Promise<View> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/views/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para views.
 * /Managers/:id/views/rel/:fk
 */
export async function Manager_LinkViews(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: 'PUT',
    url: '/Managers/:id/views/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Eliminar la relación views con un elemento por id.
 * /Managers/:id/views/rel/:fk
 */
export async function Manager_UnlinkViews(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/views/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * activityLogs consultas de Manager.
 * /Managers/:id/activityLogs
 */
export async function Manager_GetActivityLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/activityLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos activityLogs de Manager.
 * /Managers/:id/activityLogs/count
 */
export async function Manager_CountActivityLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/activityLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Manager.
 * /Managers/:id/trackingLogs
 */
export async function Manager_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/trackingLogs',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Manager.
 * /Managers/:id/trackingLogs/count
 */
export async function Manager_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/trackingLogs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * credentials consultas de Manager.
 * /Managers/:id/credentials
 */
export async function Manager_GetCredentials(
  id: string,
  filter: Filter<any> = {}
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/credentials',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos credentials de Manager.
 * /Managers/:id/credentials/count
 */
export async function Manager_CountCredentials(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/credentials/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assets consultas de Manager.
 * /Managers/:id/assets
 */
export async function Manager_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos assets de Manager.
 * /Managers/:id/assets/count
 */
export async function Manager_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * cctvDashboards consultas de Manager.
 * /Managers/:id/cctvDashboards
 */
export async function Manager_GetCctvDashboards(
  id: string,
  filter: Filter<any> = {}
): Promise<CctvDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/cctvDashboards',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos cctvDashboards de Manager.
 * /Managers/:id/cctvDashboards/count
 */
export async function Manager_CountCctvDashboards(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/cctvDashboards/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * eventDashboards consultas de Manager.
 * /Managers/:id/eventDashboards
 */
export async function Manager_GetEventDashboards(
  id: string,
  filter: Filter<any> = {}
): Promise<EventDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/eventDashboards',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos eventDashboards de Manager.
 * /Managers/:id/eventDashboards/count
 */
export async function Manager_CountEventDashboards(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/eventDashboards/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * peopleCounterReports consultas de Manager.
 * /Managers/:id/peopleCounterReports
 */
export async function Manager_GetPeopleCounterReports(
  id: string,
  filter: Filter<any> = {}
): Promise<PeopleCounterReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/peopleCounterReports',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos peopleCounterReports de Manager.
 * /Managers/:id/peopleCounterReports/count
 */
export async function Manager_CountPeopleCounterReports(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/peopleCounterReports/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * reports consultas de Manager.
 * /Managers/:id/reports
 */
export async function Manager_GetReports(
  id: string,
  filter: Filter<any> = {}
): Promise<Report[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/reports',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos reports de Manager.
 * /Managers/:id/reports/count
 */
export async function Manager_CountReports(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/reports/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos storeVideoAnalyticDashboards de Manager.
 * /Managers/:id/storeVideoAnalyticDashboards/count
 */
export async function Manager_CountStoreVideoAnalyticDashboards(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/storeVideoAnalyticDashboards/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trafficFlowAnalysis consultas de Manager.
 * /Managers/:id/trafficFlowAnalysis
 */
export async function Manager_GetTrafficFlowAnalysis(
  id: string,
  filter: Filter<any> = {}
): Promise<TrafficFlowAnalysis[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/trafficFlowAnalysis',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trafficFlowAnalysis de Manager.
 * /Managers/:id/trafficFlowAnalysis/count
 */
export async function Manager_CountTrafficFlowAnalysis(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/trafficFlowAnalysis/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * views consultas de Manager.
 * /Managers/:id/views
 */
export async function Manager_GetViews(
  id: string,
  filter: Filter<any> = {}
): Promise<View[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/views',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos views de Manager.
 * /Managers/:id/views/count
 */
export async function Manager_CountViews(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/views/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Managers
 */
export async function Manager_create(data: any = {}): Promise<Manager> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers',
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Managers/:id/exists
 */
export async function Manager_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Managers/:id
 */
export async function Manager_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Managers
 */
export async function Manager_find(
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Managers/findOne
 */
export async function Manager_findOne(
  filter: Filter<any> = {}
): Promise<Manager> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Managers/:id
 */
export async function Manager_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id',
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Managers/count
 */
export async function Manager_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Login a user with username/email and password.
 * /Managers/login
 */
export async function Manager_login(
  credentials: UserCrendentials,
  include: Include<any> = {
    relation: 'user',
    scope: { include: ['container'] },
  },
  rememberMe = true
): Promise<CommonAccessToken> {
  const _urlParams: any = {};
  if (include != null) {
    _urlParams['include'] = include;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Managers/login',
    urlParams: _urlParams,
    routeParams: {},
    body: {
      ...credentials,
      rememberMe,
    },
  });
}
/**
 * Logout a user with access token.
 * /Managers/logout
 */
export async function Manager_logout(): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/logout',
    routeParams: {},
    body: {},
  });
}
/**
 * Trigger user's identity verification with configured verifyOptions
 * /Managers/:id/verify
 */
export async function Manager_verify(id: string): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/:id/verify',
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Confirm a user registration with identity verification token.
 * /Managers/confirm
 */
export async function Manager_confirm(
  uid: string,
  token: string,
  redirect: string
): Promise<any> {
  const _urlParams: any = {};
  if (uid != null) {
    _urlParams['uid'] = uid;
  }
  if (token != null) {
    _urlParams['token'] = token;
  }
  if (redirect != null) {
    _urlParams['redirect'] = redirect;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/confirm',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Reset password for a user with email.
 * /Managers/reset
 */
export async function Manager_resetPassword(options: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/reset',
    routeParams: {},
    body: {
      options,
    },
  });
}
/**
 * Change a user's password.
 * /Managers/change-password
 */
export async function Manager_changePassword(
  oldPassword: string,
  newPassword: string
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/change-password',
    routeParams: {},
    body: {
      data: {
        oldPassword,
        newPassword,
      },
    },
  });
}
/**
 * Reset user's password via a password-reset token.
 * /Managers/reset-password
 */
export async function Manager_setPassword(newPassword: string): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/reset-password',
    routeParams: {},
    body: {
      data: {
        newPassword,
      },
    },
  });
}
/**
 * Verify account for a user with email.
 * /Managers/verify
 */
export async function Manager_verifyAccount(options: any): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Managers/verify',
    routeParams: {},
    body: {
      options,
    },
  });
}
/**
 * Get information about specified container
 * /Managers/:id/container/info
 */
export async function Manager_getContainerInfo(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/container/info',
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /Managers/:id/container/files
 */
export async function Manager_getFiles(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/container/files',
    routeParams: {
      id,
    },
  });
}
/**
 * Get information for specified file within specified container
 * /Managers/:id/container/files/:file
 */
export async function Manager_getFile(id: string, file: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/container/files/:file',
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /Managers/:id/container/files/:file
 */
export async function Manager_removeFile(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Managers/:id/container/files/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Managers/:id/container/upload
 */
export async function Manager_upload(
  id: string,
  property: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'POST',
    url: '/Managers/:id/container/upload',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Download a file within specified container
 * /Managers/:id/container/download/:file
 */
export async function Manager_download(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Managers/:id/container/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
