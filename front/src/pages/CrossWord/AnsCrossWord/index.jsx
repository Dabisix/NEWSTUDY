import React, { useCallback, useState } from "react";
import "./style.scss";

import Globe from "assets/user_globe.png";
import WordModal from "../WordModal";

export default function AnsCrossWord({ maxR, maxC, wordArr, crosswordInputs }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const openModal = useCallback(
    (e) => {
      const words = e.target.dataset.word.split(" ");
      const word = words.length > 1 ? words[1] : words[0];
      const wordInfo = wordArr.filter((e) => e.eng.toLowerCase() === word);

      setSelectedWord(wordInfo[0]);
    },
    [wordArr],
  );

  const drawAnsCrossword = useCallback(() => {
    const result = [];
    const crosswordsPos = new Array(maxR);
    const matchingAlgorithm = {};
    const wordSet = new Set();

    for (let i = 0; i < maxR; i++) crosswordsPos[i] = [];

    crosswordInputs.forEach((e) => {
      const wordSplit = e.dataset.word.split(" ");
      wordSet.add(wordSplit.length > 1 ? wordSplit[1] : wordSplit[0]);
      crosswordsPos[parseInt(e.dataset.row)].push(e);
    });

    wordSet.forEach((e) => (matchingAlgorithm[e.toLowerCase()] = 0));

    const makeAnsCol = (row) => {
      const columns = [];

      for (let i = 0; i < maxC; i++) {
        let innerText = "";
        let dataWord = "";
        const curRowPos = crosswordsPos[row]; //row행에 있는 모든 input

        //row행에 있는 input들 다 조회
        for (let j = 0; j < curRowPos.length; j++) {
          if (parseInt(curRowPos[j].dataset.col) === i) {
            dataWord = curRowPos[j].dataset.word.toLowerCase();
            const curWord = curRowPos[j].dataset.word.split(" "); //row행 j열의 input의 data-word

            for (let k = 0; k < curWord.length; k++) {
              innerText = curWord[k]
                .toLowerCase()
                .charAt(matchingAlgorithm[curWord[k].toLowerCase()]);
              matchingAlgorithm[curWord[k].toLowerCase()]++;
            }
          }
        }

        columns.push(
          <div
            className={`anscrossword-col ${innerText === "" ? "" : "value"}`}
            key={i}
            data-word={dataWord}
            onClick={openModal}
          >
            {innerText}
          </div>,
        );
      }

      return columns;
    };

    for (let i = 0; i < maxR; i++) {
      result.push(
        <div className="anscrossword-row" key={i}>
          {makeAnsCol(i)}
        </div>,
      );
    }

    return result;
  }, [maxR, maxC, openModal]);

  return (
    <section className="crossword-game-section">
      <h1 className="crossword-game-title">
        <b>ANSWER</b> &nbsp;
        <img
          src={Globe}
          className="crossword-title-globe"
          alt="제목 옆 지구본"
        />
      </h1>
      <div className="crossword-game-field">{drawAnsCrossword()}</div>
      {selectedWord && (
        <WordModal wordInfo={selectedWord} setSelectedWord={setSelectedWord} />
      )}
    </section>
  );
}
