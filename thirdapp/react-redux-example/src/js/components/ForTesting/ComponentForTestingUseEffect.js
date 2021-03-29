import { useEffect, useState } from "react"
import axios from 'axios';
const ComponentForTestingUseEffect = (props) => {
    const [state, setState] = useState()

    useEffect(() => {
        axios.get(props.url)
            .then(res => setState(res.data))
    }, [])
    return (
        <div>
            <p>testing use effect </p>
            {state
                ?
                <p data-testid="title">{state.title}</p>
                : <p>Loading...</p>
            }
        </div>
    )
}

export default ComponentForTestingUseEffect;