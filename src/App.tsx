import { APITester } from "./APITester";
import { Home } from "./Home";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./index.css";
import { BoardPage } from "./BoardPage";


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/*" element={<BoardPage />} />
    
      </Routes>
    </Router>

  );
}

export default App;
