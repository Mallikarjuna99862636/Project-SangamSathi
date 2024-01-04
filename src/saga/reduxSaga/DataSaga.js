import { put, call } from "redux-saga/effects";
import { dataRedux } from "../../Redux/reduxData/DataRedux";

export function* DataDetailsSaga(api, action) {
  try {
    const responce = yield call(api.detailsData, action.payload);
    if (responce.status === 200) {
      yield put(dataRedux.actions.dataDetailsSuccess(responce.data));
    } else {
      yield put(dataRedux.actions.dataDetailsFailure(responce.data));
    }
  } catch (error) {
    yield put(dataRedux.actions.dataDetailsFailure(error));
  }
}
