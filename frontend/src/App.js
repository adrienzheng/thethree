import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
