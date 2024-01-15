import React from "react";
import Grid from "../Grid";

const photos = [
  "/Helmet 2.png",
  "/horror laptop.png",
  "/ring.png",
];

const FirstTab = () => {
  return (
    <div className='FirstTab'>
      <Grid items={photos}>all</Grid>
    </div>
  );
};
export default FirstTab;
