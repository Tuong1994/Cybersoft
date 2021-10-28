import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { KhoaHocReducer } from "./reducers/KhoaHocReducer";
import { HocVienReducer } from "./reducers/HocVienReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { AdminReducer } from "./reducers/AdminReducer";
import { ImageReducer } from "./reducers/ImageReducer";
import { AlertReducer } from "./reducers/AlertReducer";
import { TuVanReducer } from "./reducers/TuVanReducer";
import { PaginationReducer } from "./reducers/PaginationReducer";

const rootReducer = combineReducers({
  KhoaHocReducer,
  HocVienReducer,
  AdminReducer,
  LoadingReducer,
  ImageReducer,
  AlertReducer,
  TuVanReducer,
  PaginationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
