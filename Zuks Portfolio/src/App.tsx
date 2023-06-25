import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Grid from "./components/Grid";

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
      <Hero />
      <Nav />
      <Grid items={photos}>all</Grid>
      <Grid items={animations}>animations</Grid>
    </div>
  );
}

export default App;
