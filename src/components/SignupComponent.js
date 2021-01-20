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
      <form onSubmit={this.onSubmit}>
        <h3>Register</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Username"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onSubmit={this.onSubmit}
        >
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignupComponent);
