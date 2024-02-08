import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Image Slider</h1>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
    </div>
  );
};

export default App;
