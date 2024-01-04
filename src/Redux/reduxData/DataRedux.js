import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  data: "",
};

export const dataRedux = createSlice({
  name: "dataRedux",
  initialState,
  reducers: {
    dataDetailsRequest: (state) => {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    },
    dataDetailsSuccess: (state, action) => {
      const responce = action.payload;
      const newState = {
        ...state,
        isLoading: false,
        data: responce,
      };
      return newState;
    },
    dataDetailsFailure: (state, action) => {
      const responce = action.payload;
      const newState = {
        ...state,
        isLoading: false,
        error: responce,
      };
      return newState;
    },
    dataSetState: (state, action) => {
      const newState = {
        ...state,
      };
      newState[action.payload.key] = action.payload.value;
      return newState;
    },
  },
});

export const {
  dataSetState,
  dataDetailsFailure,
  dataDetailsSuccess,
  dataDetailsRequest,
} = dataRedux.actions;

export default dataRedux.reducer;
