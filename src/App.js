import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import RegisterUser from "./components/users/RegisterUser";
import Dashboard from "./components/pages/Dashboard";
import User from "./components/users/User";
import EditUser from "./components/users/EditUser";
import ForgetPassword from "./components/pages/ForgetPassword";
import ForgetPassword2 from "./components/pages/ForgetPassword2";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/ForgetPassword" component={ForgetPassword} />
          <Route
            exact
            path="/ForgetPassword2/:email"
            component={ForgetPassword2}
          />
          <Route exact path="/RegisterUser" component={RegisterUser} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/users/edit/:id" component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
