import React from "react";
import { connect } from "react-redux";

const ProtectedComponent = (props) => {
  if (localStorage.getItem("token")) {
    return (
      <div>
        {" "}
        {`You have Signed In as ${props.state.userReducer.user.userName}`}{" "}
      </div>
    );
    console.log(props);
  }
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(ProtectedComponent);
