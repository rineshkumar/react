import { useContext } from "react"
import context from "./Context"

const ComponentToTestUseContext = () => {
    const testContext = useContext(context);
    return (
        <div>
            <button onClick={testContext.changeValue}>Change Text</button>
            <p>{testContext.value}</p>
        </div>
    )
}

export default ComponentToTestUseContext