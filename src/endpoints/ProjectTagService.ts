import { ApiFetch, Filter } from '../core/ApiFetch';
import { ProjectTag } from '../models/ProjectTag';

/**
 * Api services for the `ProjectTag` model.
 */

/**
 * Check whether a model instance exists in the data source.
 * /ProjectTags/:id/exists
 */
export async function ProjectTag_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: 'GET',
    url: '/ProjectTags/:id/exists',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /ProjectTags/:id
 */
export async function ProjectTag_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<ProjectTag> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/ProjectTags/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /ProjectTags
 */
export async function ProjectTag_find(
  filter: Filter<any> = {}
): Promise<ProjectTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/ProjectTags',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /ProjectTags/findOne
 */
export async function ProjectTag_findOne(
  filter: Filter<any> = {}
): Promise<ProjectTag> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/ProjectTags/findOne',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /ProjectTags/count
 */
export async function ProjectTag_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/ProjectTags/count',
    urlParams: _urlParams,
    routeParams: {},
  });
}
