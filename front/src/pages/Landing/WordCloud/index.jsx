import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useState } from "react";

export default function Wordcloud({ wordRanking }) {
  const [words, setWords] = useState([]);

  const matchWordType = () => {
    setWords(
      wordRanking.map((word) => {
        return {
          text: word.eng,
          category: word.c_id,
          value: word.cnt,
        };
      }),
    );
  };

  useEffect(() => {
    matchWordType();
  }, [wordRanking]);

  const isMobile = useMediaQuery({
    query: "(max-width:480px)",
  });
  const options = {
    deterministic: false,
    rotations: 2,
    rotationAngles: [0, 0],
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSizes: [10, 50],
    padding: 3,
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };
  const size = [650, 350];
  const mobileSize = [350, 350];
  const mobileOptions = {
    deterministic: false,
    rotations: 2,
    rotationAngles: [0, 0],
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSizes: [10, 30],
    padding: 3,
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };
  return (
    <>
      {!isMobile ? (
        <ReactWordcloud words={words} options={options} size={size} />
      ) : (
        <ReactWordcloud
          words={words}
          options={mobileOptions}
          size={mobileSize}
        />
      )}
    </>
  );
}
