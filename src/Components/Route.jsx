import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";

function Router() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" />
            <Route path="/product" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Router;




