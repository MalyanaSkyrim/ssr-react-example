import { takeEvery } from "redux-saga/effects";
import actionTypes from "../../actionTypes";
import { handleLoadUser } from "../workers/userWorker";

export default function* () {
  yield takeEvery(actionTypes.LOAD_USER, handleLoadUser);
}
