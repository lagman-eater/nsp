import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>

        <Route path="/">
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
