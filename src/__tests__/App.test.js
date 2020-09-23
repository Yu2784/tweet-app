import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";

describe("Main component tests", () => {
  test("Should render without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper.length).toBe(1);
  });
});

describe("Navbar component tests", () => {
  test("renders navbar correctly", () => {
    const wrapper = mount(<App />);
    const navbar = wrapper.find("nav");
    expect(navbar.length).toBe(1);
  });
});

describe("Form component tests", () => {
  test("renders Form correctly", () => {
    const wrapper = mount(<App />);
    const form = wrapper.find("Form");
    expect(form.length).toBe(1);
  });
});

describe("Tweet component tests", () => {
  test("Should render without crashing (no tweets)", () => {
    const wrapper = mount(<App />);
    const tweet = wrapper.find("Tweet");
    expect(tweet.length).toBe(0);
    expect(wrapper.length).toBe(1);
  });
});
