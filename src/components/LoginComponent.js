import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";
import { useHistory } from "react-router-dom";

function LoginComponent(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/protected");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchUser({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);
