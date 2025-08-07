import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        padding: "20px",
        fontSize: "18px",
      }}
    >
      <header
        style={{
          marginBottom: "40px",
          fontWeight: "600",
          fontSize: "28px",
          color: "#e1e1e1",
          textAlign: "center",
        }}
      >
        Добро пожаловать в Diamond Smoke
      </header>

      <main
        style={{
          flexGrow: 1,
          backgroundColor: "#1e1e1e",
          borderRadius: "20px",
          padding: "30px",
          boxShadow:
            "0 8px 20px rgba(0, 0, 0, 0.6), 0 0 10px #0a84ff33 inset",
          color: "#e1e1e1",
        }}
      >
        <p>Выберите раздел:</p>
        <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
          <Link
            to="/catalog"
            style={{
              background: "#0a84ff",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            📦 Каталог
          </Link>
          <Link
            to="/profile"
            style={{
              background: "#4caf50",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            🧑‍💼 Профиль
          </Link>
          <Link
            to="/about"
            style={{
              background: "#9c27b0",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            ℹ️ О нас
          </Link>
        </div>
      </main>

      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#555",
          fontSize: "14px",
        }}
      >
        &copy; 2025 Diamond Smoke
      </footer>
    </div>
  );
}
