import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<div className="min-h-screen flex items-center justify-center font-body text-navy"><p>Página não encontrada.</p></div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
