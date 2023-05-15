import React, { useState, useEffect } from "react";
import "./index.css";
const text =
  "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.";

export default function App() {
  const [matchedTextCount, setMatchedTextCount] = useState(0);
  const [searchedText, setSearchedText] = useState("");

  const parts = text.split(new RegExp(`(${searchedText})`, "gi"));
  useEffect(() => {
    if(searchedText=="") return
    const parts = text.split(new RegExp(`(${searchedText})`, "gi"));
    const count = parts.filter(
      (part) => part.toLowerCase() === searchedText.toLowerCase()
    ).length;
    setMatchedTextCount(count);
  }, [searchedText]);
  return (
    <div>
      <div className="search-container">
        <label for="search">Search within quoted text</label>
        <input
          id="search"
          placeholder="Type `web` for example"
          type="search"
          onChange={(e) => {
            const { value } = e.target;
            setSearchedText(value);
          }}
          autocomplete="off"
        />
      </div>
      <div>
        matched Text Count : {matchedTextCount}
        <br />
        <br />
      </div>

      <span>
        {" "}
        {parts.map((part, i) => {
          if (part.toLowerCase() === searchedText.toLowerCase()) {
            return (
              <span key={i} style={{ color: "red" }}>
                {part}
              </span>
            );
          } else {
            return <span key={i}>{part}</span>;
          }
        })}{" "}
      </span>
    </div>
  );
}
