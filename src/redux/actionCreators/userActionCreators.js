import actionTypes from "../actionTypes";

export function loadUserSuccess(data) {
  const {
    avatar_url,
    name,
    type,
    site_admin,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
  } = data || {};
  return {
    type: actionTypes.LOADING_USER_SUCCESS,
    payload: {
      name,
      avatar_url,
      type,
      site_admin,
      company,
      blog,
      location,
      email,
      hireable,
      bio,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
    },
  };
}

export function loadUser(username) {
  return { type: actionTypes.LOAD_USER, payload: username };
}
