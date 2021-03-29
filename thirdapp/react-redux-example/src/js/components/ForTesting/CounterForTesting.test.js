

import CounterForTesting from "./CounterForTesting"
import Enzyme, { mount } from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })
it("Mount for unit testing ", () => {
    const mountedComponent = mount(<CounterForTesting />)
    expect(mountedComponent.instance().state.count).toBe(0)
    mountedComponent.instance().increment();
    expect(mountedComponent.instance().state.count).toBe(1);
})