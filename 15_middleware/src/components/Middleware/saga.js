import { put, takeLatest } from "redux-saga/effects";
function* fetchUsers() {
  const jsonData = yield fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());
  console.log(jsonData);
  yield put({ type: "USERS", payload: jsonData });
}
export default function* rootSaga() {
  yield takeLatest("GET_USERS", fetchUsers);
}
