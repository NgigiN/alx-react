import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe('App', () => {
  it('renders App component without crashing', () => {
    const component = shallow(<App />);

    expect(component).tobeDefined();
  });
});