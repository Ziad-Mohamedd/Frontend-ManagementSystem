import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    memorable_question: "",
    answer: "",
  });
  const { id } = useParams();

  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:3333/showUserById/${id}`);
    localStorage.getItem("isUser", true);
    setUser(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">UserName: {user.username}</li>
        <li className="list-group-item">E-mail: {user.email}</li>
        <li className="list-group-item">Password: {user.password}</li>
        <li className="list-group-item">
          Memorable Question: {user.memorable_question}
        </li>
        <li className="list-group-item">Answer: {user.answer}</li>
      </ul>
    </div>
  );
};

export default User;
