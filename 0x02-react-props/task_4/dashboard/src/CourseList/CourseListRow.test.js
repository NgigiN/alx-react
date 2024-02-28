import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("test for both components rendering", () => {
	it("should render without crashing", () => {
		const wrapper = shallow(<CourseListRow textFirstCell={"test"} />);
		expect(wrapper.exists()).toBe(true);
	});
	it("renders once cell with colspan = 2 when textSecondCell does not exist", () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={"test"} textSecondCell={null} />);
		expect(wrapper.find("tr").children()).toHaveLength(1);
		expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">test</th>');
	});

	it("should render both are preset", () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
		expect(wrapper.find("tr").children()).toHaveLength(2);
		expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
		expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
	});
});
