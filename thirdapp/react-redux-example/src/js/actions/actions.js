import { ADD_ARTICLE } from "./actiontypes"
function addArticle(payload)  {
    return { type: addArticle, payload }
}

export { addArticle }