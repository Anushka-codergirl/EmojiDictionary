import React, { useState } from "react";
import "./style.css";

export default function App() {
  var emojiDictionary = {
    "😥": "Sad",
    "😄": "Happy",
    "🧐": "Face with Monocle",
    "😍": "Love",
    "😴": "Sleepy",
    "💔": "Broken Heart",
    "💚": "Green Heart",
    "💜": "Purple Heart",
    "🖤": "Black Heart",
    "🤍": "White Heart",
    "❤️": "Red Heart",
    "🧡": "Orange Heart",
    "💙": "Blue Heart",
    "😕": "Confused ",
    "🥳": "Partying Face",
    "🧠": "Brain",
    "👃": "Nose",
    "🤝": "Handshake"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "No data found!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <div
            className="box"
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
