import { ADD_ARTICLE } from "../actions/actiontypes"
const forbiddenWords = ["spam", "money"];
const forbiddenWordsMiddleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            //Do checks here. 
            if (action.type === ADD_ARTICLE) {
                const foundWords = forbiddenWords.filter(word =>
                    action.payload.title.includes(word));
                if (foundWords.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" })
                }
            }

            return next(action);
        }
    }
}

export { forbiddenWordsMiddleware }