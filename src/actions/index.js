export const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://localhost:3001/api/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      //   localStorage.setItem("token", data.token);
      dispatch(setUser(data));
    });
};

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:3001/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      //   localStorage.setItem("token", data.header.auth - token);
      localStorage.setItem("token", data.token);
      dispatch(setUser(data));
    });
};

export const autoLogin = () => (dispatch) => {
  fetch(`http://localhost:3001/api/user/auto-login`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};
