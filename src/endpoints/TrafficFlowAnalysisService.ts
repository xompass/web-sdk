import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { Manager } from "../models/Manager";
import {
  TrafficFlowAnalysisKPI,
  TrafficFlowAnalysisVertice,
} from "../models/TrafficFlowAnalysis";

/**
 * Find a related item by id for managers.
 * /TrafficFlowAnalysis/:id/managers/:fk
 */
export async function TrafficFlowAnalysis_FindByIdManagers(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Find a related item by id for kpis.
 * /TrafficFlowAnalysis/:id/kpis/:fk
 */
export async function TrafficFlowAnalysis_FindByIdKpis(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisKPI> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/kpis/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for kpis.
 * /TrafficFlowAnalysis/:id/kpis/:fk
 */
export async function TrafficFlowAnalysis_DestroyByIdKpis(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/TrafficFlowAnalysis/:id/kpis/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for kpis.
 * /TrafficFlowAnalysis/:id/kpis/:fk
 */
export async function TrafficFlowAnalysis_UpdateByIdKpis(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisKPI> {
  return ApiFetch({
    method: "PUT",
    url: "/TrafficFlowAnalysis/:id/kpis/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_FindByIdVertices(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisVertice> {
  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/vertices/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_DestroyByIdVertices(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/TrafficFlowAnalysis/:id/vertices/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for vertices.
 * /TrafficFlowAnalysis/:id/vertices/:fk
 */
export async function TrafficFlowAnalysis_UpdateByIdVertices(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisVertice> {
  return ApiFetch({
    method: "PUT",
    url: "/TrafficFlowAnalysis/:id/vertices/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries managers of TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/managers
 */
export async function TrafficFlowAnalysis_GetManagers(
  id: string,
  filter?: Filter<Manager>,
  options?: ApiRequestOptions,
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Counts managers of TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/managers/count
 */
export async function TrafficFlowAnalysis_CountManagers(
  id: string,
  where?: Filter<Manager>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries kpis of TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/kpis
 */
export async function TrafficFlowAnalysis_GetKpis(
  id: string,
  filter?: Filter<TrafficFlowAnalysisKPI>,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisKPI[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/kpis",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in kpis of this model.
 * /TrafficFlowAnalysis/:id/kpis
 */
export async function TrafficFlowAnalysis_CreateKpis(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisKPI> {
  return ApiFetch({
    method: "POST",
    url: "/TrafficFlowAnalysis/:id/kpis",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts kpis of TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/kpis/count
 */
export async function TrafficFlowAnalysis_CountKpis(
  id: string,
  where?: Filter<TrafficFlowAnalysisKPI>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/kpis/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries vertices of TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/vertices
 */
export async function TrafficFlowAnalysis_GetVertices(
  id: string,
  filter?: Filter<TrafficFlowAnalysisVertice>,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisVertice[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/vertices",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in vertices of this model.
 * /TrafficFlowAnalysis/:id/vertices
 */
export async function TrafficFlowAnalysis_CreateVertices(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<TrafficFlowAnalysisVertice> {
  return ApiFetch({
    method: "POST",
    url: "/TrafficFlowAnalysis/:id/vertices",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts vertices of TrafficFlowAnalysis.
 * /TrafficFlowAnalysis/:id/vertices/count
 */
export async function TrafficFlowAnalysis_CountVertices(
  id: string,
  where?: Filter<TrafficFlowAnalysisVertice>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/TrafficFlowAnalysis/:id/vertices/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
