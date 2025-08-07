import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        padding: "20px",
        fontSize: "18px",
        color: "#e1e1e1",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Добро пожаловать в Diamond Smoke
      </h1>

      <p style={{ marginBottom: "30px", textAlign: "center" }}>
        Выберите раздел, чтобы продолжить
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <Link
          to="/catalog"
          style={{
            padding: "15px",
            backgroundColor: "#1e1e1e",
            color: "#e1e1e1",
            textAlign: "center",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          Каталог
        </Link>

        <Link
          to="/profile"
          style={{
            padding: "15px",
            backgroundColor: "#1e1e1e",
            color: "#e1e1e1",
            textAlign: "center",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          Профиль
        </Link>

        <Link
          to="/about"
          style={{
            padding: "15px",
            backgroundColor: "#1e1e1e",
            color: "#e1e1e1",
            textAlign: "center",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          О нас
        </Link>
      </div>
    </div>
  );
};

export default Home;
