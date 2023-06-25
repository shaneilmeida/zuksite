import React from "react";
import Grid from "../Grid";

const photos = [
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
];

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <Grid items={photos}>all</Grid>
    </div>
  );
};
export default FirstTab;
