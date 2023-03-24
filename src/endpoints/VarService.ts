import { ApiFetch, Filter } from "../core/ApiFetch";
import { Var } from "../models/Var";
import { Log } from "../models/Log";
import { Admin } from "../models/Admin";
import { Customer } from "../models/Customer";
import { Country } from "../models/Country";
import { ToolkitTemplate } from "../models/ToolkitTemplate";
import { Toolkit } from "../models/Toolkit";
import { Tool } from "../models/Tool";
import { AssetType } from "../models/AssetType";

/**
 * Api services for the `Var` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Vars/:id/trackingLogs/:fk
 */
export async function Var_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para admins.
 * /Vars/:id/admins/:fk
 */
export async function Var_FindByIdAdmins(
  id: string,
  fk: string
): Promise<Admin> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/admins/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para customers.
 * /Vars/:id/customers/:fk
 */
export async function Var_UpdateByIdCustomers(
  id: string,
  fk: string,
  data: any = {}
): Promise<Customer> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/customers/:fk",
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
 * Capta la relación belongsTo country.
 * /Vars/:id/country
 */
export async function Var_GetCountry(id: string): Promise<Country> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/country",
    routeParams: {
      id,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para toolkitTemplates.
 * /Vars/:id/toolkitTemplates/rel/:fk
 */
export async function Var_LinkToolkitTemplates(
  id: string,
  fk: string
): Promise<ToolkitTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkitTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación toolkitTemplates con un elemento por id.
 * /Vars/:id/toolkitTemplates/rel/:fk
 */
export async function Var_UnlinkToolkitTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/toolkitTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para toolkits.
 * /Vars/:id/toolkits/:fk
 */
export async function Var_UpdateByIdToolkits(
  id: string,
  fk: string,
  data: any = {}
): Promise<Toolkit> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkits/:fk",
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
 * Capta la relación hasOne container.
 * /Vars/:id/container
 */
export async function Var_GetContainer(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en container de este modelo.
 * /Vars/:id/container
 */
export async function Var_CreateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/container",
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
 * /Vars/:id/container
 */
export async function Var_UpdateContainer(
  id: string,
  data: any = {}
): Promise<any> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/container",
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
 * /Vars/:id/container
 */
export async function Var_DestroyContainer(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/container",
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de Var.
 * /Vars/:id/trackingLogs
 */
export async function Var_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Var.
 * /Vars/:id/trackingLogs/count
 */
export async function Var_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * admins consultas de Var.
 * /Vars/:id/admins
 */
export async function Var_GetAdmins(
  id: string,
  filter: Filter<any> = {}
): Promise<Admin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/admins",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en admins de este modelo.
 * /Vars/:id/admins
 */
export async function Var_CreateAdmins(
  id: string,
  data: any = {}
): Promise<Admin> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/admins",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos admins de Var.
 * /Vars/:id/admins/count
 */
export async function Var_CountAdmins(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/admins/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * customers consultas de Var.
 * /Vars/:id/customers
 */
export async function Var_GetCustomers(
  id: string,
  filter: Filter<any> = {}
): Promise<Customer[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/customers",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en customers de este modelo.
 * /Vars/:id/customers
 */
export async function Var_CreateCustomers(
  id: string,
  data: any = {}
): Promise<Customer> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/customers",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos customers de Var.
 * /Vars/:id/customers/count
 */
export async function Var_CountCustomers(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/customers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * toolkitTemplates consultas de Var.
 * /Vars/:id/toolkitTemplates
 */
export async function Var_GetToolkitTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<ToolkitTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkitTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos toolkitTemplates de Var.
 * /Vars/:id/toolkitTemplates/count
 */
export async function Var_CountToolkitTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkitTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * toolkits consultas de Var.
 * /Vars/:id/toolkits
 */
export async function Var_GetToolkits(
  id: string,
  filter: Filter<any> = {}
): Promise<Toolkit[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos toolkits de Var.
 * /Vars/:id/toolkits/count
 */
export async function Var_CountToolkits(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Vars
 */
export async function Var_create(data: any = {}): Promise<Var> {
  return ApiFetch({
    method: "POST",
    url: "/Vars",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Vars/:id/exists
 */
export async function Var_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Vars/:id
 */
export async function Var_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Var> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Vars
 */
export async function Var_find(filter: Filter<any> = {}): Promise<Var[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Vars/findOne
 */
export async function Var_findOne(filter: Filter<any> = {}): Promise<Var> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Vars/:id
 */
export async function Var_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Vars/count
 */
export async function Var_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Instantiate a toolkit from a toolkit template
 * /Vars/:id/toolkitTemplates/:fk/instantiate
 */
export async function Var_InstantiateToolkitTemplates(
  id: string,
  fk: string,
  data: Toolkit
): Promise<Toolkit> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/toolkitTemplates/:fk/instantiate",
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
 * Get the allowed admin tools (inferred from toolkitTemplates)
 * /Vars/:id/adminTools
 */
export async function Var_GetAdminTools(
  id: string,
  filter: Filter<any> = {}
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/adminTools",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get the allowed tools (inferred from toolkitTemplates)
 * /Vars/:id/tools
 */
export async function Var_GetTools(
  id: string,
  filter: Filter<any> = {}
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/tools",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get the allowed assetTypes (inferred from toolkitTemplates)
 * /Vars/:id/toolkitTemplates/:fk/assetTypes
 */
export async function Var_GetToolkitTemplatesAssetTypes(
  id: string,
  fk: string,
  filter: Filter<any> = {}
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkitTemplates/:fk/assetTypes",
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get the allowed assetTypes (inferred from toolkits)
 * /Vars/:id/toolkits/:fk/assetTypes
 */
export async function Var_GetToolkitsAssetTypes(
  id: string,
  fk: string,
  filter: Filter<any> = {}
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:fk/assetTypes",
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get information about specified container
 * /Vars/:id/container/info
 */
export async function Var_getContainerInfo(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/info",
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /Vars/:id/container/files
 */
export async function Var_getFiles(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/files",
    routeParams: {
      id,
    },
  });
}
/**
 * Get information for specified file within specified container
 * /Vars/:id/container/files/:file
 */
export async function Var_getFile(id: string, file: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /Vars/:id/container/files/:file
 */
export async function Var_removeFile(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/container/files/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Vars/:id/container/upload
 */
export async function Var_upload(id: string, property: string): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/container/upload",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    body: {},
  });
}
/**
 * Download a file within specified container
 * /Vars/:id/container/download/:file
 */
export async function Var_download(
  id: string,
  property: string,
  file: string
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para adminTools.
 * /Vars/:id/toolkits/:nk/adminTools/:fk
 */
export async function Var_FindByIdToolkitsAdminTools(
  id: string,
  nk: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/adminTools/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para adminTools.
 * /Vars/:id/toolkits/:nk/adminTools/rel/:fk
 */
export async function Var_LinkToolkitsAdminTools(
  id: string,
  nk: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkits/:nk/adminTools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación adminTools con un elemento por id.
 * /Vars/:id/toolkits/:nk/adminTools/rel/:fk
 */
export async function Var_UnlinkToolkitsAdminTools(
  id: string,
  nk: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/toolkits/:nk/adminTools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para tools.
 * /Vars/:id/toolkits/:nk/tools/:fk
 */
export async function Var_FindByIdToolkitsTools(
  id: string,
  nk: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/tools/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para tools.
 * /Vars/:id/toolkits/:nk/tools/rel/:fk
 */
export async function Var_LinkToolkitsTools(
  id: string,
  nk: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkits/:nk/tools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación tools con un elemento por id.
 * /Vars/:id/toolkits/:nk/tools/rel/:fk
 */
export async function Var_UnlinkToolkitsTools(
  id: string,
  nk: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/toolkits/:nk/tools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * adminTools consultas de Toolkit.
 * /Vars/:id/toolkits/:nk/adminTools
 */
export async function Var_GetToolkitsAdminTools(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/adminTools",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Recuentos adminTools de Toolkit.
 * /Vars/:id/toolkits/:nk/adminTools/count
 */
export async function Var_CountToolkitsAdminTools(
  id: string,
  nk: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/adminTools/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * tools consultas de Toolkit.
 * /Vars/:id/toolkits/:nk/tools
 */
export async function Var_GetToolkitsTools(
  id: string,
  nk: string,
  filter: Filter<any> = {}
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/tools",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Recuentos tools de Toolkit.
 * /Vars/:id/toolkits/:nk/tools/count
 */
export async function Var_CountToolkitsTools(
  id: string,
  nk: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/tools/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
