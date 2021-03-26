import {createStore,applyMiddleware} from "redux"
import {rootReducer} from "../reducer/reducer"
import {forbiddenWordsMiddleware} from "../middleware/middleware"
const store = createStore(rootReducer,applyMiddleware(forbiddenWordsMiddleware));
//https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
export default store