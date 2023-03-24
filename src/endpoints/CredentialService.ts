import { ApiFetch, Filter } from "../core/ApiFetch";
import { Credential } from "../models/Credential";
import { Asset } from "../models/Asset";
import { Admin } from "../models/Admin";
import { Customer } from "../models/Customer";
import { Log } from "../models/Log";
import { Manager } from "../models/Manager";
import { Project } from "../models/Project";

/**
 * Api services for the `Credential` model.
 */

/**
 * Buscar un elemento relacionado por id para assets.
 * /Credentials/:id/assets/:fk
 */
export async function Credential_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para assets.
 * /Credentials/:id/assets/:fk
 */
export async function Credential_DestroyByIdAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para assets.
 * /Credentials/:id/assets/:fk
 */
export async function Credential_UpdateByIdAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/assets/:fk",
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
 * /Credentials/:id/assets/rel/:fk
 */
export async function Credential_LinkAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/assets/rel/:fk",
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
 * /Credentials/:id/assets/rel/:fk
 */
export async function Credential_UnlinkAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación assets con un elemento por id.
 * /Credentials/:id/assets/rel/:fk
 */
export async function Credential_ExistsAssets(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Credentials/:id/assets/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para admins.
 * /Credentials/:id/admins/:fk
 */
export async function Credential_FindByIdAdmins(
  id: string,
  fk: string
): Promise<Admin> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/admins/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para admins.
 * /Credentials/:id/admins/:fk
 */
export async function Credential_DestroyByIdAdmins(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/admins/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para admins.
 * /Credentials/:id/admins/:fk
 */
export async function Credential_UpdateByIdAdmins(
  id: string,
  fk: string,
  data: any = {}
): Promise<Admin> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/admins/:fk",
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
 * Añadir un elemento relacionado por id para admins.
 * /Credentials/:id/admins/rel/:fk
 */
export async function Credential_LinkAdmins(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/admins/rel/:fk",
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
 * Eliminar la relación admins con un elemento por id.
 * /Credentials/:id/admins/rel/:fk
 */
export async function Credential_UnlinkAdmins(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/admins/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación admins con un elemento por id.
 * /Credentials/:id/admins/rel/:fk
 */
export async function Credential_ExistsAdmins(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Credentials/:id/admins/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para customers.
 * /Credentials/:id/customers/:fk
 */
export async function Credential_FindByIdCustomers(
  id: string,
  fk: string
): Promise<Customer> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/customers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para customers.
 * /Credentials/:id/customers/:fk
 */
export async function Credential_DestroyByIdCustomers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/customers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para customers.
 * /Credentials/:id/customers/:fk
 */
export async function Credential_UpdateByIdCustomers(
  id: string,
  fk: string,
  data: any = {}
): Promise<Customer> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/customers/:fk",
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
 * Añadir un elemento relacionado por id para customers.
 * /Credentials/:id/customers/rel/:fk
 */
export async function Credential_LinkCustomers(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/customers/rel/:fk",
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
 * Eliminar la relación customers con un elemento por id.
 * /Credentials/:id/customers/rel/:fk
 */
export async function Credential_UnlinkCustomers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/customers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación customers con un elemento por id.
 * /Credentials/:id/customers/rel/:fk
 */
export async function Credential_ExistsCustomers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Credentials/:id/customers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Credentials/:id/trackingLogs/:fk
 */
export async function Credential_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para managers.
 * /Credentials/:id/managers/:fk
 */
export async function Credential_FindByIdManagers(
  id: string,
  fk: string
): Promise<Manager> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para managers.
 * /Credentials/:id/managers/:fk
 */
export async function Credential_DestroyByIdManagers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/managers/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para managers.
 * /Credentials/:id/managers/:fk
 */
export async function Credential_UpdateByIdManagers(
  id: string,
  fk: string,
  data: any = {}
): Promise<Manager> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/managers/:fk",
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
 * Añadir un elemento relacionado por id para managers.
 * /Credentials/:id/managers/rel/:fk
 */
export async function Credential_LinkManagers(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/managers/rel/:fk",
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
 * Eliminar la relación managers con un elemento por id.
 * /Credentials/:id/managers/rel/:fk
 */
export async function Credential_UnlinkManagers(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/managers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación managers con un elemento por id.
 * /Credentials/:id/managers/rel/:fk
 */
export async function Credential_ExistsManagers(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Credentials/:id/managers/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para projects.
 * /Credentials/:id/projects/:fk
 */
export async function Credential_FindByIdProjects(
  id: string,
  fk: string
): Promise<Project> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/projects/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para projects.
 * /Credentials/:id/projects/:fk
 */
export async function Credential_DestroyByIdProjects(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/projects/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para projects.
 * /Credentials/:id/projects/:fk
 */
export async function Credential_UpdateByIdProjects(
  id: string,
  fk: string,
  data: any = {}
): Promise<Project> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/projects/:fk",
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
 * Añadir un elemento relacionado por id para projects.
 * /Credentials/:id/projects/rel/:fk
 */
export async function Credential_LinkProjects(
  id: string,
  fk: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Credentials/:id/projects/rel/:fk",
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
 * Eliminar la relación projects con un elemento por id.
 * /Credentials/:id/projects/rel/:fk
 */
export async function Credential_UnlinkProjects(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id/projects/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación projects con un elemento por id.
 * /Credentials/:id/projects/rel/:fk
 */
export async function Credential_ExistsProjects(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Credentials/:id/projects/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * assets consultas de Credential.
 * /Credentials/:id/assets
 */
export async function Credential_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en assets de este modelo.
 * /Credentials/:id/assets
 */
export async function Credential_CreateAssets(
  id: string,
  data: any = {}
): Promise<Asset> {
  return ApiFetch({
    method: "POST",
    url: "/Credentials/:id/assets",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos assets de Credential.
 * /Credentials/:id/assets/count
 */
export async function Credential_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * admins consultas de Credential.
 * /Credentials/:id/admins
 */
export async function Credential_GetAdmins(
  id: string,
  filter: Filter<any> = {}
): Promise<Admin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/admins",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en admins de este modelo.
 * /Credentials/:id/admins
 */
export async function Credential_CreateAdmins(
  id: string,
  data: any = {}
): Promise<Admin> {
  return ApiFetch({
    method: "POST",
    url: "/Credentials/:id/admins",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos admins de Credential.
 * /Credentials/:id/admins/count
 */
export async function Credential_CountAdmins(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/admins/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * customers consultas de Credential.
 * /Credentials/:id/customers
 */
export async function Credential_GetCustomers(
  id: string,
  filter: Filter<any> = {}
): Promise<Customer[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/customers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en customers de este modelo.
 * /Credentials/:id/customers
 */
export async function Credential_CreateCustomers(
  id: string,
  data: any = {}
): Promise<Customer> {
  return ApiFetch({
    method: "POST",
    url: "/Credentials/:id/customers",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos customers de Credential.
 * /Credentials/:id/customers/count
 */
export async function Credential_CountCustomers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/customers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Credential.
 * /Credentials/:id/trackingLogs
 */
export async function Credential_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Credential.
 * /Credentials/:id/trackingLogs/count
 */
export async function Credential_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * managers consultas de Credential.
 * /Credentials/:id/managers
 */
export async function Credential_GetManagers(
  id: string,
  filter: Filter<any> = {}
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/managers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en managers de este modelo.
 * /Credentials/:id/managers
 */
export async function Credential_CreateManagers(
  id: string,
  data: any = {}
): Promise<Manager> {
  return ApiFetch({
    method: "POST",
    url: "/Credentials/:id/managers",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos managers de Credential.
 * /Credentials/:id/managers/count
 */
export async function Credential_CountManagers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/managers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * projects consultas de Credential.
 * /Credentials/:id/projects
 */
export async function Credential_GetProjects(
  id: string,
  filter: Filter<any> = {}
): Promise<Project[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/projects",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en projects de este modelo.
 * /Credentials/:id/projects
 */
export async function Credential_CreateProjects(
  id: string,
  data: any = {}
): Promise<Project> {
  return ApiFetch({
    method: "POST",
    url: "/Credentials/:id/projects",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos projects de Credential.
 * /Credentials/:id/projects/count
 */
export async function Credential_CountProjects(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/projects/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Credentials
 */
export async function Credential_create(data: any = {}): Promise<Credential> {
  return ApiFetch({
    method: "POST",
    url: "/Credentials",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Credentials/:id/exists
 */
export async function Credential_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Credentials/:id
 */
export async function Credential_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Credential> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Credentials
 */
export async function Credential_find(
  filter: Filter<any> = {}
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Credentials/findOne
 */
export async function Credential_findOne(
  filter: Filter<any> = {}
): Promise<Credential> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Credentials/:id
 */
export async function Credential_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Credentials/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Credentials/count
 */
export async function Credential_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Credentials/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
