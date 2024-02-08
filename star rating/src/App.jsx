import "./App.css";
import Rating from "./components/Rating";

const App = () => {
  return (
    <div className="App">
      <Rating noOfStars={10} />
    </div>
  );
};

export default App;
