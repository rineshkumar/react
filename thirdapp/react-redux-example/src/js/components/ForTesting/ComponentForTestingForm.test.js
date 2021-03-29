import { fireEvent, render } from "@testing-library/react";

import ComponentForTestinForm from "./ComponentForTestingForm"
it("Change in text box value changes state ", () => {
    const { getByText, getByLabelText } = render(<ComponentForTestinForm />)
    expect(getByText(/Change:/i).textContent).toBe("Change:")
    fireEvent.change(getByLabelText("Input Text:"), { target: { value: "Hello" } })
    expect(getByText(/Change:/i).textContent).toBe("Change:Hello")
})
it("Checking form submission", () => {
    const { getByTestId, getByText } = render(<ComponentForTestinForm />)
    expect(getByText(/Submitted/i).textContent).toBe("Submitted Value:")
    fireEvent.submit(getByTestId("form"), { target: { inputBox: { value: "Hello" } } })
    expect(getByText(/Submitted/i).textContent).toBe("Submitted Value:Hello")
})