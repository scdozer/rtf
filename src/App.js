import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TrippyRoom from "./containers/TrippyRoom";
import TrippyBoxes from "./containers/TrippyBoxes";
import TrippyPyramid from "./containers/TrippyPyramid";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/trippy-room">TrippyRoom</Link>
            </li>
            <li>
              <Link to="/trippy-boxes">TrippyBoxes</Link>
            </li>
            <li>
              <Link to="/trippy-pyramid">TrippyPyramid</Link>
            </li>
          </ul>
        </nav>
        <div className="myCanvas">
          <Switch>
            <Route path="/trippy-boxes">
              <TrippyBoxes />
            </Route>
            <Route path="/trippy-room">
              <TrippyRoom />
            </Route>
            <Route path="/trippy-pyramid">
              <TrippyPyramid />
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <p>
            by <a href="https://scottcardoza.com">scott cardoza.</a> slc, ut
            2020
          </p>
        </div>
      </div>
    </Router>
  );
}
