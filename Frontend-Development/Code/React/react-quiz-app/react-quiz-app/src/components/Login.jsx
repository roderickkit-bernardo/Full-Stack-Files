// Developer: Roderick Bernardo
// Purpose: React quiz app

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authenticator from "../lib/Authenticator";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });

  const clickHandler = (event) => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValues.userName.length > 0 && formValues.password.length > 0) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formValues.userName,
          password: formValues.password,
        }),
      };

      const url = `${process.env.REACT_APP_SERVER_END_POINT}${process.env.REACT_APP_VERIFY_USER_NAME_AND_PASSWORD}`;
      const fetchData = async () => {
        try {
          const response = await fetch(url, options);
          const responseJson = await response.json();

          if (responseJson.userNameAndPasswordMatches) {
            Authenticator.login({
              userName: formValues.userName,
              isAdmin: responseJson.isAdmin,
            });
            // navigate("/Quiz", { replace: true });
            navigate("/Quiz");
            navigate(0);
          } else {
            alert(`Invalid user name or password.`);
          }
        } catch (error) {
          alert(`Network error please try again.`);
        } finally {
        }
      };

      fetchData();
    } else {
      alert(`Blank values are not allowed.`);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className="hero">
      <div className="hero-body has-background-light">
        <form onSubmit={submitHandler}>
          <div className="box">
            <div className="field">
              <label className="label">User Name:</label>
              <div className="control">
                <input
                  className="input"
                  value={formValues.userName}
                  onChange={changeHandler}
                  type="text"
                  name="userName"
                  placeholder="Enter your User Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password:</label>
              <div className="control">
                <input
                  className="input"
                  value={formValues.password}
                  onChange={changeHandler}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="field">
              <label className="checkbox">
                <input type="checkbox" onClick={clickHandler} />
                &nbsp;Show password
              </label>
            </div>

            <div className="control">
              <input className="button" type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
