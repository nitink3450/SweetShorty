import Button2 from "@/components/global/common/button2";
import React, { useEffect, useState } from "react";
import {
  validateLoginForm,
  validateSignupForm,
} from "../../../public/js/LoginValidation";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    const addSignUpMode = () => {
      container?.classList.add("sign-up-mode");
    };

    const removeSignUpMode = () => {
      container?.classList.remove("sign-up-mode");
    };

    sign_up_btn?.addEventListener("click", addSignUpMode);
    sign_in_btn?.addEventListener("click", removeSignUpMode);

    return () => {
      // Cleanup event listeners when the component unmounts
      sign_up_btn?.removeEventListener("click", addSignUpMode);
      sign_in_btn?.removeEventListener("click", removeSignUpMode);
    };
  }, []);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [mobileInput, setMobileInput] = useState<any>("");
  const [loginErrors, setLoginErrors] = useState<any>("");
  const [signupErrors, setSignupErrors] = useState<any>("");

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateLoginForm(loginForm.username, loginForm.password);
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can perform login logic here
      router.push("/");
    } else {
      setLoginErrors(errors);
    }
  };

  const handleSignupSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateSignupForm(
      signupForm.username,
      signupForm.mobile,
      signupForm.email,
      signupForm.password
    );
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can perform signup logic here
      router.push("/");
    } else {
      setSignupErrors(errors);
    }
  };

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="#"
              className="sign-in-form"
              onSubmit={handleLoginSubmit}
            >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                />
              </div>
              {loginErrors.username && (
                <p className="error">{loginErrors.username}</p>
              )}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
              {loginErrors.password && (
                <p className="error">{loginErrors.password}</p>
              )}
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form
              action="#"
              className="sign-up-form"
              onSubmit={handleSignupSubmit}
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={signupForm.username}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, username: e.target.value })
                  }
                />
              </div>
              {signupErrors.username && (
                <p className="error">{signupErrors.username}</p>
              )}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  value={signupForm.email}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, email: e.target.value })
                  }
                />
              </div>
              {signupErrors.email && (
                <p className="error">{signupErrors.email}</p>
              )}
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="tel" // Change the input type to "tel" for phone numbers
                  placeholder="Phone"
                  maxLength={14}
                  minLength={14}
                  value={mobileInput}
                  onFocus={() => setMobileInput("+91 ")}
                  onBlur={() => {
                    if (mobileInput === "+91 ") {
                      setMobileInput("");
                    }
                  }}
                  onChange={(e) => {
                    setMobileInput(e.target.value);
                    setSignupForm({ ...signupForm, mobile: e.target.value });
                  }}
                />
              </div>
              {signupErrors.mobile && (
                <p className="error">{signupErrors.mobile}</p>
              )}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={signupForm.password}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, password: e.target.value })
                  }
                />
              </div>
              {signupErrors.password && (
                <p className="error">{signupErrors.password}</p>
              )}
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Are you new here?</h3>
              <p>
                {`We're thrilled to have you join us on this exciting journey. Sign up now and become a part of our vibrant community!`}
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src="/login.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                {` Welcome back, esteemed member! We're thrilled to see you again. Sign in now to continue your journey with us`}
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
