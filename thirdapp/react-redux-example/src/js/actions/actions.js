import { ADD_ARTICLE } from "./actiontypes"
const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload }
}

const getData = () => {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json)
        .then(json => {
            dispatch({type : "DATA_LOADED", payload: json})
        })
    }
}

export { addArticle , getData}