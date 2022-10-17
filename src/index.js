import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// App 을 임포트하여서 id가 root 밑에 배치하였음
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
