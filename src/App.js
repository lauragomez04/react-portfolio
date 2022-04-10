import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container-fluid">
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
