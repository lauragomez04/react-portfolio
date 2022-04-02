import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="container introduction">
        <Introduction />
      </div>
    </div>
  );
}

export default App;
