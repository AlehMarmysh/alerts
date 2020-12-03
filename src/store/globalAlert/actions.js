import { globalAlertActions } from '../../constans/actions/globalAlertActions';

export const setIsVisibleGlobalAlert = data => ({
  type: globalAlertActions.SetIsVisibleGlobalAlert,
  payload: data,
});
