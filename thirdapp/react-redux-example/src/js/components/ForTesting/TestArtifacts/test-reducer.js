import {SUCCESS,FAILURE} from "./test-actions"
const initialState = {
    success : false
}

const reducer1 = (state=initialState,action) => {
    switch(action.type){
        case "SUCCESS":
            return {...state,success : true}
            break;
        case "FAILURE" : 
            return{...state,success : false}
            break;
        default:
                return state;
    }
}

export {initialState,reducer1}