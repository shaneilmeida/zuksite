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
        backgroundColor: "black",
        overflowY: "auto",
        width: "100%",
      }}
    >
      {items.map((item) => (
        <div
          style={{
            height: "auto",
            width: "auto",
            minHeight: "260px",
            minWidth: "260px",
            maxHeight: "500px",
            maxWidth: "500px",
            overflowY: "auto",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            style={{
              height: "auto",
              width: "auto",
              minHeight: "260px",
              minWidth: "260px",
              maxHeight: "500px",
              maxWidth: "500px",
            }}
            src={item}
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
