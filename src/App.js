import "./App.css";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container-fluid">
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <Footer />
        <p className="text-center mt-4">DESIGNED AND BUILT BY LAURA GÓMEZ</p>
      </footer>
    </div>
  );
}

export default App;
