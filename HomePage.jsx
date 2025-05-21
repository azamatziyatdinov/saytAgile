import React, { useState } from "react";

export default function HomePage({ onStart }) {
  const [name, setName] = useState("");
  const [lang, setLang] = useState("ru");

  return (
    <div>
      <h1>Добро пожаловать</h1>
      <input
        placeholder="Название организации"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="ru">Русский</option>
        <option value="uz">O'zbek</option>
      </select>
      <button onClick={() => onStart(name, lang)}>Начать</button>
    </div>
  );
}
