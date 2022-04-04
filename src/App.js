import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Introduction />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
