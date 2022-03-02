//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();

let timeOfDay = "evening";
let timeOfDayColor = "blue";
let timeOfDayMessage = "Good Evening";

if (currentTime < 12 && currentTime >= 0) {
  timeOfDay = "morning";
  timeOfDayColor = "red";
  timeOfDayMessage = "Good Morning";
} else if (currentTime >= 12 && currentTime <= 18) {
  timeOfDay = "afternoon";
  timeOfDayColor = "green";
  timeOfDayMessage = "Good Afternoon";
}

ReactDOM.render(
  <h1 className="heading" style={{ backgroundColor: timeOfDayColor }}>
    {timeOfDayMessage}
  </h1>,
  document.getElementById("root")
);
