import React, { useState, useEffect } from "react";
import "./index.css";
const initialParagraph = [
  "The Taj Mahal   is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan   to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",

  "Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects led by Ustad Ahmad Lahori, the emperors court architect. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.",

  "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts more than 6 million visitors a year[3] and in 2007, it was declared a winner of the New 7 Wonders of the World  initiative.",
];

export default function App() {
  const [matchedTextCount, setMatchedTextCount] = useState(0);
  const [searchedText, setSearchedText] = useState("");
  const [inputsearchedText, setinputsearchedText] = useState("");
  const [paragraphs, setParagraphs] = useState(initialParagraph);
  const [addNewParagraph, setAddNewParagraph] = useState("");
  const evaluatedParts = paragraphs.map((text) => {
    // return text.split(new RegExp(`(${searchedText})`, "gi"));
    return text.split(" ");
  });

  console.log("evaluatedPartsevaluatedParts", evaluatedParts);
  //
  useEffect(() => {
    if (searchedText == "" || searchedText == " " || searchedText == "  ")
      return;
    let count = 0;
    evaluatedParts.forEach((parts) => {
      count += parts.filter(
        (part, index) =>
          searchedText !== "" &&
          searchedText !== " " &&
          part.toLowerCase().includes(searchedText.toLowerCase())
      ).length;
    });
    setMatchedTextCount(count);
  }, [searchedText]);
  const handleBtnClick = () => {
    alert("working on it");
  };

  const searchHandler = () => {
    setSearchedText(inputsearchedText);
  };

  return (
    <div>
      <div className="search-container">
        <div>
          <label for="search">Search within quoted text</label>
          <input
            id="search"
            placeholder="Type `web` for example"
            type="search"
            onChange={(e) => {
              const { value } = e.target;
              if (value == "" || value == " ") {
                setSearchedText("");
                setMatchedTextCount(0);
              }
              setinputsearchedText(value);
            }}
            autocomplete="off"
          />
        </div>
        <div>
          <label for="addedNewText">Add New Text within quoted text</label>
          <input
            id="addedNewText"
            placeholder="Add New paragraph"
            type="addedNewText"
            value={addNewParagraph}
            onChange={(e) => {
              const { value } = e.target;
              setAddNewParagraph(value);
            }}
            autocomplete="off"
          />
        </div>
      </div>

      <div>
        matched Text Count : {matchedTextCount}
        <br />
        <br />
      </div>

      <div>
        <span>
          {evaluatedParts.map((parts) => {
            const str = parts.map((part, index) => {
              console.log("partpartpartpartpartpartpart", part, searchedText);
              if (
                searchedText !== "" &&
                searchedText !== " " &&
                part.toLowerCase().includes(searchedText.toLowerCase())
              ) {
                return (
                  <span key={index} style={{ color: "red" }}>
                    {part}{" "}
                  </span>
                );
              } else {
                return <span key={index}>{part} </span>;
              }
            });
            return <div className="paragraphContainer">{str}</div>;
          })}
        </span>
      </div>
      <div>
        <button
          style={{
            color: "white",
            background: "#2d80b5",
            // #4fb8b6
          }}
          onClick={searchHandler}
        >
          {" "}
          find{" "}
        </button>
        <button onClick={handleBtnClick}> find Next </button>
        <button
          style={{
            color: "white",
            background: "#4fb8b6",
          }}
          onClick={(e) => {
            e.preventDefault();
            if (addNewParagraph.length > 15) {
              setParagraphs((prev) => [...prev, addNewParagraph]);
            } else {
              alert("paragraph must be min 15 charectors");
            }
            setAddNewParagraph("");
          }}
        >
          {" "}
          Add{" "}
        </button>
        <button onClick={handleBtnClick}> Replace </button>
        <button onClick={handleBtnClick}> Replace All </button>
      </div>
    </div>
  );
}
