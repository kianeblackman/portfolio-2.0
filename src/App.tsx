import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

import "./scss/styles.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
