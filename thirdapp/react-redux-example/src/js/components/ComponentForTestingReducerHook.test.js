import { cleanup, fireEvent, render } from "@testing-library/react"
import { SUCCESS } from "../TestArtifacts/test-actions"
import { reducer1, initialState } from "../TestArtifacts/test-reducer"
import { ComponentForTestingReducerHook } from "./ComponentForTestingReducerHook"


afterEach(cleanup)
describe("Reducer testing", () => {
    it("Should return initial state", () => {
        expect(initialState).toEqual({ success: false })
    })
    it("State should be true ", ()=>{
        expect(reducer1(initialState,SUCCESS)).toEqual({success : true})
    })
    it("CLick button should change state ",()=>{
        const{container,getByText} = render(<ComponentForTestingReducerHook/>);
        expect(getByText(/success is/i).textContent).toBe("success is false");
        fireEvent.click(getByText("Dispatch Success"))
        expect(getByText(/success is/i).textContent).toBe("success is true");
    })
})