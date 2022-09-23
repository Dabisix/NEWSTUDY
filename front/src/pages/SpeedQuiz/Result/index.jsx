import React, { useState, useCallback } from "react";

import "./style.scss";
import Right from "assets/right.png";
import Wrong from "assets/wrong.png";
import WordModal from "../WordModal";

export default function Result({ answer }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const onResultColClick = useCallback((word) => {
    setSelectedWord(word);
  }, []);

  return (
    <div className="speedquiz-result-container">
      <h1 className="speedquiz-result-title">GAME SCORE</h1>
      <span className="speedquiz-result-circle">
        <b>{answer.filter((e) => e.correct).length}</b>&nbsp;/&nbsp;10
      </span>
      <article className="speedquiz-result-list">
        <div className="speedquiz-result-row">
          {answer.slice(0, 5).map((e, i) => (
            <div
              className={`speedquiz-result-col ${
                e.correct ? "right" : "wrong"
              }`}
              key={i}
              onClick={() => onResultColClick(e)}
            >
              {e.correct ? (
                <img
                  src={Right}
                  alt="정답 이미지"
                  className="result-col-mark"
                />
              ) : (
                <img
                  src={Wrong}
                  alt="틀린 이미지"
                  className="result-col-mark"
                />
              )}
              {e.user.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="speedquiz-result-row">
          {answer.slice(5, 10).map((e, i) => (
            <div
              className={`speedquiz-result-col ${
                e.correct ? "right" : "wrong"
              }`}
              key={i}
              onClick={() => onResultColClick(e)}
            >
              {e.correct ? (
                <img
                  src={Right}
                  alt="정답 이미지"
                  className="result-col-mark"
                />
              ) : (
                <img
                  src={Wrong}
                  alt="틀린 이미지"
                  className="result-col-mark"
                />
              )}
              {e.user.toUpperCase()}
            </div>
          ))}
        </div>
      </article>
      {selectedWord && (
        <WordModal info={selectedWord} setSelectedModal={setSelectedWord} />
      )}
    </div>
  );
}
