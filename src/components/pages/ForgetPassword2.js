import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const ForgetPassword2 = (props) => {
  let history = useHistory();
  const { email } = useParams();
  const [user, setUser] = useState({
    memorable_question: "",
    answer: "",
  });
  const [user2, setUser2] = useState({
    memorable_question2: "",
    answer2: "",
  });

  const { memorable_question2, answer2 } = user2;
  const { memorable_question, answer } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://127.0.0.1:3333/showUserByEmail/${email}`
    );
    setUser(result.data);
    setUser2(result.data);
    //console.log(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    //  console.log(user.answer);
    // console.log(user2.answer);
    if (user.answer === user2.answer) {
      console.log("tmam");
      localStorage.setItem("isUser", true);
      history.push("/");
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Answer Your Memorable Question</h2>
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
              value={answer2}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Retrieve</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword2;
