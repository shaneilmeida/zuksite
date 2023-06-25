import React from "react";
import Grid from "../Grid";

const animations = ["/pfp.png"];

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <Grid items={animations}>Animations</Grid>
    </div>
  );
};
export default SecondTab;
