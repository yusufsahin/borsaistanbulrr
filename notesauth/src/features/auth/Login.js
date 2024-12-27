import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { useNavigate, useLocation } from "react-router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = dispatch(loginUser({ username, password }));
   navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="text">Username</label>
            <input
              type="username"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default LoginForm;
