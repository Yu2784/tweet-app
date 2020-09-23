import React from "react";
import { mount } from "enzyme";
import Form from "../components/form/form";

describe("Form component tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should render without crashing", () => {
    const wrapper = mount(<Form />);
    expect(wrapper.length).toBe(1);
  });

  test("renders text input correctly", () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find('[type="text"]');
    expect(input).toHaveLength(1);
    expect(input.prop("name")).toEqual("twitterID");
  });

  test("renders submit button correctly", () => {
    const wrapper = mount(<Form />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);
    expect(button.prop("type")).toEqual("submit");
    expect(button.text()).toEqual("Submit");
  });

  test("handle text Input correctly", () => {
    const testId = {
      value: "TestingId",
    };
    const onChange = jest.fn().mockImplementation((data) => data);
    const wrapper = mount(<Form onChange={onChange} />);
    const input = wrapper.find('[type="text"]');
    input.simulate("change", {
      preventDefault: () => {},
      target: testId,
    });
    expect(onChange.mock.calls[0][0].target).toBe(testId);
  });

  test("handle submit correctly", () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<Form form="test" onSubmit={onSubmit} />);
    wrapper.find("form").simulate("submit");
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
