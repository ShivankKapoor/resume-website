import { link } from "fs";
import "./Navibar.css";

function Navibar() {
  return (
    <div className="Nav">
      <h1>Shivank Kapoor</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Resume">Resume</a>
      </div>
    </div>
  );
}

export default Navibar;
