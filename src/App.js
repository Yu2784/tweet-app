import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import Tweets from "./components/tweets/tweets";

const App = () => {
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    err: false,
    message: "",
  });
  const [tweetList, setTweetList] = useState([]);

  // Handle Twitter ID submission to retrieve tweets
  const onSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage.err) {
      setTweetList([]);
      updateTwitterId(userId);
    }
  };

  // Set userId to the inputted value
  const onChange = (e) => {
    setUserId(e.target.value);
    var alphanumeric = /^[0-9a-zA-Z]+$/;
    if (e.target.value.match(alphanumeric)) {
      setErrorMessage({
        err: false,
        message: "",
      });
    } else if (e.target.value === "") {
      setErrorMessage({
        err: false,
        message: "",
      });
    } else {
      setErrorMessage({
        err: true,
        message: "There are invalid characters in your input",
      });
    }
  };

  const updateTwitterId = (twitterId) => {
    axios
      .post("/updateTwitterId", {
        twitterId: twitterId,
      })
      .catch((error) => {
        setErrorMessage({
          err: true,
          message: "Technical Error",
        });
      });
  };

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000/");

    socket.on("connect", () => {
      socket.on("tweetsList", (tweets) => {
        if (tweets !== null) {
          setTweetList(tweets);
          return;
        } else {
          return;
        }
      });
    });
    socket.on("disconnect", () => {
      socket.off("tweetsList");
      socket.removeAllListeners("tweetsList");
    });
  }, []);

  return (
    <div className="main-container">
      <Navbar title="Tweet App" />
      <form className="input-container" onSubmit={(e) => onSubmit(e)}>
        <h3>
          Input Twitter ID:{" "}
          <input type="text" name="twitterID" onChange={(e) => onChange(e)} />
          <input type="submit" value="Submit" />
        </h3>
      </form>
      {errorMessage.err ? (
        <div className="errorMessage">{errorMessage.message}</div>
      ) : (
        <div />
      )}

      <Tweets tweetList={tweetList} />
    </div>
  );
};

export default App;
