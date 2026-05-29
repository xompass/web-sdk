import { ApiFetch, UploadFile, Filter, UploadableFile } from '../core/ApiFetch';
import { Var } from '../models/Var';
import { Admin } from '../models/Admin';
import { Customer } from '../models/Customer';
import { Country } from '../models/Country';
import { Toolkit } from '../models/Toolkit';
import { VarStorageContainer } from '../models/Var';
import { ToolkitTemplate } from '../models/ToolkitTemplate';
import { Tool } from '../models/Tool';
import { AssetType } from '../models/AssetType';

/**
 * Api services for the `Var` model.
 */

/**
 * Find a related item by id for admins.
 * /Vars/:id/admins/:fk
 */
export async function Var_FindByIdAdmins(
  id: string,
  fk: string,
): Promise<Admin> {
  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/admins/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for customers.
 * /Vars/:id/customers/:fk
 */
export async function Var_UpdateByIdCustomers(
  id: string,
  fk: string,
  data: any = {},
): Promise<Customer> {
  return ApiFetch({
    method: 'PUT',
    url: '/Vars/:id/customers/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches belongsTo relation country.
 * /Vars/:id/country
 */
export async function Var_GetCountry(id: string): Promise<Country> {
  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/country',
    routeParams: {
      id,
    },
  });
}
/**
 * Update a related item by id for toolkits.
 * /Vars/:id/toolkits/:fk
 */
export async function Var_UpdateByIdToolkits(
  id: string,
  fk: string,
  data: any = {},
): Promise<Toolkit> {
  return ApiFetch({
    method: 'PUT',
    url: '/Vars/:id/toolkits/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches hasOne relation container.
 * /Vars/:id/container
 */
export async function Var_GetContainer(
  id: string,
): Promise<VarStorageContainer> {
  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Queries admins of Var.
 * /Vars/:id/admins
 */
export async function Var_GetAdmins(
  id: string,
  filter: Filter<any> = {},
): Promise<Admin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/admins',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in admins of this model.
 * /Vars/:id/admins
 */
export async function Var_CreateAdmins(
  id: string,
  data: any = {},
): Promise<Admin> {
  return ApiFetch({
    method: 'POST',
    url: '/Vars/:id/admins',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts admins of Var.
 * /Vars/:id/admins/count
 */
export async function Var_CountAdmins(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/admins/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries customers of Var.
 * /Vars/:id/customers
 */
export async function Var_GetCustomers(
  id: string,
  filter: Filter<any> = {},
): Promise<Customer[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/customers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in customers of this model.
 * /Vars/:id/customers
 */
export async function Var_CreateCustomers(
  id: string,
  data: any = {},
): Promise<Customer> {
  return ApiFetch({
    method: 'POST',
    url: '/Vars/:id/customers',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts customers of Var.
 * /Vars/:id/customers/count
 */
export async function Var_CountCustomers(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/customers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries toolkitTemplates of Var.
 * /Vars/:id/toolkitTemplates
 */
export async function Var_GetToolkitTemplates(
  id: string,
  filter: Filter<any> = {},
): Promise<ToolkitTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkitTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts toolkitTemplates of Var.
 * /Vars/:id/toolkitTemplates/count
 */
export async function Var_CountToolkitTemplates(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkitTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries toolkits of Var.
 * /Vars/:id/toolkits
 */
export async function Var_GetToolkits(
  id: string,
  filter: Filter<any> = {},
): Promise<Toolkit[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts toolkits of Var.
 * /Vars/:id/toolkits/count
 */
export async function Var_CountToolkits(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/count',
    urlParams: _urlParams,
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
  filter: Filter<any> = {},
): Promise<Var> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Instantiate a toolkit from a toolkit template
 * /Vars/:id/toolkitTemplates/:fk/instantiate
 */
export async function Var_InstantiateToolkitTemplates(
  id: string,
  fk: string,
  data?: Toolkit,
): Promise<Toolkit> {
  return ApiFetch({
    method: 'POST',
    url: '/Vars/:id/toolkitTemplates/:fk/instantiate',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Get the allowed admin tools (inferred from toolkitTemplates)
 * /Vars/:id/adminTools
 */
export async function Var_GetAdminTools(
  id: string,
  filter: Filter<any> = {},
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/adminTools',
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
  filter: Filter<any> = {},
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/tools',
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
  filter: Filter<any> = {},
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkitTemplates/:fk/assetTypes',
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
  filter: Filter<any> = {},
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:fk/assetTypes',
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
    method: 'GET',
    url: '/Vars/:id/container/info',
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
    method: 'GET',
    url: '/Vars/:id/container/files',
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
    method: 'GET',
    url: '/Vars/:id/container/files/:file',
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
  file: string,
): Promise<void> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Vars/:id/container/files/:file',
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
export async function Var_upload(
  id: string,
  property: string,
  file: UploadableFile,
  onProgress?: (progress: number) => void,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return UploadFile({
    url: '/Vars/:id/container/upload',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    file: file,
    onProgress: onProgress,
  });
}
/**
 * Download a file within specified container
 * /Vars/:id/container/download/:file
 */
export async function Var_download(
  id: string,
  property: string,
  file: string,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams['property'] = property;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/container/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Find a related item by id for adminTools.
 * /Vars/:id/toolkits/:nk/adminTools/:fk
 */
export async function Var_FindByIdToolkitsAdminTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:nk/adminTools/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for adminTools.
 * /Vars/:id/toolkits/:nk/adminTools/rel/:fk
 */
export async function Var_LinkToolkitsAdminTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'PUT',
    url: '/Vars/:id/toolkits/:nk/adminTools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Remove the adminTools relation to an item by id.
 * /Vars/:id/toolkits/:nk/adminTools/rel/:fk
 */
export async function Var_UnlinkToolkitsAdminTools(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Vars/:id/toolkits/:nk/adminTools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for tools.
 * /Vars/:id/toolkits/:nk/tools/:fk
 */
export async function Var_FindByIdToolkitsTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:nk/tools/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for tools.
 * /Vars/:id/toolkits/:nk/tools/rel/:fk
 */
export async function Var_LinkToolkitsTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'PUT',
    url: '/Vars/:id/toolkits/:nk/tools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Remove the tools relation to an item by id.
 * /Vars/:id/toolkits/:nk/tools/rel/:fk
 */
export async function Var_UnlinkToolkitsTools(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Vars/:id/toolkits/:nk/tools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Queries adminTools of Toolkit.
 * /Vars/:id/toolkits/:nk/adminTools
 */
export async function Var_GetToolkitsAdminTools(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:nk/adminTools',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts adminTools of Toolkit.
 * /Vars/:id/toolkits/:nk/adminTools/count
 */
export async function Var_CountToolkitsAdminTools(
  id: string,
  nk: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:nk/adminTools/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries tools of Toolkit.
 * /Vars/:id/toolkits/:nk/tools
 */
export async function Var_GetToolkitsTools(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:nk/tools',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts tools of Toolkit.
 * /Vars/:id/toolkits/:nk/tools/count
 */
export async function Var_CountToolkitsTools(
  id: string,
  nk: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Vars/:id/toolkits/:nk/tools/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
