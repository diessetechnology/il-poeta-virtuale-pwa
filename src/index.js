import React from "react";
import ReactDOM from "react-dom";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        Inserisci il nome di una poesia...e il tuo computer te la pronuncerà!
      </h1>
      <Input size="big" style={{ width: "100vw" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
