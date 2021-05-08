import React, { useState } from "react";
import "./works.scss";
import img1 from "../assets/5.png";
import img2 from "../assets/23.jpg";
import img3 from "../assets/24.jpg";
import img4 from "../assets/25.jpg";
import img5 from "../assets/27.jpg";
import img6 from "../assets/28.jpg";
import img7 from "../assets/6.png";
import img8 from "../assets/7.png";
import img9 from "../assets/8.png";
import img10 from "../assets/30.jpg";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/alpha.svg",
      title: "Alef",
      desc:
        "Główną część opracowania zbiorów aleksandryjskich wykonał Kallimach z Kyreny (ok. r. 310 - ok. 240).",
      img: img1,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "2",
      icon: "./assets/beta.svg",
      title: "Bet",
      desc:
        "Uporządkował zwoje według działów głównych, prawdopodobnie dziesięciu, m.in. epos, poezja, dramat, prawo, filozofia, historia, retoryka, medycyna, nauki matematyczne.",
      img: img2,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "3",
      icon: "./assets/gamma.svg",
      title: "Gimel",
      desc:
        "W obrębie działów układał zwoje według nazw autorów. W przypadku, gdy autor pisał tragedie i poezje, porządkował je według gatunków, a dalej już alfabetycznie.",
      img: img3,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "4",
      icon: "./assets/delta.svg",
      title: "Dalet",
      desc:
        "Podobny układ zastosował on w 120 księgach swojej bibliografii zwanej Pinakes, tzw. Tablice, w których usystematyzował całą twórczość od Homera po Arystotelesa.",
      img: img4,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "5",
      icon: "./assets/epsilon.svg",
      title: "He",
      desc:
        "Jego bibliografia podzieliła piśmiennictwo na poezję, która obejmowała rodzaje, a w ich obrębie gatunki literackie: epos, elegię, jamb, melikę, tragedię i komedię oraz prozę.",
      img: img5,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "6",
      icon: "./assets/dzeta.svg",
      title: "Zajin",
      desc:
        "Opis bibliograficzny samego dzieła zawierał: tytuł, pierwsze słowa tekstu, liczbę wierszy, liczbę zwojów, oraz notatkę, że utwór był przypisywany różnym autorom albo, że dzieło występuje pod różnymi tytułami.",
      img: img6,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "7",
      icon: "./assets/eta.svg",
      title: "Chet",
      desc:
        "Widać, że w czasie opracowania bibliograficznego rękopisu uczeni musieli rozwiązywać różne problemy: kto jest autorem, określić tytuł, objętość i autentyczność tekstu oraz czas jego powstania.",
      img: img7,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "8",
      icon: "./assets/teta.svg",
      title: "Tet",
      desc:
        "Zachowane fragmenty tych katalogów świadczą, że Grecy stosowali przede wszystkim podział piśmiennictwa na dwie wielkie grupy rzeczowe i alfabetyczny układ autorów w obrębie tych grup.",
      img: img8,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "9",
      icon: "./assets/jota.png",
      title: "Jod",
      desc:
        "Niestety Pinakes zaginęły, a do czasów obecnych przetrwały jedynie ich opisy i cytaty. Dzieło Kallimacha z Kyreny było uzupełniane w pracach późniejszych uczonych aleksandryjskich.",
      img: img9,
      span: "blogger.com/profile/17759790684837656496",
    },
    {
      id: "10",
      icon: "./assets/kapa.svg",
      title: "Kaf",
      desc:
        "Zgromadzenie w murach biblioteki dużego księgozbioru umożliwiało uczonym prowadzenie szczegółowych badań w zakresie literatury greckiej.",
      img: img10,
      span: "blogger.com/profile/17759790684837656496",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="mobile" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    <p>{d.desc}</p>
                  </p>
                  <span>{d.span}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="..." />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}
