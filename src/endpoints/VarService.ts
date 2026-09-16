import {
  ApiFetch,
  ApiRequestOptions,
  Filter,
  UploadFile,
  UploadableFile,
  unwrapCount,
} from "../core/ApiFetch";
import { Admin } from "../models/Admin";
import { AssetType } from "../models/AssetType";
import { Country } from "../models/Country";
import { Customer } from "../models/Customer";
import { SupportAdmin } from "../models/SupportAdmin";
import { SupportAdminVar } from "../models/SupportAdminVar";
import { Tool } from "../models/Tool";
import { Toolkit } from "../models/Toolkit";
import { ToolkitTemplate } from "../models/ToolkitTemplate";
import { Var, VarStorageContainer } from "../models/Var";

/**
 * Find a related item by id for admins.
 * /Vars/:id/admins/:fk
 */
export async function Var_FindByIdAdmins(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<Admin> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/admins/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Delete a related item by id for customers.
 * /Vars/:id/customers/:fk
 */
export async function Var_DestroyByIdCustomers(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/customers/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for customers.
 * /Vars/:id/customers/:fk
 */
export async function Var_UpdateByIdCustomers(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Customer> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/customers/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Fetches belongsTo relation country.
 * /Vars/:id/country
 */
export async function Var_GetCountry(
  id: string,
  options?: ApiRequestOptions,
): Promise<Country> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/country",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Add a related item by id for toolkitTemplates.
 * /Vars/:id/toolkitTemplates/rel/:fk
 */
export async function Var_LinkToolkitTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<ToolkitTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkitTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Remove the toolkitTemplates relation to an item by id.
 * /Vars/:id/toolkitTemplates/rel/:fk
 */
export async function Var_UnlinkToolkitTemplates(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/toolkitTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Update a related item by id for toolkits.
 * /Vars/:id/toolkits/:fk
 */
export async function Var_UpdateByIdToolkits(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Toolkit> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkits/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Add a related item by id for supportAdmins.
 * /Vars/:id/supportAdmins/rel/:fk
 */
export async function Var_LinkSupportAdmins(
  id: string,
  fk: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<SupportAdminVar> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/supportAdmins/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Remove the supportAdmins relation to an item by id.
 * /Vars/:id/supportAdmins/rel/:fk
 */
export async function Var_UnlinkSupportAdmins(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/supportAdmins/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    ...options,
  });
}
/**
 * Fetches hasOne relation container.
 * /Vars/:id/container
 */
export async function Var_GetContainer(
  id: string,
  options?: ApiRequestOptions,
): Promise<VarStorageContainer> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Queries admins of Var.
 * /Vars/:id/admins
 */
export async function Var_GetAdmins(
  id: string,
  filter?: Filter<Admin>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Creates a new instance in admins of this model.
 * /Vars/:id/admins
 */
export async function Var_CreateAdmins(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Admin> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/admins",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts admins of Var.
 * /Vars/:id/admins/count
 */
export async function Var_CountAdmins(
  id: string,
  where?: Filter<Admin>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Vars/:id/admins/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries customers of Var.
 * /Vars/:id/customers
 */
export async function Var_GetCustomers(
  id: string,
  filter?: Filter<Customer>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Creates a new instance in customers of this model.
 * /Vars/:id/customers
 */
export async function Var_CreateCustomers(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Customer> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/customers",
    routeParams: {
      id,
    },
    body: data,
    ...options,
  });
}
/**
 * Counts customers of Var.
 * /Vars/:id/customers/count
 */
export async function Var_CountCustomers(
  id: string,
  where?: Filter<Customer>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Vars/:id/customers/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries toolkitTemplates of Var.
 * /Vars/:id/toolkitTemplates
 */
export async function Var_GetToolkitTemplates(
  id: string,
  filter?: Filter<ToolkitTemplate>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts toolkitTemplates of Var.
 * /Vars/:id/toolkitTemplates/count
 */
export async function Var_CountToolkitTemplates(
  id: string,
  where?: Filter<ToolkitTemplate>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkitTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries toolkits of Var.
 * /Vars/:id/toolkits
 */
export async function Var_GetToolkits(
  id: string,
  filter?: Filter<Toolkit>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts toolkits of Var.
 * /Vars/:id/toolkits/count
 */
export async function Var_CountToolkits(
  id: string,
  where?: Filter<Toolkit>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Vars/:id
 */
export async function Var_findById(
  id: string,
  filter?: Filter<Var>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Vars
 */
export async function Var_find(
  filter?: Filter<Var>,
  options?: ApiRequestOptions,
): Promise<Var[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Patch attributes for a model instance and persist it into the data source.
 * /Vars/:id
 */
export async function Var_patchAttributes(
  id: string,
  data?: any,
  options?: ApiRequestOptions,
): Promise<Var> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id",
    routeParams: {
      id,
    },
    body: data,
    ...options,
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
  options?: ApiRequestOptions,
): Promise<Toolkit> {
  return ApiFetch({
    method: "POST",
    url: "/Vars/:id/toolkitTemplates/:fk/instantiate",
    routeParams: {
      id,
      fk,
    },
    body: data,
    ...options,
  });
}
/**
 * Get the allowed admin tools (inferred from toolkitTemplates)
 * /Vars/:id/adminTools
 */
export async function Var_GetAdminTools(
  id: string,
  filter?: Filter<Tool>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Get the allowed tools (inferred from toolkitTemplates)
 * /Vars/:id/tools
 */
export async function Var_GetTools(
  id: string,
  filter?: Filter<Tool>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Get the allowed assetTypes (inferred from toolkitTemplates)
 * /Vars/:id/toolkitTemplates/:fk/assetTypes
 */
export async function Var_GetToolkitTemplatesAssetTypes(
  id: string,
  fk: string,
  filter?: Filter<AssetType>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Get the allowed assetTypes (inferred from toolkits)
 * /Vars/:id/toolkits/:fk/assetTypes
 */
export async function Var_GetToolkitsAssetTypes(
  id: string,
  fk: string,
  filter?: Filter<AssetType>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * List the SupportAdmins linked to this Var
 * /Vars/:id/linkedSupportAdmins
 */
export async function Var_getSupportAdmins(
  id: string,
  filter?: Filter<SupportAdmin>,
  options?: ApiRequestOptions,
): Promise<SupportAdmin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/linkedSupportAdmins",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get information about specified container
 * /Vars/:id/container/info
 */
export async function Var_getContainerInfo(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/info",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * List all files within specified container
 * /Vars/:id/container/files
 */
export async function Var_getFiles(
  id: string,
  options?: ApiRequestOptions,
): Promise<any[]> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/files",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get information for specified file within specified container
 * /Vars/:id/container/files/:file
 */
export async function Var_getFile(
  id: string,
  file: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/container/files/:file",
    routeParams: {
      id,
      file,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<void> {
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
    ...options,
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
  options?: ApiRequestOptions,
): Promise<any> {
  const _urlParams: any = {};
  if (property != null) {
    _urlParams["property"] = property;
  }

  return UploadFile({
    url: "/Vars/:id/container/upload",
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
 * /Vars/:id/container/download/:file
 */
export async function Var_download(
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
    url: "/Vars/:id/container/download/:file",
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
    ...options,
  });
}
/**
 * Verify toolkit template unlink
 * /Vars/:id/toolkitTemplates/:fk/verifyUnlink
 */
export async function Var_verifyToolKitTemplateUnlink(
  id: string,
  fk: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkitTemplates/:fk/verifyUnlink",
    routeParams: {
      id,
      fk,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<Tool> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/adminTools/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkits/:nk/adminTools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/toolkits/:nk/adminTools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<Tool> {
  return ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/tools/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/Vars/:id/toolkits/:nk/tools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
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
  options?: ApiRequestOptions,
): Promise<void> {
  return ApiFetch({
    method: "DELETE",
    url: "/Vars/:id/toolkits/:nk/tools/rel/:fk",
    routeParams: {
      id,
      nk,
      fk,
    },
    ...options,
  });
}
/**
 * Queries adminTools of Toolkit.
 * /Vars/:id/toolkits/:nk/adminTools
 */
export async function Var_GetToolkitsAdminTools(
  id: string,
  nk: string,
  filter?: Filter<Tool>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts adminTools of Toolkit.
 * /Vars/:id/toolkits/:nk/adminTools/count
 */
export async function Var_CountToolkitsAdminTools(
  id: string,
  nk: string,
  where?: Filter<Toolkit>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/adminTools/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
/**
 * Queries tools of Toolkit.
 * /Vars/:id/toolkits/:nk/tools
 */
export async function Var_GetToolkitsTools(
  id: string,
  nk: string,
  filter?: Filter<Tool>,
  options?: ApiRequestOptions,
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
    ...options,
  });
}
/**
 * Counts tools of Toolkit.
 * /Vars/:id/toolkits/:nk/tools/count
 */
export async function Var_CountToolkitsTools(
  id: string,
  nk: string,
  where?: Filter<Toolkit>["where"],
  options?: ApiRequestOptions,
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  const result = await ApiFetch({
    method: "GET",
    url: "/Vars/:id/toolkits/:nk/tools/count",
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
    ...options,
  });
  return unwrapCount(result);
}
