import React from "react";
import { mount } from "enzyme";
import Navbar from "../components/navbar/navbar";

const wrapper = mount(<Navbar />);

describe("Navbar component tests", () => {
  test("Should render without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  test("renders title correctly", () => {
    const mockTitle = "Tweeter";
    const component = mount(<Navbar title={mockTitle} />);
    expect(component.find("h1").text()).toEqual(mockTitle);
  });

  test("renders title correctly", () => {
    const mockTitle = "Get Tweets";
    const component = mount(<Navbar title={mockTitle} />);
    expect(component.find("h1").text()).toEqual(mockTitle);
  });
});
