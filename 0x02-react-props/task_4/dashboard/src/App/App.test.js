import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe('App', () => {
  it('renders App component without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(false);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
  it("should not render CourseList if logged out", () => {
    const component = shallow(<App />);
    component.setProps({ isLoggedIn: false });
    expect(component.contains(<CourseList />)).toBe(true);
  });
  it("should render CourseList if logged in", () => {
    const component = shallow(<App />);
    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });
});