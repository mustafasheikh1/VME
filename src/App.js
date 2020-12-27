import { Route, Switch, Redirect } from "react-router-dom";
import Results from "./components/results";
import UserData from "./components/userData";
import Home from "./components/home";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import ResultForm from "./components/resultForm";
import PriceData from "./components/priceData";
import Login from "./components/loginForm";
import Signup from "./components/signup";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/formResults" component={ResultForm} />
        <Route path="/priceData" component={PriceData} />
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
