import React from "react";
import { mount } from "enzyme";
import Tweets from "../components/tweets/tweets";

describe("Tweet component tests", () => {
  test("Should render without crashing (no tweets)", () => {
    const wrapper = mount(<Tweets tweetList={[]} />);
    const tweet = wrapper.find("Tweet");
    expect(tweet.length).toBe(0);
    expect(wrapper.length).toBe(1);
  });

  test("renders text if no tweets are found", () => {
    const wrapper = mount(<Tweets tweetList={[]} />);
    expect(wrapper.find("p").text()).toBe(
      "No Tweets found, either you have not yet input a twitter ID above or there was no results for the ID provided."
    );
  });

  test("render Tweet when id is provided", () => {
    const mockList = [{ id_str: 1294917318405836802 }];
    const wrapper = mount(<Tweets tweetList={mockList} />);
    const tweet = wrapper.find("Tweet");
    expect(tweet.length).toBe(1);
  });
});
