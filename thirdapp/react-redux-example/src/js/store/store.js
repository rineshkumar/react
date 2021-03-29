import { createStore, applyMiddleware, compose } from "redux"
import { rootReducer } from "../reducer/reducer"
import { forbiddenWordsMiddleware } from "../middleware/middleware"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import watcherSaga from "../sagas/api-saga"
const sagaMiddleware = createSagaMiddleware()
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, sagaMiddleware, thunk))
);
sagaMiddleware.run(watcherSaga);
//https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
export default store