import { useState } from "react"
import ComponentForTestingUseStateHook from "./ComponentForTestingUseStateHook"

const ParentComponent = () => {
    const [userName, setUserName] = useState("Rinesh")
    const changeName = () => {
        setUserName("Steve")
    }
    return (
        <div>
            <ComponentForTestingUseStateHook name={userName} changeName={changeName} />
        </div>
    )
}

export default ParentComponent