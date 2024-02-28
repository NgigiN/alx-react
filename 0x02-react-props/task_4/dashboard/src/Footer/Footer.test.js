import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe('Footer', () => {
	it("should render with no crushing", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toEqual(true);
	});
	it("should render the correct text", () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
	});
});