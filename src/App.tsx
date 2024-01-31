import "./App.css";
import Navibar from "./Components/Navibar/Navibar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <Router>
      <div>
        <Navibar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
