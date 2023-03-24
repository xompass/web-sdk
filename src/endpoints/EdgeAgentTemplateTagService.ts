import { ApiFetch, Filter } from "../core/ApiFetch";
import { EdgeAgentTemplateTag } from "../models/EdgeAgentTemplateTag";
import { EdgeAgentTemplate } from "../models/EdgeAgentTemplate";
import { Log } from "../models/Log";

/**
 * Api services for the `EdgeAgentTemplateTag` model.
 */

/**
 * Capta la relación belongsTo template.
 * /EdgeAgentTemplateTags/:id/template
 */
export async function EdgeAgentTemplateTag_GetTemplate(
  id: string
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/:id/template",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /EdgeAgentTemplateTags/:id/trackingLogs/:fk
 */
export async function EdgeAgentTemplateTag_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de EdgeAgentTemplateTag.
 * /EdgeAgentTemplateTags/:id/trackingLogs
 */
export async function EdgeAgentTemplateTag_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de EdgeAgentTemplateTag.
 * /EdgeAgentTemplateTags/:id/trackingLogs/count
 */
export async function EdgeAgentTemplateTag_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /EdgeAgentTemplateTags
 */
export async function EdgeAgentTemplateTag_create(
  data: any = {}
): Promise<EdgeAgentTemplateTag> {
  return ApiFetch({
    method: "POST",
    url: "/EdgeAgentTemplateTags",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /EdgeAgentTemplateTags/:id/exists
 */
export async function EdgeAgentTemplateTag_exists(
  id: string
): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /EdgeAgentTemplateTags/:id
 */
export async function EdgeAgentTemplateTag_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<EdgeAgentTemplateTag> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /EdgeAgentTemplateTags
 */
export async function EdgeAgentTemplateTag_find(
  filter: Filter<any> = {}
): Promise<EdgeAgentTemplateTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /EdgeAgentTemplateTags/findOne
 */
export async function EdgeAgentTemplateTag_findOne(
  filter: Filter<any> = {}
): Promise<EdgeAgentTemplateTag> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /EdgeAgentTemplateTags/:id
 */
export async function EdgeAgentTemplateTag_deleteById(
  id: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/EdgeAgentTemplateTags/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /EdgeAgentTemplateTags/count
 */
export async function EdgeAgentTemplateTag_count(
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/EdgeAgentTemplateTags/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
