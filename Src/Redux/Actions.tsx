import Constant from '../Constants/Strings';

export const switchMode = mode => ({
  type: Constant.THEME_CHANGE,
  payload: mode,
});
