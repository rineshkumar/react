import { useReducer } from "react"
import { FAILURE, SUCCESS } from "../TestArtifacts/test-actions";
import { initialState, reducer1 } from "../TestArtifacts/test-reducer"
const ComponentForTestingReducerHook = () => {
    const [state, dispatch] = useReducer(reducer1, initialState);
    const dispatchSuccessAction = () => {
        dispatch(SUCCESS)
    }
    const dispatchFailureAction = () => {
        dispatch(FAILURE)
    }

    return (<div>
        <div>
            {state.success ?
                <p>success is true</p>
                :
                <p>success is false</p>}
        </div>
        <button onClick={dispatchSuccessAction}>Dispatch Success</button>
    </div>
    )
}

export { ComponentForTestingReducerHook }