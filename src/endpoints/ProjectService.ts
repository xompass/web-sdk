import { ApiFetch, Filter } from "../core/ApiFetch";
import { Project } from "../models/Project";
import { Log } from "../models/Log";
import { Asset } from "../models/Asset";
import { AssetTemplate } from "../models/AssetTemplate";
import { ProjectRestrictionTable } from "../models/ProjectRestrictionTable";
import { SensorType } from "../models/SensorType";
import { ProjectAllowedSensorType } from "../models/ProjectAllowedSensorType";
import { Tool } from "../models/Tool";
import { VirtualExpression } from "../models/VirtualExpression";
import { YoloClass } from "../models/YoloClass";
import { YoloClassProject } from "../models/YoloClassProject";

/**
 * Api services for the `Project` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /Projects/:id/trackingLogs/:fk
 */
export async function Project_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para assets.
 * /Projects/:id/assets/:fk
 */
export async function Project_FindByIdAssets(
  id: string,
  fk: string
): Promise<Asset> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para assets.
 * /Projects/:id/assets/:fk
 */
export async function Project_DestroyByIdAssets(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/assets/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para assets.
 * /Projects/:id/assets/:fk
 */
export async function Project_UpdateByIdAssets(
  id: string,
  fk: string,
  data: any = {}
): Promise<Asset> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/assets/:fk",
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
 * Buscar un elemento relacionado por id para assetTemplates.
 * /Projects/:id/assetTemplates/:fk
 */
export async function Project_FindByIdAssetTemplates(
  id: string,
  fk: string
): Promise<AssetTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assetTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Suprimir un elemento relacionado por id para assetTemplates.
 * /Projects/:id/assetTemplates/:fk
 */
export async function Project_DestroyByIdAssetTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/assetTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para assetTemplates.
 * /Projects/:id/assetTemplates/:fk
 */
export async function Project_UpdateByIdAssetTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<AssetTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/assetTemplates/:fk",
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
 * Capta la relación hasOne restrictionTable.
 * /Projects/:id/restrictionTable
 */
export async function Project_GetRestrictionTable(
  id: string
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en restrictionTable de este modelo.
 * /Projects/:id/restrictionTable
 */
export async function Project_CreateRestrictionTable(
  id: string,
  data: any = {}
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Actualizar restrictionTable de este modelo.
 * /Projects/:id/restrictionTable
 */
export async function Project_UpdateRestrictionTable(
  id: string,
  data: any = {}
): Promise<ProjectRestrictionTable> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Suprime restrictionTable de este modelo.
 * /Projects/:id/restrictionTable
 */
export async function Project_DestroyRestrictionTable(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/restrictionTable",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para allowedSensorTypes.
 * /Projects/:id/allowedSensorTypes/:fk
 */
export async function Project_FindByIdAllowedSensorTypes(
  id: string,
  fk: string
): Promise<SensorType> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/allowedSensorTypes/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para allowedSensorTypes.
 * /Projects/:id/allowedSensorTypes/rel/:fk
 */
export async function Project_LinkAllowedSensorTypes(
  id: string,
  fk: string,
  data: any = {}
): Promise<ProjectAllowedSensorType> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/allowedSensorTypes/rel/:fk",
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
 * Eliminar la relación allowedSensorTypes con un elemento por id.
 * /Projects/:id/allowedSensorTypes/rel/:fk
 */
export async function Project_UnlinkAllowedSensorTypes(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/allowedSensorTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación allowedSensorTypes con un elemento por id.
 * /Projects/:id/allowedSensorTypes/rel/:fk
 */
export async function Project_ExistsAllowedSensorTypes(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Projects/:id/allowedSensorTypes/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para adminTools.
 * /Projects/:id/adminTools/:fk
 */
export async function Project_FindByIdAdminTools(
  id: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/adminTools/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para adminTools.
 * /Projects/:id/adminTools/rel/:fk
 */
export async function Project_LinkAdminTools(
  id: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/adminTools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación adminTools con un elemento por id.
 * /Projects/:id/adminTools/rel/:fk
 */
export async function Project_UnlinkAdminTools(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/adminTools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación adminTools con un elemento por id.
 * /Projects/:id/adminTools/rel/:fk
 */
export async function Project_ExistsAdminTools(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Projects/:id/adminTools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para tools.
 * /Projects/:id/tools/:fk
 */
export async function Project_FindByIdTools(
  id: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/tools/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para tools.
 * /Projects/:id/tools/rel/:fk
 */
export async function Project_LinkTools(id: string, fk: string): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/tools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación tools con un elemento por id.
 * /Projects/:id/tools/rel/:fk
 */
export async function Project_UnlinkTools(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/tools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación tools con un elemento por id.
 * /Projects/:id/tools/rel/:fk
 */
export async function Project_ExistsTools(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Projects/:id/tools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para yoloClasses.
 * /Projects/:id/yoloClasses/:fk
 */
export async function Project_FindByIdYoloClasses(
  id: string,
  fk: string
): Promise<YoloClass> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/yoloClasses/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para yoloClasses.
 * /Projects/:id/yoloClasses/rel/:fk
 */
export async function Project_LinkYoloClasses(
  id: string,
  fk: string,
  data: any = {}
): Promise<YoloClassProject> {
  return ApiFetch({
    method: "PUT",
    url: "/Projects/:id/yoloClasses/rel/:fk",
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
 * Eliminar la relación yoloClasses con un elemento por id.
 * /Projects/:id/yoloClasses/rel/:fk
 */
export async function Project_UnlinkYoloClasses(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id/yoloClasses/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Comprobar la existencia de la relación yoloClasses con un elemento por id.
 * /Projects/:id/yoloClasses/rel/:fk
 */
export async function Project_ExistsYoloClasses(
  id: string,
  fk: string
): Promise<boolean> {
  return ApiFetch({
    method: "HEAD",
    url: "/Projects/:id/yoloClasses/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de Project.
 * /Projects/:id/trackingLogs
 */
export async function Project_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de Project.
 * /Projects/:id/trackingLogs/count
 */
export async function Project_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assets consultas de Project.
 * /Projects/:id/assets
 */
export async function Project_GetAssets(
  id: string,
  filter: Filter<any> = {}
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assets",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en assets de este modelo.
 * /Projects/:id/assets
 */
export async function Project_CreateAssets(
  id: string,
  data: any = {}
): Promise<Asset> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/assets",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos assets de Project.
 * /Projects/:id/assets/count
 */
export async function Project_CountAssets(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assets/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * assetTemplates consultas de Project.
 * /Projects/:id/assetTemplates
 */
export async function Project_GetAssetTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assetTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en assetTemplates de este modelo.
 * /Projects/:id/assetTemplates
 */
export async function Project_CreateAssetTemplates(
  id: string,
  data: any = {}
): Promise<AssetTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/Projects/:id/assetTemplates",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos assetTemplates de Project.
 * /Projects/:id/assetTemplates/count
 */
export async function Project_CountAssetTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/assetTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * allowedSensorTypes consultas de Project.
 * /Projects/:id/allowedSensorTypes
 */
export async function Project_GetAllowedSensorTypes(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/allowedSensorTypes",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos allowedSensorTypes de Project.
 * /Projects/:id/allowedSensorTypes/count
 */
export async function Project_CountAllowedSensorTypes(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/allowedSensorTypes/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * adminTools consultas de Project.
 * /Projects/:id/adminTools
 */
export async function Project_GetAdminTools(
  id: string,
  filter: Filter<any> = {}
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/adminTools",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos adminTools de Project.
 * /Projects/:id/adminTools/count
 */
export async function Project_CountAdminTools(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/adminTools/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * tools consultas de Project.
 * /Projects/:id/tools
 */
export async function Project_GetTools(
  id: string,
  filter: Filter<any> = {}
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/tools",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos tools de Project.
 * /Projects/:id/tools/count
 */
export async function Project_CountTools(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/tools/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * virtualExpressions consultas de Project.
 * /Projects/:id/virtualExpressions
 */
export async function Project_GetVirtualExpressions(
  id: string,
  filter: Filter<any> = {}
): Promise<VirtualExpression[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/virtualExpressions",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * yoloClasses consultas de Project.
 * /Projects/:id/yoloClasses
 */
export async function Project_GetYoloClasses(
  id: string,
  filter: Filter<any> = {}
): Promise<YoloClass[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/yoloClasses",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos yoloClasses de Project.
 * /Projects/:id/yoloClasses/count
 */
export async function Project_CountYoloClasses(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/yoloClasses/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /Projects
 */
export async function Project_create(data: any = {}): Promise<Project> {
  return ApiFetch({
    method: "POST",
    url: "/Projects",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /Projects/:id/exists
 */
export async function Project_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Projects/:id
 */
export async function Project_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<Project> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /Projects
 */
export async function Project_find(
  filter: Filter<any> = {}
): Promise<Project[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /Projects/findOne
 */
export async function Project_findOne(
  filter: Filter<any> = {}
): Promise<Project> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /Projects/:id
 */
export async function Project_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/Projects/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /Projects/count
 */
export async function Project_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get merged restriction table
 * /Projects/:id/restrictionTable/merged
 */
export async function Project_getMergedRestrictionTable(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/restrictionTable/merged",
    routeParams: {
      id,
    },
  });
}
/**
 * Evaluate a virtual expression in a date interval
 * /Projects/:id/virtualExpressions/:fk/evaluate
 */
export async function Project_EvaluateVirtualExpressions(
  id: string,
  fk: string,
  from: Date,
  to: Date,
  groupIntervals: any = {},
  groupMode: string,
  groupUtc: number
): Promise<any> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams["from"] = from;
  }
  if (to != null) {
    _urlParams["to"] = to;
  }
  if (groupIntervals != null) {
    _urlParams["group_intervals"] = groupIntervals;
  }
  if (groupMode != null) {
    _urlParams["group_mode"] = groupMode;
  }
  if (groupUtc != null) {
    _urlParams["group_utc"] = groupUtc;
  }

  return ApiFetch({
    method: "GET",
    url: "/Projects/:id/virtualExpressions/:fk/evaluate",
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
