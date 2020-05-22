import React from "react";
import Character from "./Character";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("<Character />", () => {
  it("renders a `listItem` class", () => {
    const wrapper = shallow(<Character />);
    expect(wrapper.find(".listItem")).to.have.lengthOf(1);
  });

  it("renders a `table` class", () => {
    const wrapper = shallow(<Character />);
    expect(wrapper.find(".table")).to.have.lengthOf(1);
  });

  it("renders a character image", () => {
    const wrapper = shallow(<Character />);
    expect(wrapper.find("img")).to.have.lengthOf(1);
  });
});
