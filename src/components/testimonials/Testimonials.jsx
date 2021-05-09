import "./testimonials.scss";
import img1 from "../assets/31.jpg";
import img2 from "../assets/globe.png";
import img3 from "../assets/avatar.svg";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Aleksandria",
      title: "Egipt",
      img: img1,
      icon: "assets/twitter.png",
      desc:
        "Nowa Biblioteka w Aleksandrii w Egipcie jest jedną z największych na świecie. Może pomieścić osiem milionów książek.",
    },
    {
      id: 2,
      name: "Internet",
      title: "Glob",
      img: img2,
      icon: "assets/youtube.png",
      desc:
        "Internet na swoich serwerach zgromadził największą w dziejach ludzkości 'współczesną Bibliotekę Aleksandryjską'.",
      featured: true,
    },
    {
      id: 3,
      name: "Czytelnik",
      title: "Dom",
      img: img3,
      icon: "assets/linkedin.png",
      desc:
        "Ty drogi Internauto odziedziczyłeś najwaspanialszą spuściznę kulturową naszej cywilizacji.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Spadkobiercy</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="..." />
              <img className="user" src={d.img} alt="..." />
              <img className="right" src={d.icon} alt="..." />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
