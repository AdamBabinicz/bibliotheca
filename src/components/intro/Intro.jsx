import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["od III wieku p.n.e. do IV wieku n.e."],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/1.svg" alt="papirus" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Biblioteka Aleksandryjska</h1>
          <h2>
            największa biblioteka świata starożytnego, istniejąca w Aleksandrii,
            założona przez Ptolemeusza I Sotera.
          </h2>
          <h3>
            Biblioteka Aleksandryjska funkcjonowała przy Muzeum Aleksandryjskim
            w okresie <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
