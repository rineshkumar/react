import { render,cleanup, fireEvent } from "@testing-library/react"
import AppWithContext from "./AppWithContext"
import ComponentToTestUseContext from "./ComponentToTestUseContext"
import context from "./Context"

afterEach(cleanup)


it("",()=>{
    const {container,getByText} = render(
        <AppWithContext>
            <context.Provider>
                <ComponentToTestUseContext/>
            </context.Provider>
        </AppWithContext>
    )
    //expect(getByText(/Initial/i).textContent).toBe("Initial Text")
    expect(getByText(/Initial/i).textContent).toBe("Initial Text")
    fireEvent.click(getByText("Change Text"))
    expect(getByText(/Final/i).textContent).toBe("Final Text")
})