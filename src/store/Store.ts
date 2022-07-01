import { legacy_createStore as createStore } from "redux";
import { combReducer } from "./Reducer";

export const store = createStore(combReducer);
