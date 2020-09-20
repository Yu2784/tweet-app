import React from "react";

import { Tweet } from "react-twitter-widgets";

const Tweets = ({ tweetList }) => {
  if (tweetList.length > 0) {
    return (
      <div className="tweet-container">
        {tweetList.map((tweet, index) => (
          <Tweet key={index} tweetId={tweet.id_str} />
        ))}
      </div>
    );
  }
};

export default Tweets;
