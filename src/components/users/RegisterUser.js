import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    memorable_question: "",
    answer: "",
  });

  const { email, password, memorable_question, answer } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    await Axios.post(
      "http://127.0.0.1:3333/register",
      user
    );
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => register(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Memorable Question"
              name="memorable_question"
              value={memorable_question}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Answer"
              name="answer"
              value={answer}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Register A User</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
