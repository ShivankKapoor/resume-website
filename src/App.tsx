import "./App.css";
import Navibar from "./Components/Navibar/Navibar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import ScrollToTop from "./Services/ScrollToTop";

function App() {
  return (
    <Router>
      <h1>Firebase Deploy Test</h1>
      <div>
      <ScrollToTop />
        <Navibar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
