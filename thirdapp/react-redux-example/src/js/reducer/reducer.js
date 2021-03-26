import {initialState} from "../state/state"
import {ADD_ARTICLE} from "../actions/actiontypes"
import {addArticle} from "../actions/actions"

const rootReducer = (state = initialState, action) => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    if(action.type === ADD_ARTICLE){
        state.articles.push(action.payload)
    }
    return state ;
}