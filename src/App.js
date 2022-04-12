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
        <p className="text-center mt-4 signature">
          DESIGNED AND BUILT BY{" "}
          <a
            href="https://github.com/lauragomez04/react-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            LAURA GÓMEZ
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
