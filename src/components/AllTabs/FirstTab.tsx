import React from "react";
import Grid from "../Grid";

const photos = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/5.png",
  "/6.png",
];

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <Grid items={photos}>all</Grid>
    </div>
  );
};
export default FirstTab;
