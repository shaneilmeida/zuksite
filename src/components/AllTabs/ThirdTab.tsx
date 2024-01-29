import React from "react";
import Grid from "../Grid";

const photos = [
  "/SP gobo.png",
  "/archer gobo.png",
  "/pants gobo.png",
  "/sword gobo.png",
];

const ThirdTab = () => {
  return (
    <div className='ThirdTab'>
      <Grid items={photos}>all</Grid>
    </div>
  );
};
export default ThirdTab;
