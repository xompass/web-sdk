import { ApiFetch, Filter } from '../core/ApiFetch';
import { VirtualExpression } from '../models/VirtualExpression';
import { VirtualVariable } from '../models/VirtualVariable';

/**
 * Api services for the `VirtualGroup` model.
 */

/**
 * Buscar un elemento relacionado por id para virtualExpressions.
 * /VirtualGroups/:id/virtualExpressions/:fk
 */
export async function VirtualGroup_FindByIdVirtualExpressions(
  id: string,
  fk: string
): Promise<VirtualExpression> {
  return ApiFetch({
    method: 'GET',
    url: '/VirtualGroups/:id/virtualExpressions/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para virtualExpressions.
 * /VirtualGroups/:id/virtualExpressions/:fk
 */
export async function VirtualGroup_DestroyByIdVirtualExpressions(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/VirtualGroups/:id/virtualExpressions/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para virtualExpressions.
 * /VirtualGroups/:id/virtualExpressions/:fk
 */
export async function VirtualGroup_UpdateByIdVirtualExpressions(
  id: string,
  fk: string,
  data: any = {}
): Promise<VirtualExpression> {
  return ApiFetch({
    method: 'PUT',
    url: '/VirtualGroups/:id/virtualExpressions/:fk',
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
 * Buscar un elemento relacionado por id para virtualVariables.
 * /VirtualGroups/:id/virtualVariables/:fk
 */
export async function VirtualGroup_FindByIdVirtualVariables(
  id: string,
  fk: string
): Promise<VirtualVariable> {
  return ApiFetch({
    method: 'GET',
    url: '/VirtualGroups/:id/virtualVariables/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para virtualVariables.
 * /VirtualGroups/:id/virtualVariables/:fk
 */
export async function VirtualGroup_DestroyByIdVirtualVariables(
  id: string,
  fk: string
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/VirtualGroups/:id/virtualVariables/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para virtualVariables.
 * /VirtualGroups/:id/virtualVariables/:fk
 */
export async function VirtualGroup_UpdateByIdVirtualVariables(
  id: string,
  fk: string,
  data: any = {}
): Promise<VirtualVariable> {
  return ApiFetch({
    method: 'PUT',
    url: '/VirtualGroups/:id/virtualVariables/:fk',
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
 * virtualExpressions consultas de VirtualGroup.
 * /VirtualGroups/:id/virtualExpressions
 */
export async function VirtualGroup_GetVirtualExpressions(
  id: string,
  filter: Filter<any> = {}
): Promise<VirtualExpression[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/VirtualGroups/:id/virtualExpressions',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en virtualExpressions de este modelo.
 * /VirtualGroups/:id/virtualExpressions
 */
export async function VirtualGroup_CreateVirtualExpressions(
  id: string,
  data: any = {}
): Promise<VirtualExpression> {
  return ApiFetch({
    method: 'POST',
    url: '/VirtualGroups/:id/virtualExpressions',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos virtualExpressions de VirtualGroup.
 * /VirtualGroups/:id/virtualExpressions/count
 */
export async function VirtualGroup_CountVirtualExpressions(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/VirtualGroups/:id/virtualExpressions/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * virtualVariables consultas de VirtualGroup.
 * /VirtualGroups/:id/virtualVariables
 */
export async function VirtualGroup_GetVirtualVariables(
  id: string,
  filter: Filter<any> = {}
): Promise<VirtualVariable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/VirtualGroups/:id/virtualVariables',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en virtualVariables de este modelo.
 * /VirtualGroups/:id/virtualVariables
 */
export async function VirtualGroup_CreateVirtualVariables(
  id: string,
  data: any = {}
): Promise<VirtualVariable> {
  return ApiFetch({
    method: 'POST',
    url: '/VirtualGroups/:id/virtualVariables',
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos virtualVariables de VirtualGroup.
 * /VirtualGroups/:id/virtualVariables/count
 */
export async function VirtualGroup_CountVirtualVariables(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/VirtualGroups/:id/virtualVariables/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
