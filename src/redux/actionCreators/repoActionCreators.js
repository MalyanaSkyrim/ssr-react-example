import actionTypes from "../actionTypes";

export function loadReposSuccess(payloadData) {
  const { data, hasMore } = payloadData;
  const pageRepos = data.data.items.map(repo => ({
    title: repo.name,
    description: repo.description,
    avatarUrl: repo.owner.avatar_url,
    nbStars: repo.stargazers_count,
    nbIssues: repo.open_issues_count,
    timeInterval: Math.floor(
      (Date.parse(new Date()) - Date.parse(repo.created_at)) /
        (24 * 60 * 60 * 1000)
    ),
    ownerName: repo.owner.login,
    repoUrl: repo.html_url
  }));
  const payload = {
    repos: pageRepos,
    hasMore
  };
  console.log("loadReposSuccess", payload);
  return { type: actionTypes.LOADING_REPOS_SUCCESS, payload };
}

export function loadRepos(page) {
  return { type: actionTypes.LOAD_REPOS, payload: page };
}
