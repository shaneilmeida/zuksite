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
        top: "78px",
        left: "0",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, rgba(24,24,28,1) 0%, rgba(56,56,56,1) 100%)",
        overflowY: "auto",
        width: "100%",
      }}
    >
      {items.map((item) => (
        <div
          style={{
            height: "360px",
            width: "640px",
            overflowY: "auto",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              height: "360px",
              width: "640px",
            }}
            src={item}
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
