import React from "react";

const hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/hero.webp)",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        width: "100vw",
        height: "700px",
        position: "fixed",
        top: "0",
        left: "0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "150px",
          width: "150px",
          overflow: "hidden",
          display: "flex",
          borderRadius: "50%",
          position: "fixed",
          left: "0",
          right: "0",
          top: "70px",
          margin: "auto",
        }}
      >
        <img src="/pfp.png" />
      </div>
      <h1 style={{ color: "white", textAlign: "left", marginTop: "80px" }}>
        Xander Good
      </h1>
    </div>
  );
};

export default hero;