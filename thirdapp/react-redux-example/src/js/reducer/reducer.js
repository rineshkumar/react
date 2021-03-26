import { initialState } from "../state/state"
import { ADD_ARTICLE } from "../actions/actiontypes"
import { addArticle } from "../actions/actions"

const rootReducer = (state = initialState, action) => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    if (action.type === ADD_ARTICLE) {
        //using push ==> state is mutable ==> Wrong 
        //state.articles.push(action.payload)
        //use object.assign and concat
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        return Object.assign({}, state,
            {
                articles: state.articles.concat(action.payload)
            });
    }
    return state;
}

export {rootReducer}