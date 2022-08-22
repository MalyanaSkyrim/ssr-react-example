import { call, put } from "redux-saga/effects";
import { loadReposByPage } from "../../../APIs/reposApi";
import { loadReposSuccess } from "../../actionCreators/repoActionCreators";

export function* handleLoadRepos(action) {
  console.log({ action });
  const payload = yield call(loadReposByPage, action.payload);
  yield put(loadReposSuccess(payload));
}
