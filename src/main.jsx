import React from "react";
import ReactDOM from 'react-dom/client'
import Index from "./Components/Index";
import Search from "./Search";
// import App from "./App.jsx";
// import './index.css'
// import Router from "./Components/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Search/>
    {/* <Index/> */}
    {/* <Router/> */}
  </React.StrictMode>
);
