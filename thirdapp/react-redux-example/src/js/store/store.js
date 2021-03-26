import { createStore, applyMiddleware, compose } from "redux"
import { rootReducer } from "../reducer/reducer"
import { forbiddenWordsMiddleware } from "../middleware/middleware"
import thunk from "redux-thunk"

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware,thunk))
);
//https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
export default store