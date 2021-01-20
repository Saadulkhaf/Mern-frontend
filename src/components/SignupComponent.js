import React from "react";
import { connect } from "react-redux";
import { signUserUp } from "../actions/index";

class SignupComponent extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUserUp(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>SignUp Form</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />

          <br />
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignupComponent);
