import React from "react";
import CharacterList from "./CharacterList";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("<CharacterList />", () => {
  it("renders a `list` class", () => {
    const wrapper = shallow(<CharacterList />);
    expect(wrapper.find(".list")).to.have.lengthOf(1);
  });
});
