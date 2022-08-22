import { call, put } from "redux-saga/effects";
import { getUser } from "../../../APIs/reposApi";
import { loadUserSuccess } from "../../actionCreators/userActionCreators";

export function* handleLoadUser(action) {
  console.log({ action });
  const payload = yield call(getUser, action.payload);
  yield put(loadUserSuccess(payload));
}
