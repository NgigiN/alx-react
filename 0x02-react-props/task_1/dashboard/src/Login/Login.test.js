import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe('Login', () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toEqual(true);
	});
	it("should have 2 input tags and 2 label tags", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find("input")).toHaveLength(2);
		expect(wrapper.find("label")).toHaveLength(2);
	});
});