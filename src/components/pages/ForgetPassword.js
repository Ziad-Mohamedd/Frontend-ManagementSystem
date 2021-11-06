import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const ForgetPassword = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    memorable_question: "",
    answer: "",
  });

  const { email, memorable_question, answer } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //  await axios.put(`http://127.0.0.1:3333/updateUser/${id}`, user);
    console.log(user);
    //  history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Retrieve Your Password</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <Link
            class="btn btn-primary btn-lg"
            to={`/ForgetPassword2/${user.email}`}
          >
            Find
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
