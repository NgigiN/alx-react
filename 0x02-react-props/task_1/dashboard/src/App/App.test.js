import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

describe('App', () => {
  it('renders App component without crashing', () => {
    const component = shallow(<App />);

    expect(component).tobeDefined();
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
    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
});