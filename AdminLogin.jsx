import React from "react";

export function AdminLogin({ onLogin }) {
  return (
    <div>
      <h1>Вход администратора</h1>
      <button onClick={() => onLogin({ token: "demo" })}>Войти</button>
    </div>
  );
}
