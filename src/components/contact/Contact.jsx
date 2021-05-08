import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/pinky.svg" alt="..." />
      </div>
      <div className="right">
        <h2>Kontakt</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Wiadomość"></textarea>
          <button type="submit">Wyślij</button>
          {message && <span>Dzięki, odpowiem jak najszybciej :)</span>}
        </form>
      </div>
      <p>2021 - {new Date().getFullYear()}.</p>
    </div>
  );
}
