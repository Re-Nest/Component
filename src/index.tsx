import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from "./dev/Content";
import {BrowserRouter} from "./component";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    BrowserRouter(
        Content()
    )
    .asReactElement()
);

