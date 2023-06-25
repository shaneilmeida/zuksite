import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Tabs from "./components/TabComponent/Tabs";

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
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
  "/pfp.png",
];
const animations = ["/pfp.png"];
function App() {
  return (
    <div>
      <Tabs />
      <Grid items={photos}>all</Grid>
      <Grid items={animations}>animations</Grid>
    </div>
  );
}

export default App;
