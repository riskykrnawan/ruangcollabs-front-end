import React from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Input from './Input';

function Login() {
  const TITLE = 'Login';
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-85 p-b-20">
            <form className="login100-form validate-form" action="/login" method="post">
              <span className="login100-form-title p-b-70">
                Sign-in
              </span>

              <div className="m-b-50">
                <span className="login100-form-avatar">
                  <img src="./images/unmul.png" className="" alt="AVATAR" />
                </span>
              </div>

              <Input validateText="Enter Username" type="text" name="username" placeholder="Username" />
              <Input validateText="Enter Password" type="password" name="password" placeholder="Password" />

              <Button className="login100-form-btn border-0 m-t-40 bg-2">Sign-in</Button>

              <ul className="login-more p-t-100">
                <li>
                  <span className="txt1">Forgot </span>
                  <a href="/#" className="txt2">Password?</a>
                </li>
                <li>
                  <span className="txt1">Don’t have an account? </span>
                  <Link to="/register">
                    <span className="txt2">
                      Sign Up
                    </span>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
