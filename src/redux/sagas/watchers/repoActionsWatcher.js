import { takeEvery } from "redux-saga/effects";
import actionTypes from "../../actionTypes";
import { handleLoadRepos } from "../workers/repoWorker";

export default function* () {
  yield takeEvery(actionTypes.LOAD_REPOS, handleLoadRepos);
}
