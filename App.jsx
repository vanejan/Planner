import { useEffect, useState } from "react"
import "./styles.css"
import { Route, Routes } from "react-router-dom";

/* Import roboto font */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import TodoPage from "./pages/TodoPage/TodoPage"
import Home from "./pages/Home/Home"


export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/TodoPage/:month/:day/:year" element={<TodoPage />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}