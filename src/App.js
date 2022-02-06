import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This webiste was coded by Stephanie Davis and is{" "}
            <a
              href="https://github.com/spechthalt/react-weather"
              target="_blank"
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
