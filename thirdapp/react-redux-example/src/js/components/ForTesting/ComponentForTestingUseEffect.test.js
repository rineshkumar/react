import { cleanup, waitFor, waitForElement } from "@testing-library/react";
import axiosMock from "axios"

import { render } from "@testing-library/react"
import ComponentForTestingUseEffect from "./ComponentForTestingUseEffect"
afterEach(cleanup)
it("testing use effect ", async () => {
    axiosMock.get.mockResolvedValue({ data: { title: "Mock Title" } })
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const { getByText, getByTestId, rerender } = render(<ComponentForTestingUseEffect url={url} />);
    expect(getByText(/Loading.../i).textContent).toBe("Loading...")
    const element = await waitForElement(() => getByTestId("title"));
    expect(element.textContent).toBe("Mock Title");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});