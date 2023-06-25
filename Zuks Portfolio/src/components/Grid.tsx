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
        flexDirection: "row",
        flexWrap: "wrap",
        position: "absolute",
        top: "740px",
        left: "0",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "black",
        overflowY: "auto",
      }}
    >
      {items.map((item) => (
        <div
          style={{
            height: "260px",
            width: "260px",
            maxHeight: "260px",
            maxWidth: "260px",
            overflowY: "auto",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img style={{ maxHeight: "260px", maxWidth: "260px" }} src={item} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
