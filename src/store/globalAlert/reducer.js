import { globalAlertActions } from '../../constans/actions/globalAlertActions';

const initialState = {
  isVisibleGlobalAlert: false,
};

export const globalAlert = (state = initialState, action) => {
  switch (action.type) {
    case globalAlertActions.SetIsVisibleGlobalAlert:
      return {
        ...state,
        isVisibleGlobalAlert: action.payload,
      };
    default:
      return state;
  }
};
