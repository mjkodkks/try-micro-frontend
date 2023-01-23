import React from "react";

import "./index.scss";

const Content = ({ msg = 'test' }) => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl bg-red-500">
    <div>Name: content</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div>Props: msg: {msg}</div>
  </div>
);

export default Content
