import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import API from "./utils/API";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./index.css"
import 'react-widgets/dist/css/react-widgets.css';
import Admin from "./pages/Admin";


class App extends Component {
  state = {
    
  };

  componentDidMount() {
    // this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        this.setState({
          authorized: res.data.message ? false : true
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {

    return (
      <Router>
        <Route exact path="/">
          <Admin />
          {/* <Home logout={this.logout} /> */}
        </Route>
      </Router>

      // <Router>
      //     <Switch>
      //       <Route exact path="/">
      //         {this.state.authorized ? (
      //           <Home logout={this.logout} />
      //         ) : (
      //             <Redirect to="/login" />
      //           )}
      //       </Route>
      //       <Route exact path="/login">
      //         {this.state.authorized ? (
      //           <Redirect to="/" />
      //         ) : (
      //             <Login isAuthorized={this.isAuthorized} />
      //           )}
      //       </Route>
      //       <Route exact path="/register">
      //         {this.state.authorized ? (
      //           <Redirect to="/" />
      //         ) : (
      //             <Register isAuthorized={this.isAuthorized} />
      //           )}
      //       </Route>
      // </Router>
    );
  }
}

export default App;
