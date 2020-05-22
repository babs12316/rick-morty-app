import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("renders a `.container` class", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".container")).to.have.lengthOf(1);
  });
  it("renders app title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h2>Rick Morty App</h2>)).to.equal(true);
  });
});
