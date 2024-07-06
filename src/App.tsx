import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { NotFound } from "./views/404";
import { Module } from "./views/Module";

export function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module" element={<Module />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
