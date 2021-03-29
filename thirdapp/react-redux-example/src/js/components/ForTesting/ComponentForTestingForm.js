import { useState } from "react"

const ComponentForTestingForm = () => {
    const [value, setValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(e.target.inputBox.value);
    }
    return (
        <div>
            <form data-testid="form" onSubmit={handleSubmit}>
                <label htmlFor="inputBox">Input Text:</label>
                <input type="text" id="inputBox" onChange={handleChange}></input>
                <button type="submit">SubmitValue</button>
                <p>Change:{value}</p>
                <p>Submitted Value:{submittedValue}</p>
            </form>
        </div>
    )
}
export default ComponentForTestingForm;