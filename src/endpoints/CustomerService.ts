import { ApiFetch, Filter, UploadFile, UploadableFile } from '../core/ApiFetch';
import { Customer } from '../models/Customer';
import { Asset } from '../models/Asset';
import { AssetTemplate } from '../models/AssetTemplate';
import { Credential } from '../models/Credential';
import { ApiKey } from '../models/ApiKey';
import { Country } from '../models/Country';
import { CustomerConfig } from '../models/Customer';
import { CustomerOperabilitySummary } from '../models/CustomerOperabilitySummary';
import { CustomerRestrictionTable } from '../models/CustomerRestrictionTable';
import { CustomerStorageContainer } from '../models/Customer';
import { DefaultEventComment } from '../models/DefaultEventComment';
import { Device } from '../models/Device';
import { DeviceEventType } from '../models/DeviceEventType';
import { Dispatch } from '../models/Dispatch';
import { EdgeAgent } from '../models/EdgeAgent';
import { EmergencyContact } from '../models/EmergencyContact';
import { EventState } from '../models/EventState';
import { Manager } from '../models/Manager';
import { Project } from '../models/Project';
import { StorylineCategory } from '../models/StorylineCategory';
import { TelegramChat } from '../models/TelegramChat';
import { TimeZone } from '../models/TimeZone';
import { Toolkit } from '../models/Toolkit';
import { Var } from '../models/Var';
import { YoloClass } from '../models/YoloClass';
import { YoloClassCustomer } from '../models/YoloClassCustomer';
import { AssetTag } from '../models/AssetTag';
import { CountReport } from '../models/CountReport';
import { Storyline } from '../models/Storyline';
import { SensorUptimeCollector } from '../models/SensorUptimeCollector';
import { Sensor } from '../models/Sensor';
import { Tool } from '../models/Tool';
import { AssetType } from '../models/AssetType';
import { Dataset } from '../models/Dataset';
import { Event } from '../models/Event';
import { AssetConfig } from '../models/AssetConfig';
import { AssetMilestone } from '../models/AssetMilestone';
import { AssetStaff } from '../models/AssetStaff';
import { AssetState } from '../models/AssetState';
import { Admin } from '../models/Admin';
import { EventGroup } from '../models/EventGroup';
import { EventSummary } from '../models/EventSummary';
import { EventSummaryForAsset } from '../models/EventSummaryForAsset';
import { EventTrigger } from '../models/EventTrigger';
import { HealthcheckEvent } from '../models/HealthcheckEvent';
import { SensorUptime } from '../models/SensorUptime';
import { Summary } from '../models/Summary';
import { AssetStateTemplate } from '../models/AssetStateTemplate';
import { EventGroupTemplate } from '../models/EventGroupTemplate';
import { EventTriggerTemplate } from '../models/EventTriggerTemplate';
import { SensorTemplate } from '../models/SensorTemplate';
import { CctvDashboard } from '../models/CctvDashboard';
import { EventDashboard } from '../models/EventDashboard';
import { EventSummaryForProject } from '../models/EventSummaryForProject';
import { EmbeddedReport } from '../models/EmbeddedReport';
import { BIPanel } from '../models/BIPanel';
import { PeopleCounterReport } from '../models/PeopleCounterReport';
import { ProjectTag } from '../models/ProjectTag';
import { Report } from '../models/Report';
import { SensorType } from '../models/SensorType';
import { ProjectAllowedSensorType } from '../models/ProjectAllowedSensorType';
import { StoreVideoAnalyticDashboard } from '../models/StoreVideoAnalyticDashboard';
import { TrafficFlowAnalysis } from '../models/TrafficFlowAnalysis';
import { VirtualExpression } from '../models/VirtualExpression';
import { VirtualGroup } from '../models/VirtualGroup';
import { VirtualVariable } from '../models/VirtualVariable';
import { YoloClassProject } from '../models/YoloClassProject';
import { Storypoint } from '../models/Storypoint';
import { CountReportSection } from '../models/CountReport';
import {
  LicensePlate,
  ListedLicensePlate,
  MergeLicensePlateResponse,
} from '../models/LicensePlate';

/**
 * Api services for the `Customer` model.
 */

/**
 * Find a related item by id for assets.
 * /Customers/:id/assets/:fk
 */
export async function Customer_FindByIdAssets(
  id: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for assetTemplates.
 * /Customers/:id/assetTemplates/:fk
 */
export async function Customer_FindByIdAssetTemplates(
  id: string,
  fk: string,
): Promise<AssetTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for credentials.
 * /Customers/:id/credentials/:fk
 */
export async function Customer_FindByIdCredentials(
  id: string,
  fk: string,
): Promise<Credential> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/credentials/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Check the existence of credentials relation to an item by id.
 * /Customers/:id/credentials/rel/:fk
 */
export async function Customer_ExistsCredentials(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Customers/:id/credentials/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for apiKeys.
 * /Customers/:id/apiKeys/:fk
 */
export async function Customer_FindByIdApiKeys(
  id: string,
  fk: string,
): Promise<ApiKey> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/apiKeys/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for apiKeys.
 * /Customers/:id/apiKeys/:fk
 */
export async function Customer_DestroyByIdApiKeys(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/apiKeys/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for apiKeys.
 * /Customers/:id/apiKeys/:fk
 */
export async function Customer_UpdateByIdApiKeys(
  id: string,
  fk: string,
  data: any = {},
): Promise<ApiKey> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/apiKeys/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches belongsTo relation country.
 * /Customers/:id/country
 */
export async function Customer_GetCountry(id: string): Promise<Country> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/country',
    routeParams: {
      id,
    },
  });
}
/**
 * Fetches hasOne relation config.
 * /Customers/:id/config
 */
export async function Customer_GetConfig(id: string): Promise<CustomerConfig> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/config',
    routeParams: {
      id,
    },
  });
}
/**
 * Update config of this model.
 * /Customers/:id/config
 */
export async function Customer_UpdateConfig(
  id: string,
  data: any = {},
): Promise<CustomerConfig> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/config',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Update a related item by id for operabilitySummaries.
 * /Customers/:id/operabilitySummaries/:fk
 */
export async function Customer_UpdateByIdOperabilitySummaries(
  id: string,
  fk: string,
  data: any = {},
): Promise<CustomerOperabilitySummary> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/operabilitySummaries/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches hasOne relation restrictionTable.
 * /Customers/:id/restrictionTable
 */
export async function Customer_GetRestrictionTable(
  id: string,
): Promise<CustomerRestrictionTable> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/restrictionTable',
    routeParams: {
      id,
    },
  });
}
/**
 * Fetches hasOne relation container.
 * /Customers/:id/container
 */
export async function Customer_GetContainer(
  id: string,
): Promise<CustomerStorageContainer> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/container',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a related item by id for defaultEventComments.
 * /Customers/:id/defaultEventComments/:fk
 */
export async function Customer_FindByIdDefaultEventComments(
  id: string,
  fk: string,
): Promise<DefaultEventComment> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/defaultEventComments/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for defaultEventComments.
 * /Customers/:id/defaultEventComments/:fk
 */
