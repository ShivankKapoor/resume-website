import "./App.css";
import Navibar from "./Components/Navibar/Navibar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Pages/404/NotFound";
import ScrollToTop from "./Services/ScrollToTop";
import usePageTracker from "./Hooks/usePageTracker";

function PageTrackerWrapper() {
  usePageTracker(); // Use the page tracker hook here
  return null;
}

function App() {
  // Removed duplicate useLogVisit() call from here
  return (
    <Router>
      <PageTrackerWrapper />
      <div>
        <ScrollToTop />
        <Navibar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;