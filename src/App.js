import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Tweets from "./components/tweets";

const App = () => {
  const [userId, setUserId] = useState("");
  const [errorState, setErrorState] = useState(false);

  // Handle Twitter ID submission to retrieve tweets
  const onSubmit = (e) => {
    e.preventDefault();
    if (!errorState) {
      console.log(userId);
    }
  };

  // Set userId to the inputted value
  const onChange = (e) => {
    setUserId(e.target.value);
    var alphanumeric = /^[0-9a-zA-Z]+$/;
    if (e.target.value.match(alphanumeric)) {
      setErrorState(false);
    } else {
      setErrorState(true);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="twitterID"
          placeholder="Input Twitter handle here"
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
      {errorState ? (
        <div className="errorMessage">
          There are invalid characters in your input
        </div>
      ) : (
        <div />
      )}

      <div className="tweetlist">
        <Tweets />
      </div>
    </div>
  );
};

export default App;
