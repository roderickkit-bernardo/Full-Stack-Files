// Developer: Roderick Bernardo
// Purpose: React version of the Login-App

import { useState } from "react";
// This the address of the backend
const REST_END_POINT_BASE_URL = "http://localhost:3001";

function Login() {
  // By default we need to hide the following elements
  // [Variable name, Set function name]
  // We could have used an object here
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [messageIsVisible, setMessageIsVisible] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [userNameText, setUserNameText] = useState("");
  const [messageStyle, setMessageStyle] = useState(
    "notification is-danger is-light"
  );

  const keyDownHandler = (event) => {
    if (event.target.value.length > 0) {
      // Sometimes key can be null
      if (event.key?.toLowerCase() === "enter") {
        if (event.target.id === "userName") {
          setUserNameText(event.target.value);
          verifyUserName(event.target.value);
        } else if (event.target.id === "password") {
          verifyUserNameAndPassword(userNameText, event.target.value);
        }
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const verifyUserName = async (userName) => {
    // Fetch using GET
    const fetchResponse = await fetch(
      `${REST_END_POINT_BASE_URL}/verifyUserName/${userName}`
    );
    const fetchResponseJson = await fetchResponse.json();
    // TODO: Check for the HTTP code status

    if (fetchResponseJson.userExists) {
      setPasswordIsVisible(true); // Show the password field
      setMessageIsVisible(false); // Hide the message div
    } else {
      // Since the user does not exist
      setPasswordIsVisible(false); // Hide the password field
      setMessageIsVisible(true); // Show the message div
      setMessageText(fetchResponseJson.message);
    }
  };

  const verifyUserNameAndPassword = async (userName, password) => {
    // Fetch using POST
    const fetchResponse = await fetch(
      `${REST_END_POINT_BASE_URL}/verifyUserNameAndPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: userName, password: password }),
      }
    );

    const fetchResponseJson = await fetchResponse.json();
    // TODO: Check for the HTTP code status

    if (fetchResponseJson.userNameAndPasswordMatches) {
      redirect();
    } else {
      setPasswordIsVisible(true); // Show the password field inorder for the user re-enter
      setMessageIsVisible(true); // Inform the user that their password is incorrect
      setMessageText(fetchResponseJson.message); // Set the correct error message
    }
  };

  const redirect = () => {
    const timeout = 5;
    const url = "https://google.com";
    setMessageIsVisible(true);
    // Flip the style since the credentials are valid
    setMessageStyle("notification is-info is-light");
    setMessageText(
      `Credentials are valid, redirecting to ${url} in ${timeout} seconds.`
    );

    // Redirect after x seconds
    setTimeout(() => {
      window.location = url;
    }, timeout * 1000);
  };

  return (
    <form onSubmit={submitHandler}>
      <section className="section">
        <div className="container">
          <div className="box">
            <article className="message">
              <div className="message-body">
                <div className="block">
                  <p>
                    This app requires a backend app: <b>Basic-Backend-App</b>.
                    If the backend app is deployed to the cloud, update the
                    value of <b>REST_END_POINT_BASE_URL</b> to the appropriate
                    url.
                  </p>
                </div>
                <div className="block">
                  <article className="message is-info">
                    <div className="message-body">
                      <p>
                        For testing, either use:&nbsp;
                        <code className="has-text-weight-bold">elon.musk</code>
                        &nbsp;or&nbsp;
                        <code className="has-text-weight-bold">bill.gates</code>
                        &nbsp;as the user name and&nbsp;
                        <code className="has-text-weight-bold">password</code>
                        &nbsp;as the password.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </article>
            <div className="field">
              <label className="label">User Name:</label>
              <div className="control">
                <input
                  onKeyDown={keyDownHandler}
                  className="input"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter your User Name"
                />
              </div>
            </div>
            <div
              style={{ display: passwordIsVisible ? "block" : "none" }}
              className="field"
            >
              <label className="label">Password:</label>
              <div className="control">
                <input
                  onKeyDown={keyDownHandler}
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div
              style={{ display: messageIsVisible ? "block" : "none" }}
              className={messageStyle}
            >
              {messageText}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Login;
