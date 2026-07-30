import { useRef } from "react";
import "./App.css";
import Navibar from "./Components/Navibar/Navibar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router';
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Pages/404/NotFound";
import ScrollToTop from "./Services/ScrollToTop";
import usePageTracker from "./Hooks/usePageTracker";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function PageTrackerWrapper() {
  usePageTracker(); // Use the page tracker hook here
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        classNames="page-fade"
        timeout={90}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  // Removed duplicate useLogVisit() call from here
  return (
    <Router>
      <PageTrackerWrapper />
      <div>
        <ScrollToTop />
        <Navibar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;