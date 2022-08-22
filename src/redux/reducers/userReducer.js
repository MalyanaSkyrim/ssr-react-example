import actionTypes from "../actionTypes";
const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING_USER_SUCCESS:
      return {
        user: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
