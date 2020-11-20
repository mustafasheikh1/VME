import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Results from "./results";
import UserData from "./userData";
import Home from "./home";
import Navbar from "./navbar";
import NotFound from "./notFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/user" component={UserData} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Redirect to="not-found" />
      </Switch>
    </div>
  );
}

export default App;
