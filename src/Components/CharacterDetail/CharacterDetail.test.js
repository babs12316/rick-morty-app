import React from "react";
import CharacterDetail from "./CharacterDetail";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("<CharacterDetail />", () => {
  const match = { params: { id: "1" } };
  it("renders title", () => {
    const wrapper = shallow(<CharacterDetail match={match} />);
    expect(wrapper.find("h2")).to.have.lengthOf(1);
  });

  it("renders a `table` class", () => {
    const wrapper = shallow(<CharacterDetail match={match} />);
    expect(wrapper.find(".table")).to.have.lengthOf(1);
  });
});
