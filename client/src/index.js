import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Principal } from "./utils/Principal";

//! Pages
import Main from "./pages/desktop-view/Main";

//? App Function
function App() {
  return (
    <>
      <Main/>
    </>
  );
}

//! Render React
ReactDOM.render(
    <React.StrictMode>
        <Principal>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Principal>
    </React.StrictMode>,
  document.getElementById("root")
);
