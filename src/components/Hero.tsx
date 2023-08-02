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
          justifyContent: "center",
          borderRadius: "50%",
          position: "fixed",
          left: "0",
          right: "0",
          top: "10px",
          margin: "20px",
        }}
      >
        <img src='/pfp.png' />
      </div>
      <h1
        style={{
          color: "white",
          textAlign: "left",
          marginTop: "180px",
          marginLeft: "20px",
        }}
      >
        Xander Good
      </h1>
    </div>
  );
};

export default hero;
