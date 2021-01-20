import React from "react";
import "./App.css";
import SignupComponent from "./components/SignupComponent";
import { connect } from "react-redux";

function App() {
  return (
    <div>
      App
      <SignupComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(App);
