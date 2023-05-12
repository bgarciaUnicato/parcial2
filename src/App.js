import './App.css';
import NavbarComp from './componentes/NavbarComp';
import Presentaciones from './componentes/Presentaciones';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact>
        <NavbarComp />
        <Presentaciones/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/proyectos" exact>
          <NavbarComp />
        </Route>
      </Switch>

    </Router>
  );
}


export default App;
