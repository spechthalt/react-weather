import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
        <footer>
          <p>
            This webiste was coded by{" "}
            <a
              href="https://www.stephdaviscodes.com"
              target="_blank"
              rel="noreferrer"
            >
              Stephanie Davis
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/spechthalt/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
