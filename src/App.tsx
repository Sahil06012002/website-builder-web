import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Chat from "./pages/chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
