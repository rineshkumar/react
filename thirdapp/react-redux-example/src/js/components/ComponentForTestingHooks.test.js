import { cleanup, fireEvent, render } from "@testing-library/react"
import ComponentForTestingHooks from "./ComponentForTestingHooks"
import ParentComponent from "./ParentComponent";


afterEach(cleanup)

it("Testing hooks ", () => {
    const { getByText } = render(<ComponentForTestingHooks />);
    expect(getByText(/Initial/i).textContent).toBe("Initial State")
    fireEvent.click(getByText("State Change Button"))
    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
})

it("Testing props ", () => {
    const { getByText } = render(
        <ParentComponent>
            <ComponentForTestingHooks />
        </ParentComponent>);
    expect(getByText(/Rinesh/i).textContent).toBe("Rinesh")
    fireEvent.click(getByText("Change Name"));
    expect(getByText(/Steve/i).textContent).toBe("Steve")
})