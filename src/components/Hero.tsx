import React from "react";

const hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/1681905020896.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "400px",
        position: "fixed",
        top: "0",
        left: "0",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: "150px",
          width: "150px",
          overflow: "auto",
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
      <h3
        style={{
          color: "white",
          textAlign: "left",
          marginTop: "0px",
          marginLeft: "20px",
        }}
      >
        Producer at Motion Realm
      </h3>
    </div>
  );
};

export default hero;
