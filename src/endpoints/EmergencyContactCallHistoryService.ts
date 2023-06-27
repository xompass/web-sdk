import { ApiFetch } from '../core/ApiFetch';

/**
 * Api services for the `EmergencyContactCallHistory` model.
 */

/**
 * Get an existing Twilio record
 * /EmergencyContactCallHistory/:id/record
 */
export async function EmergencyContactCallHistory_getRecord(
  id: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/EmergencyContactCallHistory/:id/record',
    routeParams: {
      id,
    },
  });
}
