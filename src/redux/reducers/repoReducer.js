import actionTypes from "../actionTypes";
const initialState = {
  hasMore: true,
  repos: [],
};

const repoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING_REPOS_SUCCESS:
      return {
        repos: [...state.repos, ...payload.repos],
        hasMore: payload.hasMore,
      };

    default:
      return state;
  }
};

export default repoReducer;
