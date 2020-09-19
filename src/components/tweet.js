import React from "react";

const Tweet = ({ id, content, link }) => {
  return (
    <div id={id}>
      <p>{content}</p>
      <a href={link} target="_blank">
        Link to Tweet
      </a>
    </div>
  );
};

export default Tweet;
