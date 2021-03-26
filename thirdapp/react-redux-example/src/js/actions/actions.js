import { ADD_ARTICLE } from "./actiontypes"
const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload }
}

export { addArticle }