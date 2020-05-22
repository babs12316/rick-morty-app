import React from "react";
import Filters from "./Filters";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("<Filters />", () => {
  it("renders a `filter` class", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.find(".filters")).to.have.lengthOf(1);
  });
  it("renders a select box", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.find("select")).to.have.lengthOf(1);
  });

  it("renders 2 input date boxes", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper.find("input")).to.have.lengthOf(2);
  });
});
