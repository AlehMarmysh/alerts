import { createSelector } from 'reselect';

export const getExpoPageValues = state => state.globalAlert;

export const getIsVisibleGlobalAlert = createSelector([getExpoPageValues], state => {
  return state.isVisibleGlobalAlert;
});
