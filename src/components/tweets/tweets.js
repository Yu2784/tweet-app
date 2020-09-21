import React from "react";

import { Tweet } from "react-twitter-widgets";

const Tweets = ({ tweetList }) => {
  return (
    <div className="tweet-container" data-testid="tweet-container">
      {tweetList.length > 0 ? (
        tweetList.map((tweet, index) => (
          <Tweet key={index} tweetId={tweet.id_str} />
        ))
      ) : (
        <p>
          No Tweets found, either you have not yet input a twitter ID above or
          there was no results for the ID provided.
        </p>
      )}
    </div>
  );
};

export default Tweets;
