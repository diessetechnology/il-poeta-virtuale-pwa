import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Input, Button } from "semantic-ui-react";
var speechSynthesis = require("speech-synthesis");
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import poesie from "./poesie.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poesia_recitata: [],
      ricerca: ""
    };
    this.recita = this.recita.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  async recita(e) {
    e.preventDefault();
    // returns a boolean
    for (const poesia of poesie.poesie) {
      if (poesia.titolo.toLowerCase() === this.state.ricerca.toLowerCase()) {
        for (const strofa of poesia.strofe) {
          speechSynthesis(strofa, "it-IT");
          await this.setState({
            poesia_recitata: [...this.state.poesia_recitata, strofa]
          });
        }
      }
    }
  }

  async onchange(e) {
    await this.setState({ ricerca: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="mainapp">
          <div className="maincontainer">
            <h1 style={{ fontSize: "1.5rem" }}>
              Inserisci il nome di una poesia...e il tuo computer te la
              reciterà!
            </h1>
            <Input
              value={this.state.ricerca}
              onChange={this.onchange}
              size="big"
              style={{
                width: "100%"
              }}
            />
            <div>
              {this.state.poesia_recitata.map(function(strofa) {
                return <h1 style={{ fontSize: "1.3rem" }}>{strofa}</h1>;
              })}
            </div>
            <Button
              onClick={this.recita}
              style={{
                width: "100%"
              }}
            >
              Recita questa poesia!
            </Button>
          </div>
        </div>
        <div className="footer">
          <h2 style={{ fontSize: "1.5rem" }}>
            Webapp sviluppata da Davide Salamino
          </h2>
          <h3 style={{ fontSize: "1.5rem" }}>Open Source sotto licenza MIT</h3>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
