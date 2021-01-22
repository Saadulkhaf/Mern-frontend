import React from "react";
import "./App.css";
import SignupComponent from "./components/SignupComponent";
import LoginComponent from "./components/LoginComponent";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { autoLogin } from "./actions";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import history from "./history";

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin();
    console.log("lllllllll");
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                Mern
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Sign in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path="/sign-up" component={SignupComponent} />
                <Route exact path="/sign-in" component={LoginComponent} />

                <Route exact path="/" component={LoginComponent} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
