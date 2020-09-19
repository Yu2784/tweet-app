import React, { useEffect } from "react";
import Tweet from "./tweet";

const Tweets = () => {
  // useEffect(() => {
  //   getTweets();
  // }, [getTweets]);

  return (
    <div>
      <div className="tweets">
        <Tweet
          link="https://www.google.com"
          content="testing"
          id="1231d2ed12e"
        />
      </div>
    </div>
  );
};

export default Tweets;
