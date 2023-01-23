import Constant from '../Constants/Strings';

const initialState = {
  mode: 'light',
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};
