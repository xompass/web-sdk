import { ApiFetch, Filter } from "../core/ApiFetch";
import { EdgeAgentTemplate } from "../models/EdgeAgentTemplate";

/**
 * Find a related item by id for edgeAgentTemplates.
 * /AssetWizardTypes/:id/edgeAgentTemplates/:fk
 */
export async function AssetWizardType_FindByIdEdgeAgentTemplates(
  id: string,
  fk: string,
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Queries edgeAgentTemplates of AssetWizardType.
 * /AssetWizardTypes/:id/edgeAgentTemplates
 */
export async function AssetWizardType_GetEdgeAgentTemplates(
  id: string,
  filter?: Filter<EdgeAgentTemplate>,
): Promise<EdgeAgentTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts edgeAgentTemplates of AssetWizardType.
 * /AssetWizardTypes/:id/edgeAgentTemplates/count
 */
export async function AssetWizardType_CountEdgeAgentTemplates(
  id: string,
  where?: Filter<EdgeAgentTemplate>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
