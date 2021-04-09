import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReudcer from "./rootReducer";
const store = createStore(rootReudcer, compose(applyMiddleware(thunk)));
export default store;
