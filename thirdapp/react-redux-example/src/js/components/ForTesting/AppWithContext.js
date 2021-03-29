import { useState } from "react"
import ComponentToTestUseContext from "./ComponentToTestUseContext";
import context from "./Context";

const AppWithContext = () => {
    const [state, setState] = useState("Initial Text");
    const changeText = () => {
        setState("Final Text");
    }
    return (
        <div>
            <context.Provider value={{value : state, changeValue : changeText}}>
                <ComponentToTestUseContext/>
            </context.Provider>
        </div>
    )
}

export default AppWithContext