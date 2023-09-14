import React from "react";

interface Props {
  items: string[];
  children: string;
}

function Grid({ items, children }: Props) {
  return (
    <div
      id={children}
      style={{
        display: "flex",
        flex: "1 1 auto",
        flexWrap: "wrap",
        position: "absolute",
        top: "60px",
        left: "0",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, rgba(24,24,28,1) 0%, rgba(56,56,56,1) 100%)",
        overflowY:auto
        width: "100%",
      }}
    >
      {items.map((item) => (
        <div
          style={{
            height: "270px",
            width: "480px",
            overflowY:auto
          }}
        >
          <img
            style={{
              height: "270px",
              width: "480px",
            }}
            src={item}
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
