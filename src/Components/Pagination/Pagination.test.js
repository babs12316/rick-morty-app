import React from "react";
import Pagination from "./Pagination";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("<Pagination/>", () => {
  it("renders previous and next button", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find("button")).to.have.lengthOf(2);
  });
});
