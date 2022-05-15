import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="container-fluid main-container">
          <Navbar />
          <Introduction />
        </div>
      </div>
      <div className="container-fluid main-container">
        <AboutMe />
        <Projects />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
