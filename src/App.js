import React, { useState, useEffect } from "react";
import "./index.css";
const text = `The Taj Mahal   is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan   to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.

Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects led by Ustad Ahmad Lahori, the emperors court architect. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.

The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage". It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts more than 6 million visitors a year[3] and in 2007, it was declared a winner of the New 7 Wonders of the World  initiative.`;

export default function App() {
  const [matchedTextCount, setMatchedTextCount] = useState(0);
  const [searchedText, setSearchedText] = useState("");

  const parts = text.split(new RegExp(`(${searchedText})`, "gi"));
  useEffect(() => {
    if (searchedText == "") return;
    const parts = text.split(new RegExp(`(${searchedText})`, "gi"));
    const count = parts.filter(
      (part) => part.toLowerCase() === searchedText.toLowerCase()
    ).length;
    setMatchedTextCount(count);
  }, [searchedText]);
  const handleBtnClick=()=>{
    alert("working on it")
  }
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

      <div>
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
      <div>
        <button onClick={handleBtnClick}> find </button>
        <button onClick={handleBtnClick}> find Next </button>
        <button onClick={handleBtnClick}> Add </button>
        <button onClick={handleBtnClick}> Replace </button>
        <button onClick={handleBtnClick}> Replace All </button> 
      </div>
    </div>
  );
}
