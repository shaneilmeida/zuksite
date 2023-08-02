import React from "react";
import Grid from "../Grid";

const photos = [
  "/trees and temple.png",
  "/woman on balcony.png",
  "/lighthouse.png",
  "/living room.png",
  "/fallen game case.png",
  "/bedroom.png",
];

const FirstTab = () => {
  return (
    <div className='FirstTab'>
      <Grid items={photos}>all</Grid>
    </div>
  );
};
export default FirstTab;
