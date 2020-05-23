import React from "react";
import TopNav from "./TopNav";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("<TopNav />", () => {
  it("renders `topNav` class", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find(".topNav")).to.have.lengthOf(1);
  });
  it("renders Home link", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find("a")).to.have.lengthOf(1);
  });
});
