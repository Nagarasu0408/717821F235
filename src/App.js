import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import * as React from "react";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes >
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