export async function Customer_DestroyByIdDefaultEventComments(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/defaultEventComments/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for defaultEventComments.
 * /Customers/:id/defaultEventComments/:fk
 */
export async function Customer_UpdateByIdDefaultEventComments(
  id: string,
  fk: string,
  data: any = {},
): Promise<DefaultEventComment> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/defaultEventComments/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for devices.
 * /Customers/:id/devices/:fk
 */
export async function Customer_FindByIdDevices(
  id: string,
  fk: string,
): Promise<Device> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for devices.
 * /Customers/:id/devices/:fk
 */
export async function Customer_DestroyByIdDevices(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/devices/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for devices.
 * /Customers/:id/devices/:fk
 */
export async function Customer_UpdateByIdDevices(
  id: string,
  fk: string,
  data: any = {},
): Promise<Device> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/devices/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for deviceEventTypes.
 * /Customers/:id/deviceEventTypes/:fk
 */
export async function Customer_FindByIdDeviceEventTypes(
  id: string,
  fk: string,
): Promise<DeviceEventType> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/deviceEventTypes/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Fetches hasOne relation dispatch.
 * /Customers/:id/dispatch
 */
export async function Customer_GetDispatch(id: string): Promise<Dispatch> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/dispatch',
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in dispatch of this model.
 * /Customers/:id/dispatch
 */
export async function Customer_CreateDispatch(
  id: string,
  data: any = {},
): Promise<Dispatch> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/dispatch',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Update dispatch of this model.
 * /Customers/:id/dispatch
 */
export async function Customer_UpdateDispatch(
  id: string,
  data: any = {},
): Promise<Dispatch> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/dispatch',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Find a related item by id for edgeAgents.
 * /Customers/:id/edgeAgents/:fk
 */
export async function Customer_FindByIdEdgeAgents(
  id: string,
  fk: string,
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/edgeAgents/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for edgeAgents.
 * /Customers/:id/edgeAgents/:fk
 */
export async function Customer_DestroyByIdEdgeAgents(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/edgeAgents/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for edgeAgents.
 * /Customers/:id/edgeAgents/:fk
 */
export async function Customer_UpdateByIdEdgeAgents(
  id: string,
  fk: string,
  data: any = {},
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/edgeAgents/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for emergencyContacts.
 * /Customers/:id/emergencyContacts/:fk
 */
export async function Customer_FindByIdEmergencyContacts(
  id: string,
  fk: string,
): Promise<EmergencyContact> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/emergencyContacts/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for emergencyContacts.
 * /Customers/:id/emergencyContacts/:fk
 */
export async function Customer_DestroyByIdEmergencyContacts(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/emergencyContacts/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for emergencyContacts.
 * /Customers/:id/emergencyContacts/:fk
 */
export async function Customer_UpdateByIdEmergencyContacts(
  id: string,
  fk: string,
  data: any = {},
): Promise<EmergencyContact> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/emergencyContacts/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for eventStates.
 * /Customers/:id/eventStates/:fk
 */
export async function Customer_FindByIdEventStates(
  id: string,
  fk: string,
): Promise<EventState> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/eventStates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for eventStates.
 * /Customers/:id/eventStates/:fk
 */
export async function Customer_DestroyByIdEventStates(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/eventStates/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for eventStates.
 * /Customers/:id/eventStates/:fk
 */
export async function Customer_UpdateByIdEventStates(
  id: string,
  fk: string,
  data: any = {},
): Promise<EventState> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/eventStates/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for managers.
 * /Customers/:id/managers/:fk
 */
export async function Customer_FindByIdManagers(
  id: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/managers/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Find a related item by id for projects.
 * /Customers/:id/projects/:fk
 */
export async function Customer_FindByIdProjects(
  id: string,
  fk: string,
): Promise<Project> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for projects.
 * /Customers/:id/projects/:fk
 */
export async function Customer_DestroyByIdProjects(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for projects.
 * /Customers/:id/projects/:fk
 */
export async function Customer_UpdateByIdProjects(
  id: string,
  fk: string,
  data: any = {},
): Promise<Project> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for storylineCategories.
 * /Customers/:id/storylineCategories/:fk
 */
export async function Customer_FindByIdStorylineCategories(
  id: string,
  fk: string,
): Promise<StorylineCategory> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/storylineCategories/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for storylineCategories.
 * /Customers/:id/storylineCategories/:fk
 */
export async function Customer_DestroyByIdStorylineCategories(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/storylineCategories/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for storylineCategories.
 * /Customers/:id/storylineCategories/:fk
 */
export async function Customer_UpdateByIdStorylineCategories(
  id: string,
  fk: string,
  data: any = {},
): Promise<StorylineCategory> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/storylineCategories/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for telegramChats.
 * /Customers/:id/telegramChats/:fk
 */
export async function Customer_FindByIdTelegramChats(
  id: string,
  fk: string,
): Promise<TelegramChat> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/telegramChats/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Delete a related item by id for telegramChats.
 * /Customers/:id/telegramChats/:fk
 */
export async function Customer_DestroyByIdTelegramChats(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/telegramChats/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Update a related item by id for telegramChats.
 * /Customers/:id/telegramChats/:fk
 */
export async function Customer_UpdateByIdTelegramChats(
  id: string,
  fk: string,
  data: any = {},
): Promise<TelegramChat> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/telegramChats/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches belongsTo relation timeZone.
 * /Customers/:id/timeZone
 */
export async function Customer_GetTimeZone(id: string): Promise<TimeZone> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/timeZone',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a related item by id for toolkits.
 * /Customers/:id/toolkits/:fk
 */
export async function Customer_FindByIdToolkits(
  id: string,
  fk: string,
): Promise<Toolkit> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/toolkits/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Add a related item by id for toolkits.
 * /Customers/:id/toolkits/rel/:fk
 */
export async function Customer_LinkToolkits(
  id: string,
  fk: string,
): Promise<Toolkit> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/toolkits/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Remove the toolkits relation to an item by id.
 * /Customers/:id/toolkits/rel/:fk
 */
export async function Customer_UnlinkToolkits(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/toolkits/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Fetches belongsTo relation var.
 * /Customers/:id/var
 */
export async function Customer_GetVar(id: string): Promise<Var> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/var',
    routeParams: {
      id,
    },
  });
}
/**
 * Find a related item by id for yoloClasses.
 * /Customers/:id/yoloClasses/:fk
 */
export async function Customer_FindByIdYoloClasses(
  id: string,
  fk: string,
): Promise<YoloClass> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/yoloClasses/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Add a related item by id for yoloClasses.
 * /Customers/:id/yoloClasses/rel/:fk
 */
export async function Customer_LinkYoloClasses(
  id: string,
  fk: string,
  data: any = {},
): Promise<YoloClassCustomer> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/yoloClasses/rel/:fk',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Remove the yoloClasses relation to an item by id.
 * /Customers/:id/yoloClasses/rel/:fk
 */
export async function Customer_UnlinkYoloClasses(
  id: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/yoloClasses/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Check the existence of yoloClasses relation to an item by id.
 * /Customers/:id/yoloClasses/rel/:fk
 */
export async function Customer_ExistsYoloClasses(
  id: string,
  fk: string,
): Promise<boolean> {
  return ApiFetch({
    method: 'HEAD',
    url: '/Customers/:id/yoloClasses/rel/:fk',
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Queries assetTags of Customer.
 * /Customers/:id/assetTags
 */
export async function Customer_GetAssetTags(
  id: string,
  filter?: Filter<AssetTag>,
): Promise<AssetTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTags',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries assets of Customer.
 * /Customers/:id/assets
 */
export async function Customer_GetAssets(
  id: string,
  filter?: Filter<Asset>,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts assets of Customer.
 * /Customers/:id/assets/count
 */
export async function Customer_CountAssets(
  id: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries assetTemplates of Customer.
 * /Customers/:id/assetTemplates
 */
export async function Customer_GetAssetTemplates(
  id: string,
  filter?: Filter<AssetTemplate>,
): Promise<AssetTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts assetTemplates of Customer.
 * /Customers/:id/assetTemplates/count
 */
export async function Customer_CountAssetTemplates(
  id: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries countReports of Customer.
 * /Customers/:id/countReports
 */
export async function Customer_GetCountReports(
  id: string,
  filter?: Filter<CountReport>,
): Promise<CountReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/countReports',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries credentials of Customer.
 * /Customers/:id/credentials
 */
export async function Customer_GetCredentials(
  id: string,
  filter?: Filter<Credential>,
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/credentials',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts credentials of Customer.
 * /Customers/:id/credentials/count
 */
export async function Customer_CountCredentials(
  id: string,
  where?: Filter<Credential>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/credentials/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries apiKeys of Customer.
 * /Customers/:id/apiKeys
 */
export async function Customer_GetApiKeys(
  id: string,
  filter?: Filter<ApiKey>,
): Promise<ApiKey[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/apiKeys',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in apiKeys of this model.
 * /Customers/:id/apiKeys
 */
export async function Customer_CreateApiKeys(
  id: string,
  data: any = {},
): Promise<ApiKey> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/apiKeys',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts apiKeys of Customer.
 * /Customers/:id/apiKeys/count
 */
export async function Customer_CountApiKeys(
  id: string,
  where?: Filter<ApiKey>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/apiKeys/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries operabilitySummaries of Customer.
 * /Customers/:id/operabilitySummaries
 */
export async function Customer_GetOperabilitySummaries(
  id: string,
  filter?: Filter<CustomerOperabilitySummary>,
): Promise<CustomerOperabilitySummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/operabilitySummaries',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts operabilitySummaries of Customer.
 * /Customers/:id/operabilitySummaries/count
 */
export async function Customer_CountOperabilitySummaries(
  id: string,
  where: any = {},
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/operabilitySummaries/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries defaultEventComments of Customer.
 * /Customers/:id/defaultEventComments
 */
export async function Customer_GetDefaultEventComments(
  id: string,
  filter?: Filter<DefaultEventComment>,
): Promise<DefaultEventComment[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/defaultEventComments',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in defaultEventComments of this model.
 * /Customers/:id/defaultEventComments
 */
export async function Customer_CreateDefaultEventComments(
  id: string,
  data: any = {},
): Promise<DefaultEventComment> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/defaultEventComments',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts defaultEventComments of Customer.
 * /Customers/:id/defaultEventComments/count
 */
export async function Customer_CountDefaultEventComments(
  id: string,
  where?: Filter<DefaultEventComment>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/defaultEventComments/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries devices of Customer.
 * /Customers/:id/devices
 */
export async function Customer_GetDevices(
  id: string,
  filter?: Filter<Device>,
): Promise<Device[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in devices of this model.
 * /Customers/:id/devices
 */
export async function Customer_CreateDevices(
  id: string,
  data: any = {},
): Promise<Device> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/devices',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts devices of Customer.
 * /Customers/:id/devices/count
 */
export async function Customer_CountDevices(
  id: string,
  where?: Filter<Device>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries deviceEventTypes of Customer.
 * /Customers/:id/deviceEventTypes
 */
export async function Customer_GetDeviceEventTypes(
  id: string,
  filter?: Filter<DeviceEventType>,
): Promise<DeviceEventType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/deviceEventTypes',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts deviceEventTypes of Customer.
 * /Customers/:id/deviceEventTypes/count
 */
export async function Customer_CountDeviceEventTypes(
  id: string,
  where?: Filter<DeviceEventType>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/deviceEventTypes/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries edgeAgents of Customer.
 * /Customers/:id/edgeAgents
 */
export async function Customer_GetEdgeAgents(
  id: string,
  filter?: Filter<EdgeAgent>,
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/edgeAgents',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in edgeAgents of this model.
 * /Customers/:id/edgeAgents
 */
export async function Customer_CreateEdgeAgents(
  id: string,
  data: any = {},
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/edgeAgents',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts edgeAgents of Customer.
 * /Customers/:id/edgeAgents/count
 */
export async function Customer_CountEdgeAgents(
  id: string,
  where?: Filter<EdgeAgent>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/edgeAgents/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries emergencyContacts of Customer.
 * /Customers/:id/emergencyContacts
 */
export async function Customer_GetEmergencyContacts(
  id: string,
  filter?: Filter<EmergencyContact>,
): Promise<EmergencyContact[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/emergencyContacts',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in emergencyContacts of this model.
 * /Customers/:id/emergencyContacts
 */
export async function Customer_CreateEmergencyContacts(
  id: string,
  data: any = {},
): Promise<EmergencyContact> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/emergencyContacts',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts emergencyContacts of Customer.
 * /Customers/:id/emergencyContacts/count
 */
export async function Customer_CountEmergencyContacts(
  id: string,
  where?: Filter<EmergencyContact>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/emergencyContacts/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries eventStates of Customer.
 * /Customers/:id/eventStates
 */
export async function Customer_GetEventStates(
  id: string,
  filter?: Filter<EventState>,
): Promise<EventState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/eventStates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in eventStates of this model.
 * /Customers/:id/eventStates
 */
export async function Customer_CreateEventStates(
  id: string,
  data: any = {},
): Promise<EventState> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/eventStates',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts eventStates of Customer.
 * /Customers/:id/eventStates/count
 */
export async function Customer_CountEventStates(
  id: string,
  where?: Filter<EventState>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/eventStates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries managers of Customer.
 * /Customers/:id/managers
 */
export async function Customer_GetManagers(
  id: string,
  filter?: Filter<Manager>,
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in managers of this model.
 * /Customers/:id/managers
 */
export async function Customer_CreateManagers(
  id: string,
  data: any = {},
): Promise<Manager> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/managers',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts managers of Customer.
 * /Customers/:id/managers/count
 */
export async function Customer_CountManagers(
  id: string,
  where?: Filter<Manager>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries projects of Customer.
 * /Customers/:id/projects
 */
export async function Customer_GetProjects(
  id: string,
  filter?: Filter<Project>,
): Promise<Project[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts projects of Customer.
 * /Customers/:id/projects/count
 */
export async function Customer_CountProjects(
  id: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries storylines of Customer.
 * /Customers/:id/storylines
 */
export async function Customer_GetStorylines(
  id: string,
  filter?: Filter<Storyline>,
): Promise<Storyline[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/storylines',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries storylineCategories of Customer.
 * /Customers/:id/storylineCategories
 */
export async function Customer_GetStorylineCategories(
  id: string,
  filter?: Filter<StorylineCategory>,
): Promise<StorylineCategory[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/storylineCategories',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in storylineCategories of this model.
 * /Customers/:id/storylineCategories
 */
export async function Customer_CreateStorylineCategories(
  id: string,
  data: any = {},
): Promise<StorylineCategory> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/storylineCategories',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts storylineCategories of Customer.
 * /Customers/:id/storylineCategories/count
 */
export async function Customer_CountStorylineCategories(
  id: string,
  where?: Filter<StorylineCategory>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/storylineCategories/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries telegramChats of Customer.
 * /Customers/:id/telegramChats
 */
export async function Customer_GetTelegramChats(
  id: string,
  filter?: Filter<TelegramChat>,
): Promise<TelegramChat[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/telegramChats',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Creates a new instance in telegramChats of this model.
 * /Customers/:id/telegramChats
 */
export async function Customer_CreateTelegramChats(
  id: string,
  data: any = {},
): Promise<TelegramChat> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/telegramChats',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Counts telegramChats of Customer.
 * /Customers/:id/telegramChats/count
 */
export async function Customer_CountTelegramChats(
  id: string,
  where?: Filter<TelegramChat>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/telegramChats/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries toolkits of Customer.
 * /Customers/:id/toolkits
 */
export async function Customer_GetToolkits(
  id: string,
  filter?: Filter<Toolkit>,
): Promise<Toolkit[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/toolkits',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts toolkits of Customer.
 * /Customers/:id/toolkits/count
 */
export async function Customer_CountToolkits(
  id: string,
  where?: Filter<Toolkit>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/toolkits/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Queries yoloClasses of Customer.
 * /Customers/:id/yoloClasses
 */
export async function Customer_GetYoloClasses(
  id: string,
  filter?: Filter<YoloClass>,
): Promise<YoloClass[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/yoloClasses',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Counts yoloClasses of Customer.
 * /Customers/:id/yoloClasses/count
 */
export async function Customer_CountYoloClasses(
  id: string,
  where?: Filter<YoloClass>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/yoloClasses/count',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /Customers/:id
 */
export async function Customer_findById(
  id: string,
  filter?: Filter<Customer>,
): Promise<Customer> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Upload files to a storyline
 * /Customers/:id/storylines/:nk/upload
 */
export async function Customer_UploadStorylines(
  id: string,
  nk: string,
  file: UploadableFile[],
  onProgress?: (progress: number) => void,
): Promise<any> {
  return UploadFile({
    url: '/Customers/:id/storylines/:nk/upload',
    routeParams: {
      id,
      nk,
    },
    file: file,
    onProgress: onProgress,
  });
}
/**
 * Download a file to a storyline
 * /Customers/:id/storylines/:nk/download/:file
 */
export async function Customer_DownloadStorylines(
  id: string,
  nk: string,
  file: string,
  datasourceName: string,
): Promise<any> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/storylines/:nk/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
      file,
    },
  });
}
/**
 * Remove a file from a storyline
 * /Customers/:id/storylines/:nk/files/:file
 */
export async function Customer_RemoveFileStorylines(
  id: string,
  nk: string,
  file: string,
  datasourceName: string,
): Promise<void> {
  const _urlParams: any = {};
  if (datasourceName != null) {
    _urlParams['datasourceName'] = datasourceName;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/storylines/:nk/files/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
      file,
    },
  });
}
/**
 * Instantiate a project from a toolkit
 * /Customers/:id/toolkits/:fk/instantiate
 */
export async function Customer_InstantiateToolkits(
  id: string,
  fk: string,
  data?: Project,
): Promise<Toolkit> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/toolkits/:fk/instantiate',
    routeParams: {
      id,
      fk,
    },
    body: data,
  });
}
/**
 * Get lasts SensorUptimeCollectors by type
 * /Customers/:id/assets/withLastUptimeCollectors
 */
export async function Customer_assetsWithLastUptimeCollectors(
  id: string,
  where?: Filter<SensorUptimeCollector>['where'],
): Promise<SensorUptimeCollector[]> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/withLastUptimeCollectors',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get asset uptimes by type
 * /Customers/:id/assets/:fk/withUptimes
 */
export async function Customer_GetAssetsWithUptimes(
  id: string,
  fk: string,
  from: Date,
  to: Date,
  type?: string,
): Promise<any[]> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams['from'] = from;
  }
  if (to != null) {
    _urlParams['to'] = to;
  }
  if (type != null) {
    _urlParams['type'] = type;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:fk/withUptimes',
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get lasts SensorUptimeCollectors by type
 * /Customers/:id/assets/:nk/sensors/withLastUptimeCollectors
 */
export async function Customer_GetLastAssetsSensorsWithUptimeCollectors(
  id: string,
  nk: string,
): Promise<SensorUptimeCollector[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensors/withLastUptimeCollectors',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get the allowed sensors (inferred from customer)
 * /Customers/:id/sensors
 */
export async function Customer_GetSensors(
  id: string,
  filter?: Filter<Sensor>,
): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/sensors',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get the allowed sensors (inferred from project)
 * /Customers/:id/projects/:nk/sensors
 */
export async function Customer_GetProjectsSensors(
  id: string,
  nk: string,
  filter?: Filter<Sensor>,
): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/sensors',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get the sensors of an asset that are configured with the given class
 * /Customers/:id/assets/:fk/sensorsWithStatesByClass
 */
export async function Customer_GetAssetsSensorsWithStatesByClass(
  id: string,
  fk: string,
  class_: string,
  filter?: Filter<Sensor>,
): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }
  if (class_ != null) {
    _urlParams['class'] = class_;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:fk/sensorsWithStatesByClass',
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get the allowed admin tools (inferred from toolkits)
 * /Customers/:id/adminTools
 */
export async function Customer_GetAdminTools(
  id: string,
  filter?: Filter<Tool>,
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/adminTools',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get the allowed tools (inferred from toolkits)
 * /Customers/:id/tools
 */
export async function Customer_GetTools(
  id: string,
  filter?: Filter<Tool>,
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/tools',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get the allowed assetTypes (inferred from toolkits)
 * /Customers/:id/toolkits/:fk/assetTypes
 */
export async function Customer_GetToolkitsAssetTypes(
  id: string,
  fk: string,
  filter?: Filter<AssetType>,
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/toolkits/:fk/assetTypes',
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get the allowed assetTypes (inferred from projects)
 * /Customers/:id/projects/:fk/assetTypes
 */
export async function Customer_GetProjectsAssetTypes(
  id: string,
  fk: string,
  filter?: Filter<AssetType>,
): Promise<AssetType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:fk/assetTypes',
    urlParams: _urlParams,
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Get information about specified container
 * /Customers/:id/container/info
 */
export async function Customer_getContainerInfo(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/container/info',
    routeParams: {
      id,
    },
  });
}
/**
 * List all files within specified container
 * /Customers/:id/container/files
 */
export async function Customer_getFiles(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/container/files',
    routeParams: {
      id,
    },
  });
}
/**
 * Get information for specified file within specified container
 * /Customers/:id/container/files/:file
 */
export async function Customer_getFile(id: string, file: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/container/files/:file',
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Delete a file within a given container by name
 * /Customers/:id/container/files/:file
 */
export async function Customer_removeFile(
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
    url: '/Customers/:id/container/files/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Upload one or more files into the specified container. The request body must use multipart/form-data which the file input type for HTML uses
 * /Customers/:id/container/upload
 */
export async function Customer_upload(
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
    url: '/Customers/:id/container/upload',
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
 * /Customers/:id/container/download/:file
 */
export async function Customer_download(
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
    url: '/Customers/:id/container/download/:file',
    urlParams: _urlParams,
    routeParams: {
      id,
      file,
    },
  });
}
/**
 * Suscribe assets to web-socket service (WSS)
 * /Customers/:id/sockets/:socketId/subscribe/assets
 */
export async function Customer_subscribeAssets(
  id: string,
  socketId: string,
  where: any = {},
): Promise<any> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/sockets/:socketId/subscribe/assets',
    routeParams: {
      id,
      socketId,
    },
    body: {
      id: id,
      socketId: socketId,
      where: where,
    },
  });
}
/**
 * Unsuscribe assets from web-socket service (WSS)
 * /Customers/:id/sockets/:socketId/unsubscribe/assets
 */
export async function Customer_unsubscribeAssets(
  id: string,
  socketId?: string,
  where?: Filter<Asset>['where'],
): Promise<void> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/sockets/:socketId/unsubscribe/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Suscribe devices to web-socket service (WSS)
 * /Customers/:id/sockets/:socketId/subscribe/devices
 */
export async function Customer_subscribeDevices(
  id: string,
  socketId: string,
  where: any = {},
): Promise<any> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/sockets/:socketId/subscribe/devices',
    routeParams: {
      id,
      socketId,
    },
    body: {
      id: id,
      socketId: socketId,
      where: where,
    },
  });
}
/**
 * Unsuscribe devices from web-socket service (WSS)
 * /Customers/:id/sockets/:socketId/unsubscribe/devices
 */
export async function Customer_unsubscribeDevices(
  id: string,
  socketId?: string,
  where?: Filter<Device>['where'],
): Promise<void> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/sockets/:socketId/unsubscribe/devices',
    urlParams: _urlParams,
    routeParams: {
      id,
      socketId,
    },
  });
}
/**
 * Find and filter datasets
 * /Customers/:id/datasets/filter
 */
export async function Customer_findAndFilterDatasets(
  id: string,
  filter?: Filter<Dataset>,
): Promise<Dataset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/datasets/filter',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find and filter events
 * /Customers/:id/events/filter
 */
export async function Customer_findAndFilterEvents(
  id: string,
  filter?: Filter<Event>,
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/events/filter',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get Device (agent) logs, using the Command Center
 * /Customers/:id/devices/:nk/logs
 */
export async function Customer_getDeviceLogs(
  id: string,
  nk: string,
  query?: any,
): Promise<any> {
  const _urlParams: any = {};
  if (query != null) {
    _urlParams['query'] = query;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/logs',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get Device (agent) uptime, using the Command Center
 * /Customers/:id/devices/:nk/uptimes
 */
export async function Customer_getDeviceUptime(
  id: string,
  nk: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/uptimes',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get Device (agent) version, using the Command Center
 * /Customers/:id/devices/:nk/versions
 */
export async function Customer_getDeviceVersion(
  id: string,
  nk: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/versions',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get Device (agent) uptimes, using the Command Center
 * /Customers/:id/devices/uptimes
 */
export async function Customer_findDeviceUptimes(
  id: string,
  where?: Filter<Device>['where'],
): Promise<any> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/uptimes',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get Device (agent) versions, using the Command Center
 * /Customers/:id/devices/versions
 */
export async function Customer_findDeviceVersions(
  id: string,
  where?: Filter<Device>['where'],
): Promise<any> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/versions',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Search license plates
 * /Customers/:id/licensePlates/search
 */
export async function Customer_searchLicensePlates(
  id: string,
  licensePlate: string,
  from: Date,
  to: Date,
  method?: string,
  maxDistance?: number,
  transpositions?: boolean,
  assetId?: string,
  sensorId?: string,
  class_?: string,
  limit?: number,
): Promise<LicensePlate[]> {
  const _urlParams: any = {};
  if (licensePlate != null) {
    _urlParams['licensePlate'] = licensePlate;
  }
  if (from != null) {
    _urlParams['from'] = from;
  }
  if (to != null) {
    _urlParams['to'] = to;
  }
  if (method != null) {
    _urlParams['method'] = method;
  }
  if (maxDistance != null) {
    _urlParams['maxDistance'] = maxDistance;
  }
  if (transpositions != null) {
    _urlParams['transpositions'] = transpositions;
  }
  if (assetId != null) {
    _urlParams['assetId'] = assetId;
  }
  if (sensorId != null) {
    _urlParams['sensorId'] = sensorId;
  }
  if (class_ != null) {
    _urlParams['class'] = class_;
  }
  if (limit != null) {
    _urlParams['limit'] = limit;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/licensePlates/search',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get license plates
 * /Customers/:id/licensePlates
 */
export async function Customer_getLicensePlates(
  id: string,
  from?: Date,
  to?: Date,
  assetId?: string,
  sensorId?: string,
  class_?: string,
  limit?: number,
  groupInterval?: number,
  groupMaxDistance?: number,
): Promise<LicensePlate[]> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams['from'] = from;
  }
  if (to != null) {
    _urlParams['to'] = to;
  }
  if (assetId != null) {
    _urlParams['assetId'] = assetId;
  }
  if (sensorId != null) {
    _urlParams['sensorId'] = sensorId;
  }
  if (class_ != null) {
    _urlParams['class'] = class_;
  }
  if (limit != null) {
    _urlParams['limit'] = limit;
  }
  if (groupInterval != null) {
    _urlParams['groupInterval'] = groupInterval;
  }
  if (groupMaxDistance != null) {
    _urlParams['groupMaxDistance'] = groupMaxDistance;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/licensePlates',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get events
 * /Customers/:id/events
 */
export type Customer_getEventsResponse = Event & {
  asset?: {
    name: string;
    referenceId?: string;
  };
  eventTrigger?: {
    name: string;
    subject: string;
  };
};
export async function Customer_getEvents(
  id: string,
  filter: Filter<Event> = {},
): Promise<Customer_getEventsResponse[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/events',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get events
 * /Customers/:id/projects/:nk/events
 */
export async function Customer_getProjectEvents(
  id: string,
  nk: string,
  filter?: Filter<Project>,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/events',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get event summaries by subject
 * /Customers/:id/projects/:nk/eventSummariesBySubject
 */
export async function Customer_getEventSummariesBySubject(
  id: string,
  nk: string,
  date: Date,
): Promise<any[]> {
  const _urlParams: any = {};
  if (date != null) {
    _urlParams['date'] = date;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventSummariesBySubject',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get event summaries by event trigger id
 * /Customers/:id/eventSummariesByEventTriggerId
 */
export async function Customer_getEventSummariesByEventTriggerId(
  id: string,
  date: Date,
): Promise<any[]> {
  const _urlParams: any = {};
  if (date != null) {
    _urlParams['date'] = date;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/eventSummariesByEventTriggerId',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get black listed vehicles
 * /Customers/:id/blackList
 */
export async function Customer_getBlackList(id: string): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/blackList',
    routeParams: {
      id,
    },
  });
}
/**
 * Add black listed vehicle
 * /Customers/:id/blackList/licensePlate
 */
export async function Customer_addBlackListedVehicle(
  id: string,
  data: any = {},
): Promise<any[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/blackList/licensePlate',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Update black listed vehicle
 * /Customers/:id/blackList/licensePlate/:nk
 */
export async function Customer_updateBlackListedVehicle(
  id: string,
  nk: string,
  data: any = {},
): Promise<string> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/blackList/licensePlate/:nk',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Delete vehicle from black list
 * /Customers/:id/blackList/licensePlate/:nk
 */
export async function Customer_deleteBlackListedVehicle(
  id: string,
  nk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/blackList/licensePlate/:nk',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Replace black list
 * /Customers/:id/blackList/replace
 */
export async function Customer_replaceBlackList(
  id: string,
  data?: any,
): Promise<any[]> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/blackList/replace',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Merge black list
 * /Customers/:id/blackList/merge
 */
export async function Customer_mergeBlackList(
  id: string,
  data?: any,
): Promise<any> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/blackList/merge',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Create many black list
 * /Customers/:id/blackList/many
 */
export async function Customer_createManyBlackList(
  id: string,
  data?: any[],
): Promise<any[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/blackList/many',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Get sosafe event types
 * /Customers/:id/sosafe/eventTypes
 */
export async function Customer_getSosafeEventTypes(id: string): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/sosafe/eventTypes',
    routeParams: {
      id,
    },
  });
}
/**
 * Set sosafe configuration
 * /Customers/:id/sosafe/config
 */
export async function Customer_setSosafeConfig(
  id: string,
  data: any = {},
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/sosafe/config',
    routeParams: {
      id,
    },
    body: data,
  });
}
/**
 * Reset bot parameters
 * /Customers/:id/telegram/:nk/softBotReset
 */
export async function Customer_resetTelegrambot(
  id: string,
  nk: string,
): Promise<any> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/telegram/:nk/softBotReset',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Get manager hash for dispatch sync
 * /Customers/:id/dispatch/managers
 */
export async function Customer_getManagersHash(
  id: string,
  filter?: Filter<Dispatch>,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/dispatch/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Get Device Siblings in Edge Commandcenter
 * /Customers/:id/devices/:nk/siblings
 */
export async function Customer_getDeviceSiblings(
  id: string,
  nk: string,
): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/siblings',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Export the contextualization of an Asset and its direct children
 * /Customers/:id/assets/:nk/export
 */
export async function Customer_ExportAssets(
  id: string,
  nk: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/export',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Fetches hasOne relation config.
 * /Customers/:id/assets/:nk/config
 */
export async function Customer_GetAssetsConfig(
  id: string,
  nk: string,
): Promise<AssetConfig> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/config',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Update config of this model.
 * /Customers/:id/assets/:nk/config
 */
export async function Customer_UpdateAssetsConfig(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetConfig> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/config',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Fetches hasOne relation milestone.
 * /Customers/:id/assets/:nk/milestone
 */
export async function Customer_GetAssetsMilestone(
  id: string,
  nk: string,
): Promise<AssetMilestone> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/milestone',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Find a related item by id for staffs.
 * /Customers/:id/assets/:nk/staffs/:fk
 */
export async function Customer_FindByIdAssetsStaffs(
  id: string,
  nk: string,
  fk: string,
): Promise<AssetStaff> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/staffs/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for staffs.
 * /Customers/:id/assets/:nk/staffs/:fk
 */
export async function Customer_DestroyByIdAssetsStaffs(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assets/:nk/staffs/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for staffs.
 * /Customers/:id/assets/:nk/staffs/:fk
 */
export async function Customer_UpdateByIdAssetsStaffs(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<AssetStaff> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/staffs/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for assetStates.
 * /Customers/:id/assets/:nk/assetStates/:fk
 */
export async function Customer_FindByIdAssetsAssetStates(
  id: string,
  nk: string,
  fk: string,
): Promise<AssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/assetStates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for assetStates.
 * /Customers/:id/assets/:nk/assetStates/:fk
 */
export async function Customer_DestroyByIdAssetsAssetStates(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assets/:nk/assetStates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for assetStates.
 * /Customers/:id/assets/:nk/assetStates/:fk
 */
export async function Customer_UpdateByIdAssetsAssetStates(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<AssetState> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/assetStates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches belongsTo relation currentState.
 * /Customers/:id/assets/:nk/currentState
 */
export async function Customer_GetAssetsCurrentState(
  id: string,
  nk: string,
): Promise<AssetState> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/currentState',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Find a related item by id for credentials.
 * /Customers/:id/assets/:nk/credentials/:fk
 */
export async function Customer_FindByIdAssetsCredentials(
  id: string,
  nk: string,
  fk: string,
): Promise<Credential> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/credentials/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for admins.
 * /Customers/:id/assets/:nk/admins/:fk
 */
export async function Customer_FindByIdAssetsAdmins(
  id: string,
  nk: string,
  fk: string,
): Promise<Admin> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/admins/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for events.
 * /Customers/:id/assets/:nk/events/:fk
 */
export async function Customer_FindByIdAssetsEvents(
  id: string,
  nk: string,
  fk: string,
): Promise<Event> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/events/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for events.
 * /Customers/:id/assets/:nk/events/:fk
 */
export async function Customer_UpdateByIdAssetsEvents(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<Event> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/events/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for eventGroups.
 * /Customers/:id/assets/:nk/eventGroups/:fk
 */
export async function Customer_FindByIdAssetsEventGroups(
  id: string,
  nk: string,
  fk: string,
): Promise<EventGroup> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventGroups/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for eventGroups.
 * /Customers/:id/assets/:nk/eventGroups/:fk
 */
export async function Customer_DestroyByIdAssetsEventGroups(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assets/:nk/eventGroups/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for eventGroups.
 * /Customers/:id/assets/:nk/eventGroups/:fk
 */
export async function Customer_UpdateByIdAssetsEventGroups(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventGroup> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/eventGroups/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for eventSummaries.
 * /Customers/:id/assets/:nk/eventSummaries/:fk
 */
export async function Customer_FindByIdAssetsEventSummaries(
  id: string,
  nk: string,
  fk: string,
): Promise<EventSummary> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventSummaries/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for eventSummaryForAssets.
 * /Customers/:id/assets/:nk/eventSummaryForAssets/:fk
 */
export async function Customer_FindByIdAssetsEventSummaryForAssets(
  id: string,
  nk: string,
  fk: string,
): Promise<EventSummaryForAsset> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventSummaryForAssets/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for eventTriggers.
 * /Customers/:id/assets/:nk/eventTriggers/:fk
 */
export async function Customer_FindByIdAssetsEventTriggers(
  id: string,
  nk: string,
  fk: string,
): Promise<EventTrigger> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventTriggers/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for eventTriggers.
 * /Customers/:id/assets/:nk/eventTriggers/:fk
 */
export async function Customer_DestroyByIdAssetsEventTriggers(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assets/:nk/eventTriggers/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for eventTriggers.
 * /Customers/:id/assets/:nk/eventTriggers/:fk
 */
export async function Customer_UpdateByIdAssetsEventTriggers(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventTrigger> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/eventTriggers/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for healthcheckEvents.
 * /Customers/:id/assets/:nk/healthcheckEvents/:fk
 */
export async function Customer_FindByIdAssetsHealthcheckEvents(
  id: string,
  nk: string,
  fk: string,
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/healthcheckEvents/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for healthcheckEvents.
 * /Customers/:id/assets/:nk/healthcheckEvents/:fk
 */
export async function Customer_UpdateByIdAssetsHealthcheckEvents(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<HealthcheckEvent> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/healthcheckEvents/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for managers.
 * /Customers/:id/assets/:nk/managers/:fk
 */
export async function Customer_FindByIdAssetsManagers(
  id: string,
  nk: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/managers/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for sensors.
 * /Customers/:id/assets/:nk/sensors/:fk
 */
export async function Customer_FindByIdAssetsSensors(
  id: string,
  nk: string,
  fk: string,
): Promise<Sensor> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensors/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for sensors.
 * /Customers/:id/assets/:nk/sensors/:fk
 */
export async function Customer_DestroyByIdAssetsSensors(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assets/:nk/sensors/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for sensors.
 * /Customers/:id/assets/:nk/sensors/:fk
 */
export async function Customer_UpdateByIdAssetsSensors(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<Sensor> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assets/:nk/sensors/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for sensorUptimes.
 * /Customers/:id/assets/:nk/sensorUptimes/:fk
 */
export async function Customer_FindByIdAssetsSensorUptimes(
  id: string,
  nk: string,
  fk: string,
): Promise<SensorUptime> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensorUptimes/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for sensorUptimeCollectors.
 * /Customers/:id/assets/:nk/sensorUptimeCollectors/:fk
 */
export async function Customer_FindByIdAssetsSensorUptimeCollectors(
  id: string,
  nk: string,
  fk: string,
): Promise<SensorUptimeCollector> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensorUptimeCollectors/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for summaries.
 * /Customers/:id/assets/:nk/summaries/:fk
 */
export async function Customer_FindByIdAssetsSummaries(
  id: string,
  nk: string,
  fk: string,
): Promise<Summary> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/summaries/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Queries assets of Asset.
 * /Customers/:id/assets/:nk/assets
 */
export async function Customer_GetAssetsAssets(
  id: string,
  nk: string,
  filter: Filter<any> = {},
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in assets of this model.
 * /Customers/:id/assets/:nk/assets
 */
export async function Customer_CreateAssetsAssets(
  id: string,
  nk: string,
  data: any = {},
): Promise<Asset> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assets/:nk/assets',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts assets of Asset.
 * /Customers/:id/assets/:nk/assets/count
 */
export async function Customer_CountAssetsAssets(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries staffs of Asset.
 * /Customers/:id/assets/:nk/staffs
 */
export async function Customer_GetAssetsStaffs(
  id: string,
  nk: string,
  filter?: Filter<AssetStaff>,
): Promise<AssetStaff[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/staffs',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in staffs of this model.
 * /Customers/:id/assets/:nk/staffs
 */
export async function Customer_CreateAssetsStaffs(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetStaff> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assets/:nk/staffs',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts staffs of Asset.
 * /Customers/:id/assets/:nk/staffs/count
 */
export async function Customer_CountAssetsStaffs(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/staffs/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries assetStates of Asset.
 * /Customers/:id/assets/:nk/assetStates
 */
export async function Customer_GetAssetsAssetStates(
  id: string,
  nk: string,
  filter?: Filter<AssetState>,
): Promise<AssetState[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/assetStates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in assetStates of this model.
 * /Customers/:id/assets/:nk/assetStates
 */
export async function Customer_CreateAssetsAssetStates(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetState> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assets/:nk/assetStates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts assetStates of Asset.
 * /Customers/:id/assets/:nk/assetStates/count
 */
export async function Customer_CountAssetsAssetStates(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/assetStates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries credentials of Asset.
 * /Customers/:id/assets/:nk/credentials
 */
export async function Customer_GetAssetsCredentials(
  id: string,
  nk: string,
  filter?: Filter<Credential>,
): Promise<Credential[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/credentials',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts credentials of Asset.
 * /Customers/:id/assets/:nk/credentials/count
 */
export async function Customer_CountAssetsCredentials(
  id: string,
  nk: string,
  where?: Filter<Credential>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/credentials/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries admins of Asset.
 * /Customers/:id/assets/:nk/admins
 */
export async function Customer_GetAssetsAdmins(
  id: string,
  nk: string,
  filter?: Filter<Admin>,
): Promise<Admin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/admins',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts admins of Asset.
 * /Customers/:id/assets/:nk/admins/count
 */
export async function Customer_CountAssetsAdmins(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/admins/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries events of Asset.
 * /Customers/:id/assets/:nk/events
 */
export async function Customer_GetAssetsEvents(
  id: string,
  nk: string,
  filter?: Filter<Event>,
): Promise<Event[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/events',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts events of Asset.
 * /Customers/:id/assets/:nk/events/count
 */
export async function Customer_CountAssetsEvents(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/events/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventGroups of Asset.
 * /Customers/:id/assets/:nk/eventGroups
 */
export async function Customer_GetAssetsEventGroups(
  id: string,
  nk: string,
  filter?: Filter<EventGroup>,
): Promise<EventGroup[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventGroups',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in eventGroups of this model.
 * /Customers/:id/assets/:nk/eventGroups
 */
export async function Customer_CreateAssetsEventGroups(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventGroup> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assets/:nk/eventGroups',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts eventGroups of Asset.
 * /Customers/:id/assets/:nk/eventGroups/count
 */
export async function Customer_CountAssetsEventGroups(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventGroups/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventSummaries of Asset.
 * /Customers/:id/assets/:nk/eventSummaries
 */
export async function Customer_GetAssetsEventSummaries(
  id: string,
  nk: string,
  filter?: Filter<EventSummary>,
): Promise<EventSummary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventSummaries',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts eventSummaries of Asset.
 * /Customers/:id/assets/:nk/eventSummaries/count
 */
export async function Customer_CountAssetsEventSummaries(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventSummaries/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventSummaryForAssets of Asset.
 * /Customers/:id/assets/:nk/eventSummaryForAssets
 */
export async function Customer_GetAssetsEventSummaryForAssets(
  id: string,
  nk: string,
  filter?: Filter<EventSummaryForAsset>,
): Promise<EventSummaryForAsset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventSummaryForAssets',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts eventSummaryForAssets of Asset.
 * /Customers/:id/assets/:nk/eventSummaryForAssets/count
 */
export async function Customer_CountAssetsEventSummaryForAssets(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventSummaryForAssets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventTriggers of Asset.
 * /Customers/:id/assets/:nk/eventTriggers
 */
export async function Customer_GetAssetsEventTriggers(
  id: string,
  nk: string,
  filter?: Filter<EventTrigger>,
): Promise<EventTrigger[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventTriggers',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in eventTriggers of this model.
 * /Customers/:id/assets/:nk/eventTriggers
 */
export async function Customer_CreateAssetsEventTriggers(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventTrigger> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assets/:nk/eventTriggers',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts eventTriggers of Asset.
 * /Customers/:id/assets/:nk/eventTriggers/count
 */
export async function Customer_CountAssetsEventTriggers(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/eventTriggers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries healthcheckEvents of Asset.
 * /Customers/:id/assets/:nk/healthcheckEvents
 */
export async function Customer_GetAssetsHealthcheckEvents(
  id: string,
  nk: string,
  filter?: Filter<HealthcheckEvent>,
): Promise<HealthcheckEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/healthcheckEvents',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts healthcheckEvents of Asset.
 * /Customers/:id/assets/:nk/healthcheckEvents/count
 */
export async function Customer_CountAssetsHealthcheckEvents(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/healthcheckEvents/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries managers of Asset.
 * /Customers/:id/assets/:nk/managers
 */
export async function Customer_GetAssetsManagers(
  id: string,
  nk: string,
  filter?: Filter<Manager>,
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/managers',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts managers of Asset.
 * /Customers/:id/assets/:nk/managers/count
 */
export async function Customer_CountAssetsManagers(
  id: string,
  nk: string,
  where?: Filter<Manager>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/managers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries sensors of Asset.
 * /Customers/:id/assets/:nk/sensors
 */
export async function Customer_GetAssetsSensors(
  id: string,
  nk: string,
  filter?: Filter<Sensor>,
): Promise<Sensor[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensors',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in sensors of this model.
 * /Customers/:id/assets/:nk/sensors
 */
export async function Customer_CreateAssetsSensors(
  id: string,
  nk: string,
  data: any = {},
): Promise<Sensor> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assets/:nk/sensors',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts sensors of Asset.
 * /Customers/:id/assets/:nk/sensors/count
 */
export async function Customer_CountAssetsSensors(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensors/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries sensorUptimes of Asset.
 * /Customers/:id/assets/:nk/sensorUptimes
 */
export async function Customer_GetAssetsSensorUptimes(
  id: string,
  nk: string,
  filter?: Filter<SensorUptime>,
): Promise<SensorUptime[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensorUptimes',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts sensorUptimes of Asset.
 * /Customers/:id/assets/:nk/sensorUptimes/count
 */
export async function Customer_CountAssetsSensorUptimes(
  id: string,
  nk: string,
  where?: Filter<SensorUptime>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensorUptimes/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries sensorUptimeCollectors of Asset.
 * /Customers/:id/assets/:nk/sensorUptimeCollectors
 */
export async function Customer_GetAssetsSensorUptimeCollectors(
  id: string,
  nk: string,
  filter?: Filter<SensorUptimeCollector>,
): Promise<SensorUptimeCollector[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensorUptimeCollectors',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts sensorUptimeCollectors of Asset.
 * /Customers/:id/assets/:nk/sensorUptimeCollectors/count
 */
export async function Customer_CountAssetsSensorUptimeCollectors(
  id: string,
  nk: string,
  where?: Filter<SensorUptimeCollector>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/sensorUptimeCollectors/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries summaries of Asset.
 * /Customers/:id/assets/:nk/summaries
 */
export async function Customer_GetAssetsSummaries(
  id: string,
  nk: string,
  filter?: Filter<Summary>,
): Promise<Summary[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/summaries',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts summaries of Asset.
 * /Customers/:id/assets/:nk/summaries/count
 */
export async function Customer_CountAssetsSummaries(
  id: string,
  nk: string,
  where?: Filter<Asset>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assets/:nk/summaries/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Fetches hasOne relation config.
 * /Customers/:id/assetTemplates/:nk/config
 */
export async function Customer_GetAssetTemplatesConfig(
  id: string,
  nk: string,
): Promise<AssetConfig> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/config',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Update config of this model.
 * /Customers/:id/assetTemplates/:nk/config
 */
export async function Customer_UpdateAssetTemplatesConfig(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetConfig> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assetTemplates/:nk/config',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for assetStateTemplates.
 * /Customers/:id/assetTemplates/:nk/assetStateTemplates/:fk
 */
export async function Customer_FindByIdAssetTemplatesAssetStateTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/assetStateTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for assetStateTemplates.
 * /Customers/:id/assetTemplates/:nk/assetStateTemplates/:fk
 */
export async function Customer_DestroyByIdAssetTemplatesAssetStateTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assetTemplates/:nk/assetStateTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for assetStateTemplates.
 * /Customers/:id/assetTemplates/:nk/assetStateTemplates/:fk
 */
export async function Customer_UpdateByIdAssetTemplatesAssetStateTemplates(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assetTemplates/:nk/assetStateTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Fetches belongsTo relation defaultState.
 * /Customers/:id/assetTemplates/:nk/defaultState
 */
export async function Customer_GetAssetTemplatesDefaultState(
  id: string,
  nk: string,
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultState',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Find a related item by id for defaultResponsibleAdmins.
 * /Customers/:id/assetTemplates/:nk/defaultResponsibleAdmins/:fk
 */
export async function Customer_FindByIdAssetTemplatesDefaultResponsibleAdmins(
  id: string,
  nk: string,
  fk: string,
): Promise<Admin> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultResponsibleAdmins/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for eventGroupTemplates.
 * /Customers/:id/assetTemplates/:nk/eventGroupTemplates/:fk
 */
export async function Customer_FindByIdAssetTemplatesEventGroupTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<EventGroupTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/eventGroupTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for eventGroupTemplates.
 * /Customers/:id/assetTemplates/:nk/eventGroupTemplates/:fk
 */
export async function Customer_DestroyByIdAssetTemplatesEventGroupTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assetTemplates/:nk/eventGroupTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for eventGroupTemplates.
 * /Customers/:id/assetTemplates/:nk/eventGroupTemplates/:fk
 */
export async function Customer_UpdateByIdAssetTemplatesEventGroupTemplates(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventGroupTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assetTemplates/:nk/eventGroupTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for eventTriggerTemplates.
 * /Customers/:id/assetTemplates/:nk/eventTriggerTemplates/:fk
 */
export async function Customer_FindByIdAssetTemplatesEventTriggerTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<EventTriggerTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/eventTriggerTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for eventTriggerTemplates.
 * /Customers/:id/assetTemplates/:nk/eventTriggerTemplates/:fk
 */
export async function Customer_DestroyByIdAssetTemplatesEventTriggerTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assetTemplates/:nk/eventTriggerTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for eventTriggerTemplates.
 * /Customers/:id/assetTemplates/:nk/eventTriggerTemplates/:fk
 */
export async function Customer_UpdateByIdAssetTemplatesEventTriggerTemplates(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventTriggerTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assetTemplates/:nk/eventTriggerTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for defaultResponsibleManagers.
 * /Customers/:id/assetTemplates/:nk/defaultResponsibleManagers/:fk
 */
export async function Customer_FindByIdAssetTemplatesDefaultResponsibleManagers(
  id: string,
  nk: string,
  fk: string,
): Promise<Manager> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultResponsibleManagers/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for sensorTemplates.
 * /Customers/:id/assetTemplates/:nk/sensorTemplates/:fk
 */
export async function Customer_FindByIdAssetTemplatesSensorTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<SensorTemplate> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/sensorTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for sensorTemplates.
 * /Customers/:id/assetTemplates/:nk/sensorTemplates/:fk
 */
export async function Customer_DestroyByIdAssetTemplatesSensorTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/assetTemplates/:nk/sensorTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for sensorTemplates.
 * /Customers/:id/assetTemplates/:nk/sensorTemplates/:fk
 */
export async function Customer_UpdateByIdAssetTemplatesSensorTemplates(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<SensorTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/assetTemplates/:nk/sensorTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Queries assetTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/assetTemplates
 */
export async function Customer_GetAssetTemplatesAssetTemplates(
  id: string,
  nk: string,
  filter?: Filter<AssetTemplate>,
): Promise<AssetTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/assetTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in assetTemplates of this model.
 * /Customers/:id/assetTemplates/:nk/assetTemplates
 */
export async function Customer_CreateAssetTemplatesAssetTemplates(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assetTemplates/:nk/assetTemplates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts assetTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/assetTemplates/count
 */
export async function Customer_CountAssetTemplatesAssetTemplates(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/assetTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries assetStateTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/assetStateTemplates
 */
export async function Customer_GetAssetTemplatesAssetStateTemplates(
  id: string,
  nk: string,
  filter?: Filter<AssetStateTemplate>,
): Promise<AssetStateTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/assetStateTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in assetStateTemplates of this model.
 * /Customers/:id/assetTemplates/:nk/assetStateTemplates
 */
export async function Customer_CreateAssetTemplatesAssetStateTemplates(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetStateTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assetTemplates/:nk/assetStateTemplates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts assetStateTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/assetStateTemplates/count
 */
export async function Customer_CountAssetTemplatesAssetStateTemplates(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/assetStateTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries defaultResponsibleAdmins of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/defaultResponsibleAdmins
 */
export async function Customer_GetAssetTemplatesDefaultResponsibleAdmins(
  id: string,
  nk: string,
  filter?: Filter<Admin>,
): Promise<Admin[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultResponsibleAdmins',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts defaultResponsibleAdmins of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/defaultResponsibleAdmins/count
 */
export async function Customer_CountAssetTemplatesDefaultResponsibleAdmins(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultResponsibleAdmins/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventGroupTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/eventGroupTemplates
 */
export async function Customer_GetAssetTemplatesEventGroupTemplates(
  id: string,
  nk: string,
  filter?: Filter<EventGroupTemplate>,
): Promise<EventGroupTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/eventGroupTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in eventGroupTemplates of this model.
 * /Customers/:id/assetTemplates/:nk/eventGroupTemplates
 */
export async function Customer_CreateAssetTemplatesEventGroupTemplates(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventGroupTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assetTemplates/:nk/eventGroupTemplates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts eventGroupTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/eventGroupTemplates/count
 */
export async function Customer_CountAssetTemplatesEventGroupTemplates(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/eventGroupTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventTriggerTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/eventTriggerTemplates
 */
export async function Customer_GetAssetTemplatesEventTriggerTemplates(
  id: string,
  nk: string,
  filter?: Filter<EventTriggerTemplate>,
): Promise<EventTriggerTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/eventTriggerTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in eventTriggerTemplates of this model.
 * /Customers/:id/assetTemplates/:nk/eventTriggerTemplates
 */
export async function Customer_CreateAssetTemplatesEventTriggerTemplates(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventTriggerTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assetTemplates/:nk/eventTriggerTemplates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts eventTriggerTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/eventTriggerTemplates/count
 */
export async function Customer_CountAssetTemplatesEventTriggerTemplates(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/eventTriggerTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries defaultResponsibleManagers of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/defaultResponsibleManagers
 */
export async function Customer_GetAssetTemplatesDefaultResponsibleManagers(
  id: string,
  nk: string,
  filter?: Filter<Manager>,
): Promise<Manager[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultResponsibleManagers',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts defaultResponsibleManagers of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/defaultResponsibleManagers/count
 */
export async function Customer_CountAssetTemplatesDefaultResponsibleManagers(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/defaultResponsibleManagers/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries sensorTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/sensorTemplates
 */
export async function Customer_GetAssetTemplatesSensorTemplates(
  id: string,
  nk: string,
  filter?: Filter<SensorTemplate>,
): Promise<SensorTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/sensorTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in sensorTemplates of this model.
 * /Customers/:id/assetTemplates/:nk/sensorTemplates
 */
export async function Customer_CreateAssetTemplatesSensorTemplates(
  id: string,
  nk: string,
  data: any = {},
): Promise<SensorTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/assetTemplates/:nk/sensorTemplates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts sensorTemplates of AssetTemplate.
 * /Customers/:id/assetTemplates/:nk/sensorTemplates/count
 */
export async function Customer_CountAssetTemplatesSensorTemplates(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/assetTemplates/:nk/sensorTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Delete a related item by id for assets.
 * /Customers/:id/projects/:nk/assets/:fk
 */
export async function Customer_DestroyByIdProjectsAssets(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/assets/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for assets.
 * /Customers/:id/projects/:nk/assets/:fk
 */
export async function Customer_UpdateByIdProjectsAssets(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/assets/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Delete a related item by id for assetTemplates.
 * /Customers/:id/projects/:nk/assetTemplates/:fk
 */
export async function Customer_DestroyByIdProjectsAssetTemplates(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/assetTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for assetTemplates.
 * /Customers/:id/projects/:nk/assetTemplates/:fk
 */
export async function Customer_UpdateByIdProjectsAssetTemplates(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<AssetTemplate> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/assetTemplates/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for countReports.
 * /Customers/:id/projects/:nk/countReports/:fk
 */
export async function Customer_FindByIdProjectsCountReports(
  id: string,
  nk: string,
  fk: string,
): Promise<CountReport> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/countReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for countReports.
 * /Customers/:id/projects/:nk/countReports/:fk
 */
export async function Customer_DestroyByIdProjectsCountReports(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/countReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for countReports.
 * /Customers/:id/projects/:nk/countReports/:fk
 */
export async function Customer_UpdateByIdProjectsCountReports(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<CountReport> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/countReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for cctvDashboards.
 * /Customers/:id/projects/:nk/cctvDashboards/:fk
 */
export async function Customer_FindByIdProjectsCctvDashboards(
  id: string,
  nk: string,
  fk: string,
): Promise<CctvDashboard> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/cctvDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for cctvDashboards.
 * /Customers/:id/projects/:nk/cctvDashboards/:fk
 */
export async function Customer_DestroyByIdProjectsCctvDashboards(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/cctvDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for cctvDashboards.
 * /Customers/:id/projects/:nk/cctvDashboards/:fk
 */
export async function Customer_UpdateByIdProjectsCctvDashboards(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<CctvDashboard> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/cctvDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for eventDashboards.
 * /Customers/:id/projects/:nk/eventDashboards/:fk
 */
export async function Customer_FindByIdProjectsEventDashboards(
  id: string,
  nk: string,
  fk: string,
): Promise<EventDashboard> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for eventDashboards.
 * /Customers/:id/projects/:nk/eventDashboards/:fk
 */
export async function Customer_DestroyByIdProjectsEventDashboards(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/eventDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for eventDashboards.
 * /Customers/:id/projects/:nk/eventDashboards/:fk
 */
export async function Customer_UpdateByIdProjectsEventDashboards(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EventDashboard> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/eventDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for eventSummaryForProjects.
 * /Customers/:id/projects/:nk/eventSummaryForProjects/:fk
 */
export async function Customer_FindByIdProjectsEventSummaryForProjects(
  id: string,
  nk: string,
  fk: string,
): Promise<EventSummaryForProject> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventSummaryForProjects/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for embeddedReports.
 * /Customers/:id/projects/:nk/embeddedReports/:fk
 */
export async function Customer_FindByIdProjectsEmbeddedReports(
  id: string,
  nk: string,
  fk: string,
): Promise<EmbeddedReport> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/embeddedReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for embeddedReports.
 * /Customers/:id/projects/:nk/embeddedReports/:fk
 */
export async function Customer_DestroyByIdProjectsEmbeddedReports(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/embeddedReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for embeddedReports.
 * /Customers/:id/projects/:nk/embeddedReports/:fk
 */
export async function Customer_UpdateByIdProjectsEmbeddedReports(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EmbeddedReport> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/embeddedReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for biPanels.
 * /Customers/:id/projects/:nk/biPanels/:fk
 */
export async function Customer_FindByIdProjectsBiPanels(
  id: string,
  nk: string,
  fk: string,
): Promise<BIPanel> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/biPanels/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for biPanels.
 * /Customers/:id/projects/:nk/biPanels/:fk
 */
export async function Customer_DestroyByIdProjectsBiPanels(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/biPanels/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for biPanels.
 * /Customers/:id/projects/:nk/biPanels/:fk
 */
export async function Customer_UpdateByIdProjectsBiPanels(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<BIPanel> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/biPanels/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for peopleCounterReports.
 * /Customers/:id/projects/:nk/peopleCounterReports/:fk
 */
export async function Customer_FindByIdProjectsPeopleCounterReports(
  id: string,
  nk: string,
  fk: string,
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/peopleCounterReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for peopleCounterReports.
 * /Customers/:id/projects/:nk/peopleCounterReports/:fk
 */
export async function Customer_DestroyByIdProjectsPeopleCounterReports(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/peopleCounterReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for peopleCounterReports.
 * /Customers/:id/projects/:nk/peopleCounterReports/:fk
 */
export async function Customer_UpdateByIdProjectsPeopleCounterReports(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/peopleCounterReports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for tags.
 * /Customers/:id/projects/:nk/tags/:fk
 */
export async function Customer_FindByIdProjectsTags(
  id: string,
  nk: string,
  fk: string,
): Promise<ProjectTag> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/tags/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for tags.
 * /Customers/:id/projects/:nk/tags/rel/:fk
 */
export async function Customer_LinkProjectsTags(
  id: string,
  nk: string,
  fk: string,
): Promise<ProjectTag> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/tags/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Remove the tags relation to an item by id.
 * /Customers/:id/projects/:nk/tags/rel/:fk
 */
export async function Customer_UnlinkProjectsTags(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/tags/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for reports.
 * /Customers/:id/projects/:nk/reports/:fk
 */
export async function Customer_FindByIdProjectsReports(
  id: string,
  nk: string,
  fk: string,
): Promise<Report> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/reports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for reports.
 * /Customers/:id/projects/:nk/reports/:fk
 */
export async function Customer_DestroyByIdProjectsReports(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/reports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for reports.
 * /Customers/:id/projects/:nk/reports/:fk
 */
export async function Customer_UpdateByIdProjectsReports(
  id: string,
  nk: string,
  fk: string,
  data: Partial<Report>,
): Promise<Report> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/reports/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for allowedSensorTypes.
 * /Customers/:id/projects/:nk/allowedSensorTypes/:fk
 */
export async function Customer_FindByIdProjectsAllowedSensorTypes(
  id: string,
  nk: string,
  fk: string,
): Promise<SensorType> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/allowedSensorTypes/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for allowedSensorTypes.
 * /Customers/:id/projects/:nk/allowedSensorTypes/rel/:fk
 */
export async function Customer_LinkProjectsAllowedSensorTypes(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<ProjectAllowedSensorType> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/allowedSensorTypes/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Remove the allowedSensorTypes relation to an item by id.
 * /Customers/:id/projects/:nk/allowedSensorTypes/rel/:fk
 */
export async function Customer_UnlinkProjectsAllowedSensorTypes(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/allowedSensorTypes/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for storeVideoAnalyticDashboards.
 * /Customers/:id/projects/:nk/storeVideoAnalyticDashboards/:fk
 */
export async function Customer_FindByIdProjectsStoreVideoAnalyticDashboards(
  id: string,
  nk: string,
  fk: string,
): Promise<StoreVideoAnalyticDashboard> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/storeVideoAnalyticDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for storeVideoAnalyticDashboards.
 * /Customers/:id/projects/:nk/storeVideoAnalyticDashboards/:fk
 */
export async function Customer_DestroyByIdProjectsStoreVideoAnalyticDashboards(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/storeVideoAnalyticDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for storeVideoAnalyticDashboards.
 * /Customers/:id/projects/:nk/storeVideoAnalyticDashboards/:fk
 */
export async function Customer_UpdateByIdProjectsStoreVideoAnalyticDashboards(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<StoreVideoAnalyticDashboard> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/storeVideoAnalyticDashboards/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for storylines.
 * /Customers/:id/projects/:nk/storylines/:fk
 */
export async function Customer_FindByIdProjectsStorylines(
  id: string,
  nk: string,
  fk: string,
): Promise<Storyline> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/storylines/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for storylines.
 * /Customers/:id/projects/:nk/storylines/:fk
 */
export async function Customer_DestroyByIdProjectsStorylines(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/storylines/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for storylines.
 * /Customers/:id/projects/:nk/storylines/:fk
 */
export async function Customer_UpdateByIdProjectsStorylines(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<Storyline> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/storylines/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for adminTools.
 * /Customers/:id/projects/:nk/adminTools/:fk
 */
export async function Customer_FindByIdProjectsAdminTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/adminTools/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for adminTools.
 * /Customers/:id/projects/:nk/adminTools/rel/:fk
 */
export async function Customer_LinkProjectsAdminTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/adminTools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Remove the adminTools relation to an item by id.
 * /Customers/:id/projects/:nk/adminTools/rel/:fk
 */
export async function Customer_UnlinkProjectsAdminTools(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/adminTools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for tools.
 * /Customers/:id/projects/:nk/tools/:fk
 */
export async function Customer_FindByIdProjectsTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/tools/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for tools.
 * /Customers/:id/projects/:nk/tools/rel/:fk
 */
export async function Customer_LinkProjectsTools(
  id: string,
  nk: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/tools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Remove the tools relation to an item by id.
 * /Customers/:id/projects/:nk/tools/rel/:fk
 */
export async function Customer_UnlinkProjectsTools(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/tools/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for trafficFlowAnalysis.
 * /Customers/:id/projects/:nk/trafficFlowAnalysis/:fk
 */
export async function Customer_FindByIdProjectsTrafficFlowAnalysis(
  id: string,
  nk: string,
  fk: string,
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/trafficFlowAnalysis/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for trafficFlowAnalysis.
 * /Customers/:id/projects/:nk/trafficFlowAnalysis/:fk
 */
export async function Customer_DestroyByIdProjectsTrafficFlowAnalysis(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/trafficFlowAnalysis/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for trafficFlowAnalysis.
 * /Customers/:id/projects/:nk/trafficFlowAnalysis/:fk
 */
export async function Customer_UpdateByIdProjectsTrafficFlowAnalysis(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/trafficFlowAnalysis/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for virtualExpressions.
 * /Customers/:id/projects/:nk/virtualExpressions/:fk
 */
export async function Customer_FindByIdProjectsVirtualExpressions(
  id: string,
  nk: string,
  fk: string,
): Promise<VirtualExpression> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualExpressions/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for virtualGroups.
 * /Customers/:id/projects/:nk/virtualGroups/:fk
 */
export async function Customer_FindByIdProjectsVirtualGroups(
  id: string,
  nk: string,
  fk: string,
): Promise<VirtualGroup> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualGroups/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for virtualGroups.
 * /Customers/:id/projects/:nk/virtualGroups/:fk
 */
export async function Customer_DestroyByIdProjectsVirtualGroups(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/virtualGroups/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for virtualGroups.
 * /Customers/:id/projects/:nk/virtualGroups/:fk
 */
export async function Customer_UpdateByIdProjectsVirtualGroups(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<VirtualGroup> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/virtualGroups/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Find a related item by id for virtualVariables.
 * /Customers/:id/projects/:nk/virtualVariables/:fk
 */
export async function Customer_FindByIdProjectsVirtualVariables(
  id: string,
  nk: string,
  fk: string,
): Promise<VirtualVariable> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualVariables/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for yoloClasses.
 * /Customers/:id/projects/:nk/yoloClasses/:fk
 */
export async function Customer_FindByIdProjectsYoloClasses(
  id: string,
  nk: string,
  fk: string,
): Promise<YoloClass> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/yoloClasses/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Add a related item by id for yoloClasses.
 * /Customers/:id/projects/:nk/yoloClasses/rel/:fk
 */
export async function Customer_LinkProjectsYoloClasses(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<YoloClassProject> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/projects/:nk/yoloClasses/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Remove the yoloClasses relation to an item by id.
 * /Customers/:id/projects/:nk/yoloClasses/rel/:fk
 */
export async function Customer_UnlinkProjectsYoloClasses(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/yoloClasses/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Queries assets of Project.
 * /Customers/:id/projects/:nk/assets
 */
export async function Customer_GetProjectsAssets(
  id: string,
  nk: string,
  filter?: Filter<Asset>,
): Promise<Asset[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/assets',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in assets of this model.
 * /Customers/:id/projects/:nk/assets
 */
export async function Customer_CreateProjectsAssets(
  id: string,
  nk: string,
  data: any = {},
): Promise<Asset> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/assets',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts assets of Project.
 * /Customers/:id/projects/:nk/assets/count
 */
export async function Customer_CountProjectsAssets(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/assets/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries assetTemplates of Project.
 * /Customers/:id/projects/:nk/assetTemplates
 */
export async function Customer_GetProjectsAssetTemplates(
  id: string,
  nk: string,
  filter?: Filter<AssetTemplate>,
): Promise<AssetTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/assetTemplates',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in assetTemplates of this model.
 * /Customers/:id/projects/:nk/assetTemplates
 */
export async function Customer_CreateProjectsAssetTemplates(
  id: string,
  nk: string,
  data: any = {},
): Promise<AssetTemplate> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/assetTemplates',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts assetTemplates of Project.
 * /Customers/:id/projects/:nk/assetTemplates/count
 */
export async function Customer_CountProjectsAssetTemplates(
  id: string,
  nk: string,
  where?: Filter<AssetTemplate>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/assetTemplates/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries countReports of Project.
 * /Customers/:id/projects/:nk/countReports
 */
export async function Customer_GetProjectsCountReports(
  id: string,
  nk: string,
  filter?: Filter<CountReport>,
): Promise<CountReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/countReports',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in countReports of this model.
 * /Customers/:id/projects/:nk/countReports
 */
export async function Customer_CreateProjectsCountReports(
  id: string,
  nk: string,
  data: any = {},
): Promise<CountReport> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/countReports',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts countReports of Project.
 * /Customers/:id/projects/:nk/countReports/count
 */
export async function Customer_CountProjectsCountReports(
  id: string,
  nk: string,
  where?: Filter<CountReport>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/countReports/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries healthcheckEvents of Project.
 * /Customers/:id/projects/:nk/healthcheckEvents
 */
export async function Customer_GetProjectsHealthcheckEvents(
  id: string,
  nk: string,
  filter?: Filter<HealthcheckEvent>,
): Promise<HealthcheckEvent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/healthcheckEvents',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts healthcheckEvents of Project.
 * /Customers/:id/projects/:nk/healthcheckEvents/count
 */
export async function Customer_CountProjectsHealthcheckEvents(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/healthcheckEvents/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries cctvDashboards of Project.
 * /Customers/:id/projects/:nk/cctvDashboards
 */
export async function Customer_GetProjectsCctvDashboards(
  id: string,
  nk: string,
  filter?: Filter<CctvDashboard>,
): Promise<CctvDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/cctvDashboards',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in cctvDashboards of this model.
 * /Customers/:id/projects/:nk/cctvDashboards
 */
export async function Customer_CreateProjectsCctvDashboards(
  id: string,
  nk: string,
  data: any = {},
): Promise<CctvDashboard> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/cctvDashboards',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts cctvDashboards of Project.
 * /Customers/:id/projects/:nk/cctvDashboards/count
 */
export async function Customer_CountProjectsCctvDashboards(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/cctvDashboards/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventDashboards of Project.
 * /Customers/:id/projects/:nk/eventDashboards
 */
export async function Customer_GetProjectsEventDashboards(
  id: string,
  nk: string,
  filter?: Filter<EventDashboard>,
): Promise<EventDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventDashboards',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in eventDashboards of this model.
 * /Customers/:id/projects/:nk/eventDashboards
 */
export async function Customer_CreateProjectsEventDashboards(
  id: string,
  nk: string,
  data: any = {},
): Promise<EventDashboard> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/eventDashboards',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts eventDashboards of Project.
 * /Customers/:id/projects/:nk/eventDashboards/count
 */
export async function Customer_CountProjectsEventDashboards(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventDashboards/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries eventSummaryForProjects of Project.
 * /Customers/:id/projects/:nk/eventSummaryForProjects
 */
export async function Customer_GetProjectsEventSummaryForProjects(
  id: string,
  nk: string,
  filter?: Filter<EventSummaryForProject>,
): Promise<EventSummaryForProject[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventSummaryForProjects',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts eventSummaryForProjects of Project.
 * /Customers/:id/projects/:nk/eventSummaryForProjects/count
 */
export async function Customer_CountProjectsEventSummaryForProjects(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/eventSummaryForProjects/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries embeddedReports of Project.
 * /Customers/:id/projects/:nk/embeddedReports
 */
export async function Customer_GetProjectsEmbeddedReports(
  id: string,
  nk: string,
  filter?: Filter<EmbeddedReport>,
): Promise<EmbeddedReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/embeddedReports',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in embeddedReports of this model.
 * /Customers/:id/projects/:nk/embeddedReports
 */
export async function Customer_CreateProjectsEmbeddedReports(
  id: string,
  nk: string,
  data: any = {},
): Promise<EmbeddedReport> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/embeddedReports',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts embeddedReports of Project.
 * /Customers/:id/projects/:nk/embeddedReports/count
 */
export async function Customer_CountProjectsEmbeddedReports(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/embeddedReports/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries biPanels of Project.
 * /Customers/:id/projects/:nk/biPanels
 */
export async function Customer_GetProjectsBiPanels(
  id: string,
  nk: string,
  filter?: Filter<BIPanel>,
): Promise<BIPanel[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/biPanels',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in biPanels of this model.
 * /Customers/:id/projects/:nk/biPanels
 */
export async function Customer_CreateProjectsBiPanels(
  id: string,
  nk: string,
  data: any = {},
): Promise<BIPanel> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/biPanels',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts biPanels of Project.
 * /Customers/:id/projects/:nk/biPanels/count
 */
export async function Customer_CountProjectsBiPanels(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/biPanels/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries peopleCounterReports of Project.
 * /Customers/:id/projects/:nk/peopleCounterReports
 */
export async function Customer_GetProjectsPeopleCounterReports(
  id: string,
  nk: string,
  filter?: Filter<PeopleCounterReport>,
): Promise<PeopleCounterReport[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/peopleCounterReports',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in peopleCounterReports of this model.
 * /Customers/:id/projects/:nk/peopleCounterReports
 */
export async function Customer_CreateProjectsPeopleCounterReports(
  id: string,
  nk: string,
  data: any = {},
): Promise<PeopleCounterReport> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/peopleCounterReports',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts peopleCounterReports of Project.
 * /Customers/:id/projects/:nk/peopleCounterReports/count
 */
export async function Customer_CountProjectsPeopleCounterReports(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/peopleCounterReports/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries tags of Project.
 * /Customers/:id/projects/:nk/tags
 */
export async function Customer_GetProjectsTags(
  id: string,
  nk: string,
  filter?: Filter<ProjectTag>,
): Promise<ProjectTag[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/tags',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts tags of Project.
 * /Customers/:id/projects/:nk/tags/count
 */
export async function Customer_CountProjectsTags(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/tags/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries reports of Project.
 * /Customers/:id/projects/:nk/reports
 */
export async function Customer_GetProjectsReports(
  id: string,
  nk: string,
  filter?: Filter<Report>,
): Promise<Report[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/reports',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in reports of this model.
 * /Customers/:id/projects/:nk/reports
 */
export async function Customer_CreateProjectsReports(
  id: string,
  nk: string,
  data: any = {},
): Promise<Report> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/reports',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts reports of Project.
 * /Customers/:id/projects/:nk/reports/count
 */
export async function Customer_CountProjectsReports(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/reports/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries allowedSensorTypes of Project.
 * /Customers/:id/projects/:nk/allowedSensorTypes
 */
export async function Customer_GetProjectsAllowedSensorTypes(
  id: string,
  nk: string,
  filter?: Filter<SensorType>,
): Promise<SensorType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/allowedSensorTypes',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts allowedSensorTypes of Project.
 * /Customers/:id/projects/:nk/allowedSensorTypes/count
 */
export async function Customer_CountProjectsAllowedSensorTypes(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/allowedSensorTypes/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries storeVideoAnalyticDashboards of Project.
 * /Customers/:id/projects/:nk/storeVideoAnalyticDashboards
 */
export async function Customer_GetProjectsStoreVideoAnalyticDashboards(
  id: string,
  nk: string,
  filter?: Filter<StoreVideoAnalyticDashboard>,
): Promise<StoreVideoAnalyticDashboard[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/storeVideoAnalyticDashboards',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in storeVideoAnalyticDashboards of this model.
 * /Customers/:id/projects/:nk/storeVideoAnalyticDashboards
 */
export async function Customer_CreateProjectsStoreVideoAnalyticDashboards(
  id: string,
  nk: string,
  data: any = {},
): Promise<StoreVideoAnalyticDashboard> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/storeVideoAnalyticDashboards',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts storeVideoAnalyticDashboards of Project.
 * /Customers/:id/projects/:nk/storeVideoAnalyticDashboards/count
 */
export async function Customer_CountProjectsStoreVideoAnalyticDashboards(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/storeVideoAnalyticDashboards/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries storylines of Project.
 * /Customers/:id/projects/:nk/storylines
 */
export async function Customer_GetProjectsStorylines(
  id: string,
  nk: string,
  filter?: Filter<Storyline>,
): Promise<Storyline[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/storylines',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in storylines of this model.
 * /Customers/:id/projects/:nk/storylines
 */
export async function Customer_CreateProjectsStorylines(
  id: string,
  nk: string,
  data: any = {},
): Promise<Storyline> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/storylines',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts storylines of Project.
 * /Customers/:id/projects/:nk/storylines/count
 */
export async function Customer_CountProjectsStorylines(
  id: string,
  nk: string,
  where?: Filter<Storyline>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/storylines/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries adminTools of Project.
 * /Customers/:id/projects/:nk/adminTools
 */
export async function Customer_GetProjectsAdminTools(
  id: string,
  nk: string,
  filter?: Filter<Tool>,
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/adminTools',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts adminTools of Project.
 * /Customers/:id/projects/:nk/adminTools/count
 */
export async function Customer_CountProjectsAdminTools(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/adminTools/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries tools of Project.
 * /Customers/:id/projects/:nk/tools
 */
export async function Customer_GetProjectsTools(
  id: string,
  nk: string,
  filter?: Filter<Tool>,
): Promise<Tool[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/tools',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts tools of Project.
 * /Customers/:id/projects/:nk/tools/count
 */
export async function Customer_CountProjectsTools(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/tools/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries trafficFlowAnalysis of Project.
 * /Customers/:id/projects/:nk/trafficFlowAnalysis
 */
export async function Customer_GetProjectsTrafficFlowAnalysis(
  id: string,
  nk: string,
  filter?: Filter<TrafficFlowAnalysis>,
): Promise<TrafficFlowAnalysis[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/trafficFlowAnalysis',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in trafficFlowAnalysis of this model.
 * /Customers/:id/projects/:nk/trafficFlowAnalysis
 */
export async function Customer_CreateProjectsTrafficFlowAnalysis(
  id: string,
  nk: string,
  data: any = {},
): Promise<TrafficFlowAnalysis> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/trafficFlowAnalysis',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts trafficFlowAnalysis of Project.
 * /Customers/:id/projects/:nk/trafficFlowAnalysis/count
 */
export async function Customer_CountProjectsTrafficFlowAnalysis(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/trafficFlowAnalysis/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries virtualExpressions of Project.
 * /Customers/:id/projects/:nk/virtualExpressions
 */
export async function Customer_GetProjectsVirtualExpressions(
  id: string,
  nk: string,
  filter?: Filter<VirtualExpression>,
): Promise<VirtualExpression[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualExpressions',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts virtualExpressions of Project.
 * /Customers/:id/projects/:nk/virtualExpressions/count
 */
export async function Customer_CountProjectsVirtualExpressions(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualExpressions/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries virtualGroups of Project.
 * /Customers/:id/projects/:nk/virtualGroups
 */
export async function Customer_GetProjectsVirtualGroups(
  id: string,
  nk: string,
  filter?: Filter<VirtualGroup>,
): Promise<VirtualGroup[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualGroups',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in virtualGroups of this model.
 * /Customers/:id/projects/:nk/virtualGroups
 */
export async function Customer_CreateProjectsVirtualGroups(
  id: string,
  nk: string,
  data: any = {},
): Promise<VirtualGroup> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/virtualGroups',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts virtualGroups of Project.
 * /Customers/:id/projects/:nk/virtualGroups/count
 */
export async function Customer_CountProjectsVirtualGroups(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualGroups/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries virtualVariables of Project.
 * /Customers/:id/projects/:nk/virtualVariables
 */
export async function Customer_GetProjectsVirtualVariables(
  id: string,
  nk: string,
  filter?: Filter<VirtualVariable>,
): Promise<VirtualVariable[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualVariables',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts virtualVariables of Project.
 * /Customers/:id/projects/:nk/virtualVariables/count
 */
export async function Customer_CountProjectsVirtualVariables(
  id: string,
  nk: string,
  where?: Filter<Project>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualVariables/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Queries yoloClasses of Project.
 * /Customers/:id/projects/:nk/yoloClasses
 */
export async function Customer_GetProjectsYoloClasses(
  id: string,
  nk: string,
  filter?: Filter<YoloClass>,
): Promise<YoloClass[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/yoloClasses',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Counts yoloClasses of Project.
 * /Customers/:id/projects/:nk/yoloClasses/count
 */
export async function Customer_CountProjectsYoloClasses(
  id: string,
  nk: string,
  where?: Filter<YoloClass>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/yoloClasses/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a telegram bot if not already created
 * /Customers/:id/projects/:nk/telegram
 */
export async function Customer_CreateProjectsTelegram(
  id: string,
  nk: string,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/telegram',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Create telegram permission
 * /Customers/:id/projects/:nk/telegram/permissions
 */
export async function Customer_CreateProjectsTelegramPermissions(
  id: string,
  nk: string,
  body: any,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/telegram/permissions',
    routeParams: {
      id,
      nk,
    },
    body: {
      body,
    },
  });
}
/**
 * Get telegram group permissions
 * /Customers/:id/projects/:nk/telegram/groups/:groupId/permissions
 */
export async function Customer_GetProjectsTelegramGroupsPermissions(
  id: string,
  nk: string,
  groupId: string,
): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/telegram/groups/:groupId/permissions',
    routeParams: {
      id,
      nk,
      groupId,
    },
  });
}
/**
 * Remove telegram permission
 * /Customers/:id/projects/:nk/telegram/permissions/:permissionId
 */
export async function Customer_DestroyByIdProjectsTelegramPermissions(
  id: string,
  nk: string,
  permissionId: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/telegram/permissions/:permissionId',
    routeParams: {
      id,
      nk,
      permissionId,
    },
  });
}
/**
 * Set active telegram
 * /Customers/:id/projects/:nk/telegram/groups/:groupId/active
 */
export async function Customer_SetProjectsTelegramActive(
  id: string,
  nk: string,
  groupId: string,
  body: any,
): Promise<any> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/projects/:nk/telegram/groups/:groupId/active',
    routeParams: {
      id,
      nk,
      groupId,
    },
    body: {
      body,
    },
  });
}
/**
 * Get a single permission token
 * /Customers/:id/projects/:nk/telegram/permissions/:permissionId/token
 */
export async function Customer_GetProjectsTelegramPermissionsToken(
  id: string,
  nk: string,
  permissionId: string,
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/telegram/permissions/:permissionId/token',
    routeParams: {
      id,
      nk,
      permissionId,
    },
  });
}
/**
 * Create a telegram group
 * /Customers/:id/projects/:nk/telegram/groups
 */
export async function Customer_CreateProjectsTelegramGroups(
  id: string,
  nk: string,
  body: any,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/telegram/groups',
    routeParams: {
      id,
      nk,
    },
    body: {
      body,
    },
  });
}
/**
 * Update group
 * /Customers/:id/projects/:nk/telegram/groups/:groupId
 */
export async function Customer_UpdateByIdProjectsTelegramGroups(
  id: string,
  nk: string,
  groupId: string,
  body: any,
): Promise<any> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/projects/:nk/telegram/groups/:groupId',
    routeParams: {
      id,
      nk,
      groupId,
    },
    body: {
      body,
    },
  });
}
/**
 * Get telegram groups
 * /Customers/:id/projects/:nk/telegram/groups
 */
export async function Customer_GetProjectsTelegramGroups(
  id: string,
  nk: string,
): Promise<any[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/telegram/groups',
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Remove telegram group
 * /Customers/:id/projects/:nk/telegram/groups/:groupId
 */
export async function Customer_DestroyByIdProjectsTelegramGroups(
  id: string,
  nk: string,
  groupId: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/projects/:nk/telegram/groups/:groupId',
    routeParams: {
      id,
      nk,
      groupId,
    },
  });
}
/**
 * Link assets to telegram group
 * /Customers/:id/projects/:nk/telegram/groups/assets
 */
export async function Customer_LinkProjectsAssetsToTelegramGroup(
  id: string,
  nk: string,
  content: any,
): Promise<any> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/projects/:nk/telegram/groups/assets',
    routeParams: {
      id,
      nk,
    },
    body: {
      content,
    },
  });
}
/**
 * Evaluate a virtual expression in a date interval
 * /Customers/:id/projects/:nk/virtualExpressions/:fk/evaluate
 */

export type VirtualExpressionEvaluateResponse = {
  virtualExpressionId: string;
  from: Date;
  to: Date;
  groupIntervals: ('hour' | 'day' | 'week' | 'month')[];
  groupUTC: number;
  data: Record<
    'hour' | 'day' | 'week' | 'month',
    { value: number; from: Date; to: Date }[]
  >;
};

export async function Customer_EvaluateProjectsVirtualExpressions(
  id: string,
  nk: string,
  fk: string,
  from: Date,
  to: Date,
  groupIntervals: ('hour' | 'day' | 'week' | 'month')[],
  groupUtc: number,
  groupMode?: string,
): Promise<VirtualExpressionEvaluateResponse> {
  const _urlParams: any = {};
  if (from != null) {
    _urlParams['from'] = from;
  }
  if (to != null) {
    _urlParams['to'] = to;
  }
  if (groupIntervals != null) {
    _urlParams['group_intervals'] = groupIntervals;
  }
  if (groupMode != null) {
    _urlParams['group_mode'] = groupMode;
  }
  if (groupUtc != null) {
    _urlParams['group_utc'] = groupUtc;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/projects/:nk/virtualExpressions/:fk/evaluate',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Find a related item by id for edgeAgents.
 * /Customers/:id/devices/:nk/edgeAgents/:fk
 */
export async function Customer_FindByIdDevicesEdgeAgents(
  id: string,
  nk: string,
  fk: string,
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/edgeAgents/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for edgeAgents.
 * /Customers/:id/devices/:nk/edgeAgents/:fk
 */
export async function Customer_DestroyByIdDevicesEdgeAgents(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/devices/:nk/edgeAgents/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for edgeAgents.
 * /Customers/:id/devices/:nk/edgeAgents/:fk
 */
export async function Customer_UpdateByIdDevicesEdgeAgents(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/devices/:nk/edgeAgents/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Queries edgeAgents of Device.
 * /Customers/:id/devices/:nk/edgeAgents
 */
export async function Customer_GetDevicesEdgeAgents(
  id: string,
  nk: string,
  filter?: Filter<EdgeAgent>,
): Promise<EdgeAgent[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/edgeAgents',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in edgeAgents of this model.
 * /Customers/:id/devices/:nk/edgeAgents
 */
export async function Customer_CreateDevicesEdgeAgents(
  id: string,
  nk: string,
  data: any = {},
): Promise<EdgeAgent> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/devices/:nk/edgeAgents',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Counts edgeAgents of Device.
 * /Customers/:id/devices/:nk/edgeAgents/count
 */
export async function Customer_CountDevicesEdgeAgents(
  id: string,
  nk: string,
  where?: Filter<EdgeAgent>['where'],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams['where'] = where;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/devices/:nk/edgeAgents/count',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Add a related item by id for assets.
 * /Customers/:id/storylines/:nk/assets/rel/:fk
 */
export async function Customer_LinkStorylinesAssets(
  id: string,
  nk: string,
  fk: string,
): Promise<Asset> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/storylines/:nk/assets/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Remove the assets relation to an item by id.
 * /Customers/:id/storylines/:nk/assets/rel/:fk
 */
export async function Customer_UnlinkStorylinesAssets(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/storylines/:nk/assets/rel/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Delete a related item by id for storypoints.
 * /Customers/:id/storylines/:nk/storypoints/:fk
 */
export async function Customer_DestroyByIdStorylinesStorypoints(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/storylines/:nk/storypoints/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for storypoints.
 * /Customers/:id/storylines/:nk/storypoints/:fk
 */
export async function Customer_UpdateByIdStorylinesStorypoints(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<Storypoint> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/storylines/:nk/storypoints/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Queries storypoints of Storyline.
 * /Customers/:id/storylines/:nk/storypoints
 */
export async function Customer_GetStorylinesStorypoints(
  id: string,
  nk: string,
  filter?: Filter<Storypoint>,
): Promise<Storypoint[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/storylines/:nk/storypoints',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in storypoints of this model.
 * /Customers/:id/storylines/:nk/storypoints
 */
export async function Customer_CreateStorylinesStorypoints(
  id: string,
  nk: string,
  data: any = {},
): Promise<Storypoint> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/storylines/:nk/storypoints',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/**
 * Delete a related item by id for sections.
 * /Customers/:id/countReports/:nk/sections/:fk
 */
export async function Customer_DestroyByIdCountReportsSections(
  id: string,
  nk: string,
  fk: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/countReports/:nk/sections/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
  });
}
/**
 * Update a related item by id for sections.
 * /Customers/:id/countReports/:nk/sections/:fk
 */
export async function Customer_UpdateByIdCountReportsSections(
  id: string,
  nk: string,
  fk: string,
  data: any = {},
): Promise<CountReportSection> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/countReports/:nk/sections/:fk',
    routeParams: {
      id,
      nk,
      fk,
    },
    body: data,
  });
}
/**
 * Queries sections of CountReport.
 * /Customers/:id/countReports/:nk/sections
 */
export async function Customer_GetCountReportsSections(
  id: string,
  nk: string,
  filter?: Filter<CountReportSection>,
): Promise<CountReportSection[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/countReports/:nk/sections',
    urlParams: _urlParams,
    routeParams: {
      id,
      nk,
    },
  });
}
/**
 * Creates a new instance in sections of this model.
 * /Customers/:id/countReports/:nk/sections
 */
export async function Customer_CreateCountReportsSections(
  id: string,
  nk: string,
  data: any = {},
): Promise<CountReportSection> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/countReports/:nk/sections',
    routeParams: {
      id,
      nk,
    },
    body: data,
  });
}
/** Get ListedLicensePlates */
export async function Customer_getListedLicensePlates(
  id: string,
): Promise<ListedLicensePlate[]> {
  return ApiFetch({
    method: 'GET',
    url: '/Customers/:id/blackList',
    routeParams: {
      id,
    },
  });
}

/**
 * Create ListedLicensePlates
 */
export async function Customer_createListedLicensePlate(
  id: string,
  data: Omit<
    Partial<ListedLicensePlate> &
      Pick<ListedLicensePlate, 'licensePlate' | 'blacklistedAt'>,
    '_key' | 'customerId' | 'createdAt'
  >,
): Promise<string> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/blackList/licensePlate',
    routeParams: {
      id,
    },
    body: data,
  });
}

/**
 * Delete ListedLicensePlates
 */
export async function Customer_deleteListedLicensePlate(
  id: string,
  _key: string,
): Promise<void> {
  return ApiFetch({
    method: 'DELETE',
    url: '/Customers/:id/blackList/licensePlate/:key',
    routeParams: {
      id,
      key: _key,
    },
  });
}

/**
 * Update ListedLicensePlates
 */
export async function Customer_updateListedLicensePlate(
  id: string,
  _key: string,
  data: Omit<
    Partial<ListedLicensePlate>,
    '_key' | 'customerId' | 'createdAt' | 'licensePlate' | 'blacklistedAt'
  >,
): Promise<string> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/blackList/licensePlate/:key',
    routeParams: {
      id,
      key: _key,
    },
    body: data,
  });
}

/**
 * Create many ListedLicensePlates
 */
export async function Customer_createManyListedLicensePlates(
  id: string,
  data: Omit<
    Partial<ListedLicensePlate> &
      Pick<ListedLicensePlate, 'licensePlate' | 'blacklistedAt'>,
    '_key' | 'customerId' | 'createdAt'
  >[],
): Promise<string[]> {
  return ApiFetch({
    method: 'POST',
    url: '/Customers/:id/blackList/many',
    routeParams: {
      id,
    },
    body: data,
  });
}

/**
 * Merge ListedLicensePlates
 */
export async function Customer_mergeListedLicensePlates(
  id: string,
  data: Omit<
    Partial<ListedLicensePlate> &
      Pick<ListedLicensePlate, 'licensePlate' | 'blacklistedAt'>,
    '_key' | 'customerId' | 'createdAt'
  >[],
): Promise<MergeLicensePlateResponse> {
  return ApiFetch({
    method: 'PATCH',
    url: '/Customers/:id/blackList/merge',
    routeParams: {
      id,
    },
    body: data,
  });
}

/**
 * Replace ListedLicensePlates
 */
export async function Customer_replaceListedLicensePlates(
  id: string,
  data: Omit<
    Partial<ListedLicensePlate> &
      Pick<ListedLicensePlate, 'licensePlate' | 'blacklistedAt'>,
    '_key' | 'customerId' | 'createdAt'
  >[],
): Promise<string[]> {
  return ApiFetch({
    method: 'PUT',
    url: '/Customers/:id/blackList/replace',
    routeParams: {
      id,
    },
    body: data,
  });
}
