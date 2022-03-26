import {combineReducers} from "redux";
import hoverReducer from "./hover";
import servicesReducer from "./services";

export default combineReducers({
    hover: hoverReducer,
    services: servicesReducer
})