import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Content from './Content.jsx'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Content></Content>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
