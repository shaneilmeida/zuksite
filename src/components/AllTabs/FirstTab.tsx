import React from "react";
import Grid from "../Grid";

const photos = [
  "/horror laptop.png",
  "/ring.png",
  "/SP gobo.png",
  "/archer gobo.png",
  "/pants gobo.png",
  "/sword gobo.png",
  "/whole island.png",
];

const FirstTab = () => {
  return (
    <div className='FirstTab'>
      <Grid items={photos}>all</Grid>
    </div>
  );
};
export default FirstTab;
