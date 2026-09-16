import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  unwrapCount,
} from "../core/ApiFetch";
import { VirtualExpression } from "../models/VirtualExpression";
import { VirtualVariable } from "../models/VirtualVariable";

/**
 * Find a related item by id for virtualExpressions.
 * /VirtualGroups/:id/virtualExpressions/:fk
 */
export async function VirtualGroup_FindByIdVirtualExpressions(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<VirtualExpression> {
  return ApiFetch({
    method: "GET",
    url: "/VirtualGroups/:id/virtualExpressions/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for virtualExpressions.
 * /VirtualGroups/:id/virtualExpressions/:fk
 */
export async function VirtualGroup_DestroyByIdVirtualExpressions(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/VirtualGroups/:id/virtualExpressions/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for virtualExpressions.
 * /VirtualGroups/:id/virtualExpressions/:fk
 */
export async function VirtualGroup_UpdateByIdVirtualExpressions(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<VirtualExpression> {
  return ApiFetch({
    method: "PUT",
    url: "/VirtualGroups/:id/virtualExpressions/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Find a related item by id for virtualVariables.
 * /VirtualGroups/:id/virtualVariables/:fk
 */
export async function VirtualGroup_FindByIdVirtualVariables(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<VirtualVariable> {
  return ApiFetch({
    method: "GET",
    url: "/VirtualGroups/:id/virtualVariables/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for virtualVariables.
 * /VirtualGroups/:id/virtualVariables/:fk
 */
export async function VirtualGroup_DestroyByIdVirtualVariables(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/VirtualGroups/:id/virtualVariables/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for virtualVariables.
 * /VirtualGroups/:id/virtualVariables/:fk
 */
export async function VirtualGroup_UpdateByIdVirtualVariables(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<VirtualVariable> {
  return ApiFetch({
    method: "PUT",
    url: "/VirtualGroups/:id/virtualVariables/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Queries virtualExpressions of VirtualGroup.
 * /VirtualGroups/:id/virtualExpressions
 */
export async function VirtualGroup_GetVirtualExpressions(
  id: string,
  filter?: Filter<VirtualExpression>,
  options?: ApiRequestOptions,
): Promise<VirtualExpression[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualGroups/:id/virtualExpressions",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in virtualExpressions of this model.
 * /VirtualGroups/:id/virtualExpressions
 */
export async function VirtualGroup_CreateVirtualExpressions(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<VirtualExpression> {
  return ApiFetch({
    method: "POST",
    url: "/VirtualGroups/:id/virtualExpressions",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts virtualExpressions of VirtualGroup.
 * /VirtualGroups/:id/virtualExpressions/count
 */
export async function VirtualGroup_CountVirtualExpressions(
  id: string,
  where?: Filter<VirtualExpression>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/VirtualGroups/:id/virtualExpressions/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries virtualVariables of VirtualGroup.
 * /VirtualGroups/:id/virtualVariables
 */
export async function VirtualGroup_GetVirtualVariables(
  id: string,
  filter?: Filter<VirtualVariable>,
  options?: ApiRequestOptions,
): Promise<VirtualVariable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/VirtualGroups/:id/virtualVariables",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Creates a new instance in virtualVariables of this model.
 * /VirtualGroups/:id/virtualVariables
 */
export async function VirtualGroup_CreateVirtualVariables(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<VirtualVariable> {
  return ApiFetch({
    method: "POST",
    url: "/VirtualGroups/:id/virtualVariables",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts virtualVariables of VirtualGroup.
 * /VirtualGroups/:id/virtualVariables/count
 */
export async function VirtualGroup_CountVirtualVariables(
  id: string,
  where?: Filter<VirtualVariable>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/VirtualGroups/:id/virtualVariables/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
