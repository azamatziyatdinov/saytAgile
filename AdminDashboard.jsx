import React from "react";

export function AdminDashboard({ onLogout }) {
  return (
    <div>
      <h1>Админ-панель (заглушка)</h1>
      <button onClick={onLogout}>Выйти</button>
    </div>
  );
}
