import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Results from "./results";
import UserData from "./userData";
import Home from "./home";
import Navbar from "./navbar";
import NotFound from "./notFound";
import AboutUs from "./aboutUs";
import Contact from "./contact";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
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
