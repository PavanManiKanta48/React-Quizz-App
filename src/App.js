import Questions from "./Questions.json";
import "./App.css";
import Display from "./Display";
import React, { useState } from "react";
import Model from "./Model";

function App() {
  const [marks, setMarks] = useState([]);
  let tempMarks = [];
  const changeHandler = (value, index) => {
    tempMarks = marks;
    tempMarks[index] = value;
    setMarks([...tempMarks]);
  };
  return (
    <div>
      <center>
        {Questions.map((question, index) => {
          return (
            <Display
              question={question}
              index={index}
              changeHandler={changeHandler}
            />
          );
        })}
        <Model marks={marks} />
      </center>
    </div>
  );
}

export default App;
