import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img
              className="logo"
              src="./images/laura-gomez-frontend-developer-logo.svg"
              width="300"
              alt="laura gomez logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item about">
                <a className="nav-link active" aria-current="page" href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-item projects">
                <a className="nav-link" href="/">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item contact">
                <a className="nav-link" href="/">
                  CONTACT
                </a>
              </li>
              <span className="vertical-line"></span>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="bi bi-github github-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="bi bi-envelope envelope-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="bi bi-linkedin linkedin-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="bi bi-instagram instagram-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
