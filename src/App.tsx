import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";

export function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}