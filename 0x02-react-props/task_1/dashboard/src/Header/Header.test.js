import Header from "./Header";
import { shallow } from "enzyme";
import React from "react";

describe('Header', () => {
	it('renders Header component without crashing', () => {
		const component = shallow(<Header />);

		expect(component.exists()).toEqual(true);
	});
	it("should render h1", () => {
		const component = shallow(<Header />);
		expect(wrapper.exists("img")).toEqual(true);
		expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
	});
});
