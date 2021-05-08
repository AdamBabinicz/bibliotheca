import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Start</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Kustosze</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Album</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Spadkobiercy</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
}
