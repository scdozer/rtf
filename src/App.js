import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  __RouterContext,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import TrippyRoom from "./containers/TrippyRoom";
import TrippyBoxes from "./containers/TrippyBoxes";
import TrippyPyramid from "./containers/TrippyPyramid";
import RandomShapes from "./containers/RandomShapes";
import Dotty from "./containers/Dotty";
import Droppy from "./containers/Droppy";
import { useTransition, animated } from "react-spring";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="trippy-room">TrippyRoom</Link>
            </li>
            <li>
              <Link to="trippy-boxes">TrippyBoxes</Link>
            </li>
            <li>
              <Link to="trippy-pyramid">TrippyPyramid</Link>
            </li>
            <li>
              <Link to="random-shapes">Shapes</Link>
            </li>
            <li>
              <Link to="dotty">Dotty</Link>
            </li>
            <li>
              <Link to="droppy">Droppy</Link>
            </li>
          </ul>
        </nav>

        <div className="myCanvas">
          <Switch>
            <Route path="/trippy-boxes">
              <TrippyBoxes />
            </Route>
            {/* <Route path="/">
              <TrippyBoxes />
            </Route> */}
            <Route path="/trippy-room">
              <TrippyRoom />
            </Route>
            <Route path="/trippy-pyramid">
              <TrippyPyramid />
            </Route>
            <Route path="/random-shapes">
              <RandomShapes />
            </Route>
            <Route path="/dotty">
              <Dotty />
            </Route>
            <Route path="/droppy">
              <Droppy />
            </Route>
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
