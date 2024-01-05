import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  data: "",
  user: null,
  loggedIn : false
};

export const dataRedux = createSlice({
  name: "dataRedux",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const userdata = action.payload;
      const newState = {
        ...state,
        isLoading: true,
        user : userdata
      };
      return newState;
    },
    userLogout: (state) => {
    const  userresp = null;
      const newState = {
        ...state,
        isLoading: true,
        user : userresp
      };
      return newState;
    },
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
  userLogin,
  userLogout
} = dataRedux.actions;

export const selectUser = (state) => state.user.user;
export default dataRedux.reducer;
