import ListReposContainer from "./components/ListReposContainer";
import RepoOwnerContainer from "./components/RepoOwnerContainer";

export const routes = [
  {
    path: "/",
    exact: true,
    component: ListReposContainer,
  },
  {
    path: "/user/:username",
    exact: true,
    component: RepoOwnerContainer,
  },
];
