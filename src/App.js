import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import DashBoard from "./components/dashboard";
import Users from "./components/users";
import Profile from "./components/profile";
import Settings from "./components/settings";
import SideBar from "./components/sideBar";
import UserForm from "./components/userForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    admin: false,
  };
  render() {
    const { admin } = this.state;
    return (
      <React.Fragment>
        {admin === false && (
          <div>
            <ToastContainer />
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
        )}
        {admin === true && (
          <div>
            <SideBar />
            <div className="content">
              <ToastContainer />
              <Switch>
                <Route path="/users/:id" component={UserForm} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/users" component={Users} />
                <Route path="/settings" component={Settings} />
                <Route path="/profile" component={Profile} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" exact to="/dashboard" />
                <Redirect to="not-found" />
              </Switch>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
