import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dataReducer from "./reduxData/DataRedux";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    dataValue: dataReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
