import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TrippyRoom from "./containers/TrippyRoom";
import TrippyBoxes from "./containers/TrippyBoxes";
import TrippyPyramid from "./containers/TrippyPyramid";
import RandomShapes from "./containers/RandomShapes";
import Dotty from "./containers/Dotty";
import Droppy from "./containers/Droppy";
import Home from "./containers/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="trippy-triangles">trippy triangles</Link>
            </li>
            <li>
              <Link to="trippy-cube">trippy cube</Link>
            </li>
            <li>
              <Link to="cube-n-shere">trippin cube n sphere</Link>
            </li>
            <li>
              <Link to="shapes">trippin shapes</Link>
            </li>
            <li>
              <Link to="dotty">dot blowout</Link>
            </li>
            <li>
              <Link to="droppy">fallout cubes</Link>
            </li>
          </ul>
        </nav>

        <div className="myCanvas">
          <Switch>
            <Route path="/trippy-cube" component={TrippyBoxes} />
            <Route path="/cube-n-shere" component={TrippyRoom} />
            <Route path="/trippy-triangles" component={TrippyPyramid} />
            <Route path="/shapes" component={RandomShapes} />
            <Route path="/dotty" component={Dotty} />
            <Route path="/droppy" component={Droppy} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        {/* <div className="footer">
          <p>
            by <a href="https://scottcardoza.com">scott cardoza.</a> slc, ut
            2020
          </p>
        </div> */}
      </div>
    </Router>
  );
}
