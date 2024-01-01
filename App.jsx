import { useEffect, useState } from "react"
import "./styles.css"
import { Route, Routes } from "react-router-dom";

import TodoPage from "./pages/TodoPage/TodoPage"

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TodoPage />} />
      </Routes>
    </div>
  )
}