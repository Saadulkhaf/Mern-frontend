import React from "react";
import { connect } from "react-redux";
import { signUserUp } from "../actions/index";
import { useState, useEffect } from "react";

function SignupComponent(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    props.signUserUp({ name, email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Register</h3>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.email)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-dark btn-lg btn-block"
        onSubmit={onSubmit}
      >
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/">log in?</a>
      </p>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignupComponent);
