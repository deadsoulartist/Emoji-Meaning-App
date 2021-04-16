import React, { useState } from "react";
import "./styles.css";
var emojiDictonary = {
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing"
};

var emojisWeKnow = Object.keys(emojiDictonary);

var headingText = "Emoji Meaning 😎";
var color = "grey";

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our data base ";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={emojiInputHandler}></input>
      <h3> {meaning} </h3>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.7rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
