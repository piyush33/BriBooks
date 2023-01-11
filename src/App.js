import logo from "./logo.svg";
import cartoon1 from "./images/cartoon1.webp";
import cartoon2 from "./images/cartoon2.webp";
import cartoon3 from "./images/cartoon3.jpeg";
import cartoon4 from "./images/cartoon4.png";
import cartoon5 from "./images/cartoon5.jpeg";
import cartoon6 from "./images/cartoon6.png";

import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import "./App.css";

function App() {
  const [picture, setPicture] = useState();
  const [page, setPage] = useState([]);
  const [counter, setCounter] = useState(0);

  function handleClick(item) {
    setPicture(item);
  }

  function handleButtonClick(item) {
    setPage((prev) => [item, ...prev]);
    setCounter(counter + 1);
  }

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="App">
      <div className="sidebarLeft">
        <div className="pagePicture">
          {page.map((i, key) => (
            <>
              <img className="pageCardPicture" src={i} />
              <div className="key"> {key + 1} </div>
            </>
          ))}
        </div>
      </div>
      <div className="mainBody">
        <div className="picker-container">
          <input className="input-style" value={inputStr} onChange={(e) => setInputStr(e.target.value)} />
          <img
            className="emoji-icon"
            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
            onClick={() => setShowPicker((val) => !val)}
          />
          {showPicker && <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />}
        </div>
        <div className="mainPicture">
          <img className="mainCardPicture" src={picture} />
        </div>
        <div className="buttonNew">
          <button onClick={() => handleButtonClick(picture)} className="button">
            Add new page
          </button>
        </div>
      </div>
      <div className="sidebarRight">
        <div className="photos">
          <img className="cardImage" onClick={() => handleClick(cartoon1)} src={cartoon1} />
        </div>
        <div className="photos">
          <img className="cardImage" onClick={() => handleClick(cartoon2)} src={cartoon2} />
        </div>
        <div className="photos">
          <img className="cardImage" onClick={() => handleClick(cartoon3)} src={cartoon3} />
        </div>
        <div className="photos">
          <img className="cardImage" onClick={() => handleClick(cartoon4)} src={cartoon4} />
        </div>
        <div className="photos">
          <img className="cardImage" onClick={() => handleClick(cartoon5)} src={cartoon5} />
        </div>
        <div className="photos">
          <img className="cardImage" onClick={() => handleClick(cartoon6)} src={cartoon6} />
        </div>
      </div>
    </div>
  );
}

export default App;
