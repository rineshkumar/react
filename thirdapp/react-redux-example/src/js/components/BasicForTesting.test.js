
import React from "react"
import Basic from "./BasicForTesting"
import '@testing-library/jest-dom';
import Enzyme, { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })
it("Testing the basic component", () => {
    const wrapper = shallow(<Basic />)
    expect(toJson(wrapper)).toMatchSnapshot()
})