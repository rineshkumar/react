import {createStore} from "redux"
import {rootReducer} from "../reducer/reducer"

const store = createStore(rootReducer);
//https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
export default store