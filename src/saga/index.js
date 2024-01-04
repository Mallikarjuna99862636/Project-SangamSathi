import { takeEvery } from "redux-saga/effects";
import ApiServices from "../server/ApiServices";
import { DataDetailsSaga } from "./reduxSaga/DataSaga";
import { dataDetailsRequest } from "../Redux/reduxData/DataRedux";

const api = ApiServices.create();

export function* rootSaga() {
  yield takeEvery(dataDetailsRequest, DataDetailsSaga, api);
}
