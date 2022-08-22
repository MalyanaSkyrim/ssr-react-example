import { all } from "redux-saga/effects";
import repoActionsWatcher from "./watchers/repoActionsWatcher";
import userActionsWatcher from "./watchers/userActionsWatcher";

export default function* () {
  yield all([repoActionsWatcher(), userActionsWatcher()]);
}
