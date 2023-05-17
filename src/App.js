import React, { useState, useEffect } from "react";
import "./index.css";
const initialParagraph = [
  "The Taj Mahal   is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan   to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",

  "Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects led by Ustad Ahmad Lahori, the emperors court architect. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.",

  "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts more than 6 million visitors a year[3] and in 2007, it was declared a winner of the New 7 Wonders of the World  initiative.",
];

export default function App() {
  const [matchedTextCount, setMatchedTextCount] = useState(-1);
  const [searchedText, setSearchedText] = useState("");
  const [inputsearchedText, setinputsearchedText] = useState("");
  const [paragraphs, setParagraphs] = useState(initialParagraph);
  const [addNewParagraph, setAddNewParagraph] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [activeCount, setActiveCount] = useState(-1);
  const evaluatedParts = paragraphs.map((text) => {
    // return text.split(new RegExp(`(${searchedText})`, "gi"));
    return text.split(" ");
  });

  console.log("evaluatedPartsevaluatedParts", evaluatedParts);
  //
  useEffect(() => {
    if (searchedText == "" || searchedText == " " || searchedText == "  ")
      return;
    let count = -1;
    evaluatedParts.forEach((parts) => {
      count += parts.filter(
        (part, index) =>
          searchedText !== "" &&
          searchedText !== " " &&
          part.toLowerCase() == searchedText.toLowerCase()
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
  let count = -1;
  useEffect(() => {
    console.log("activeCountactiveCount", activeCount);
  }, [activeCount]);

  const handleTheReplace = () => {
    const evaluatedParts = paragraphs.map((text) => {
      // return text.split(new RegExp(`(${searchedText})`, "gi"));
      return text.split(" ");
    });
    let count = -1;
    const newEvaluatedParts = evaluatedParts.map((parts) => {
      const str = parts.map((part, index) => {
        if (part.toLowerCase() == searchedText.toLowerCase()) count++;
        console.log("partphaauhaupart", activeCount, count, part, searchedText);
        if (
          searchedText !== "" &&
          searchedText !== " " &&
          activeCount == count
        ) {
          count++;
          console.log(
            "dabcjkabchfkdav",
            activeCount,
            count,
            activeCount == count
          );
          return replaceText;
        } else {
          return part;
        }
      });
      return str.join(" ");
    });
    setParagraphs(newEvaluatedParts);
    console.log("evaluahahahtedParts", newEvaluatedParts);
  };
  const handleTheReplaceAll = () => {
    const evaluatedParts = paragraphs.map((text) => {
      // return text.split(new RegExp(`(${searchedText})`, "gi"));
      return text.split(" ");
    });
    let count = -1;
    const newEvaluatedParts = evaluatedParts.map((parts) => {
      const str = parts.map((part, index) => {
        if (
          searchedText !== "" &&
          searchedText !== " " &&
          part.toLowerCase() == searchedText.toLowerCase()
        ) {
          return replaceText;
        } else {
          return part;
        }
      });
      return str.join(" ");
    });
    setParagraphs(newEvaluatedParts);
    console.log("evaluahahahtedParts", newEvaluatedParts);
  };
  console.log("activeCountactiveCount",activeCount)
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
                setActiveCount(-1);
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
        {/* matched Text Count : {matchedTextCount+1} */}
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
                part.toLowerCase() == searchedText.toLowerCase()
              ) {
                count++;
                console.log(
                  "dabcjkabchfkdav",
                  activeCount,
                  count,
                  activeCount == count
                );
                return (
                  <span
                    key={index}
                    style={{
                      background: activeCount == count ? "#2d80b5" : "red",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
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
        <button
          style={{
            color: "white",
            background: "#087f5b",
            // #4fb8b6
          }}
          onClick={(e) => {
            e.preventDefault();
            if (!searchedText) return;
            if (activeCount < matchedTextCount) {
              setActiveCount((prev) => prev + 1);
            } else {
              setActiveCount(0);
            }
          }}
        >
          {" "}
          find Next{" "}
        </button>

        <button
          style={{
            color: "white",
            background: "#364fc7",
            // #4fb8b6
          }}
          onClick={(e) => {
            e.preventDefault();
            if (!searchedText) return;
            if (activeCount <= 0) {
              setActiveCount(matchedTextCount);
            } else {
              setActiveCount((prev) => prev - 1);
            }
          }}
        >
          {" "}
          find prev{" "}
        </button>
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
        <button
          style={{
            color: "white",
            background: "#d9480f",
          }}
          // onClick={handleTheReplace}
          onClick={(e) => {
            e.preventDefault();
            if (!searchedText && activeCount!==-1) {return alert("please search something and find the value by next")};
        //  if()
            handleTheReplace();
          }}
        >
          {" "}
          Replace{" "}
        </button>
        <button
          style={{
            color: "white",
            background: "#c92a2a",
          }}
          // onClick={handleTheReplaceAll}
          onClick={(e) => {
            e.preventDefault();
            if (!searchedText && activeCount!==-1) {return alert("please search something and find the value by next")};
            handleTheReplaceAll();
          }}
        >
          {" "}
          Replace All{" "}
        </button>
      </div>
      <div>
        <label for="replace">enter the text</label>
        <input
          id="replace"
          placeholder="enter the text"
          type="replace"
          value={replaceText}
          onChange={(e) => {
            const { value } = e.target;
            setReplaceText(value);
          }}
          autocomplete="off"
        />
      </div>
    </div>
  );
}
