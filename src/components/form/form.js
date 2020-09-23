import React from "react";

const Form = ({ onSubmit, onChange }) => {
  return (
    <form className="input-container" onSubmit={(e) => onSubmit(e)}>
      <h3>
        Input Twitter ID:{" "}
        <input type="text" name="twitterID" onChange={(e) => onChange(e)} />
        <button type="submit">Submit</button>
      </h3>
    </form>
  );
};

export default Form;
