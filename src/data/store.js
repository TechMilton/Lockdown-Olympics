import { createStore } from "redux";

import initial from "../data/initial";
import reducer from "../data/reducers";

const store = createStore(reducer, initial);

export default store;