import { ADD_ARTICLE, DATA_LOADED, DATA_REQUESTED } from "./actiontypes"
const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload }
}

const getData = (dispatch, getState) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json });
        });
}

const getDataUsingSaga = (url) => {
    return { type: DATA_REQUESTED, payload: { url } }
}

export { addArticle, getData, getDataUsingSaga }