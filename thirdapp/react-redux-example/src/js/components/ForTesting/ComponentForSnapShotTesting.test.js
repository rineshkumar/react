
import React from "react"
import ComponentForSnapShotTesting from "./ComponentForSnapShotTesting"
import '@testing-library/jest-dom';
import Enzyme, { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
Enzyme.configure({ adapter: new Adapter() })
it("Testing the basic component", () => {
    const wrapper = shallow(<ComponentForSnapShotTesting />)
    expect(toJson(wrapper)).toMatchSnapshot()
})