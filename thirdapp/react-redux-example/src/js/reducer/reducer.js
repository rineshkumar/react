import { initialState } from "../state/state"
import { ADD_ARTICLE, DATA_LOADED ,API_ERRORED} from "../actions/actiontypes"
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
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state,
            {
                remoteArticles: state.remoteArticles.concat(action.payload)
            })
    }
    if(action.type === API_ERRORED){
        return state;   
    }
    return state;
}

export { rootReducer }