import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container-fluid">
        <Introduction />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
