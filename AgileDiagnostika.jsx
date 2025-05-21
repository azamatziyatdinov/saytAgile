import React from "react";

export default function AgileDiagnostika({ orgName, language, onRestart }) {
  return (
    <div>
      <h1>Agile Diagnostika</h1>
      <p>Организация: {orgName}</p>
      <p>Язык: {language}</p>
      <button onClick={onRestart}>Начать заново</button>
    </div>
  );
}
