import React, { useState } from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log("submitted");
    if (e) e.preventDefault();
    axios
      .post("https://managementsystemadr.herokuapp.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("isUser", true);
        props.history.push("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const responseGoogle = async (response) => {
    // console.log(response);
    setUser({ email: response.profileObj.email, password: "1234567" });
    await axios
      .post("https://managementsystemadr.herokuapp.com/login", user)
      .then((res) => {
        localStorage.setItem("isUser", true);
        props.history.push("/");
        window.location.reload();
        return;
      })
      .catch((err) => console.log(err));
    if (localStorage.getItem("isUser") !== "true") {
      await axios
        .post("https://managementsystemadr.herokuapp.com/register", user)
        .then((res) => {
          localStorage.setItem("isUser", true);
          props.history.push("/");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <Link excat to="/ForgetPassword">
            Forget Password ?
          </Link>
          <br />
          <br />
          <Link excat to="/RegisterUser">
            SignUp
          </Link>
          <br />
          <br />
          <button
            onClick={() => handleSubmit()}
            type="submit"
            class="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
      <GoogleLogin
        clientId="73009755561-s42pokbhautn42dio8n0skfhsp8fqap1.apps.googleusercontent.com"
        buttonText="SignUp or Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
