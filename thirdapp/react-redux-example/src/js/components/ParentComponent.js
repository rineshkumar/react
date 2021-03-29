import { useState } from "react"
import ComponentForTestingHooks from "./ComponentForTestingHooks"

const ParentComponent = () => {
    const [userName, setUserName] = useState("Rinesh")
    const changeName = () => {
        setUserName("Steve")
    }
    return (
        <div>
            <ComponentForTestingHooks name={userName} changeName={changeName} />
        </div>
    )
}

export default ParentComponent