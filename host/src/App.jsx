import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Content = React.lazy(() => import('remoteContent/Content'))

const App = () => (<>
  <div className="mt-10 text-3xl mx-auto max-w-6xl border border-blue-500 p-4">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Content msg={'Hello DKKs'} />
      </Suspense>
    </div>
  </div>
</>
);
ReactDOM.render(<App />, document.getElementById("app"));
