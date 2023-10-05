import Button2 from "@/components/global/common/button2";
import React, { useEffect, useState } from "react";
import {
  validateLoginForm,
  validateSignupForm,
} from "../../../public/js/LoginValidation";
import { useRouter } from "next/router";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";

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
    showPassword: false,
  });

  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    showPassword: false,
  });

  const [mobileInput, setMobileInput] = useState<any>("");
  const [loginErrors, setLoginErrors] = useState<any>({});
  const [signupErrors, setSignupErrors] = useState<any>({});
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateLoginForm(loginForm.username, loginForm.password);
    if (Object.keys(errors).length === 0 && isValid) {
      router.push("/");
    } else {
      setLoginErrors(errors);
    }
  };

  const handleSignupSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateSignupForm(
      signupForm.username,
      signupForm.email,
      signupForm.mobile,
      signupForm.password
    );
    if (Object.keys(errors).length === 0) {
      router.push("/");
    } else {
      setSignupErrors(errors);
    }
  };

  const handlePasswordToggle = (formType: string) => {
    if (formType === "login") {
      setLoginForm({ ...loginForm, showPassword: !loginForm.showPassword });
    } else if (formType === "signup") {
      setSignupForm({ ...signupForm, showPassword: !signupForm.showPassword });
    }
  };


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>, formType: string) => {
    const eventValue = e.target.value; // Get the event value
    let newPasswordLogin = loginForm.password; // Initialize newPassword for login form
    let newPasswordSignup = signupForm.password; // Initialize newPassword for signup form
  
    if (formType === "login") {
      newPasswordLogin = eventValue; // Update newPassword for login form
    } else if (formType === "signup") {
      newPasswordSignup = eventValue; // Update newPassword for signup form
    }
  
    setPassword(eventValue); // Set password to the current event value
  
    // Check if the password meets all the criteria
    const hasLowerCase = /[a-z]/.test(eventValue);
    const hasUpperCase = /[A-Z]/.test(eventValue);
    const hasNumber = /\d/.test(eventValue);
    const hasSpecialChar = /[\W_]/.test(eventValue);
    const isMinLength = eventValue.length >= 8;
  
    const conditionsMet = [
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      hasSpecialChar,
      isMinLength,
    ];
    const conditionsPassed =
      conditionsMet.filter((condition) => condition).length === 5;
  
    setIsValid(conditionsPassed);
  
    // Update the appropriate form's password state
    if (formType === "login") {
      setLoginForm({ ...loginForm, password: newPasswordLogin });
    } else if (formType === "signup") {
      setSignupForm({ ...signupForm, password: newPasswordSignup });
    }
  };

  let conditionsPassed: any;
  const getProgressBarColor = () => {
    const conditionsMet = [
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /\d/.test(password),
      /[\W_]/.test(password),
      password.length >= 8,
    ];
    conditionsPassed = conditionsMet.filter((condition) => condition).length;

    const width = (conditionsPassed / 5) * 100;

    if (width <= 40) {
      return "bg-red-400";
    } else if (width > 40 && width <= 80) {
      return "bg-yellow-400";
    } else {
      return "bg-green-400";
    }
  };

  const progressBarColor = getProgressBarColor();

  const handleLoginInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
    // Clear the error when the input changes
    setLoginErrors({ ...loginErrors, [name]: "" });
  };

  const handleSignupInputChange = (e: any) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
    // Clear the error when the input changes
    setSignupErrors({ ...signupErrors, [name]: "" });
  };

  return (
    <>
      <div className="container dark:bg-[#191919] transition-all ease-in duration-500">
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="#"
              className="sign-in-form form"
              onSubmit={handleLoginSubmit}
            >
              <h2 className="title dark:text-white">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginForm.username}
                  onChange={(e) => {
                    setLoginForm({ ...loginForm, username: e.target.value });
                    handleLoginInputChange(e);
                  }}
                />
              </div>
              {loginErrors.username && (
                <p className="error dark:font-semibold">
                  <i className="fa fa-info-circle text-danger"></i>&nbsp;
                  {loginErrors.username}
                </p>
              )}

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type={loginForm.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={loginForm.password}
                  onChange={(e) => handlePasswordChange(e, "login")}
                />
                <i
                  className={`fas ${
                    loginForm.showPassword ? "fa-eye-slash" : "fa-eye"
                  } password-toggle-icon`}
                  onClick={() => handlePasswordToggle("login")}
                ></i>
              </div>
              {loginErrors.password && (
                <p className="error dark:font-semibold">
                  <i className="fa fa-info-circle text-danger"></i>&nbsp;
                  {loginErrors.password}
                </p>
              )}
              {loginForm.password && (
                <div className="w-full px-3 md:px-6">
                  <div className="mt-1">
                    <div className="w-full h-1 bg-gray-300 rounded-full">
                      <div
                        className={`h-full rounded-full ${progressBarColor}`}
                        style={{
                          width: `${(conditionsPassed / 5) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  {!isValid && (
                    <>
                      <div className="mt-2">
                        <ul className="list-inside passPoints">
                          <li
                            className={`${
                              /[a-z]/.test(password) && /[A-Z]/.test(password)
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck /> 1 lowercase & 1 uppercase
                          </li>
                          <li
                            className={`${
                              /\d/.test(password)
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck />1 Number (0-9)
                          </li>
                          <li
                            className={`${
                              /[\W_]/.test(password)
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck />1 Special Character (!@#$%^&*)
                          </li>
                          <li
                            className={`${
                              password.length >= 8
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck /> Atleast 8 Character
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
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
              className="sign-up-form form"
              onSubmit={handleSignupSubmit}
            >
              <h2 className="title dark:text-white">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={signupForm.username}
                  onChange={(e) => {
                    setSignupForm({ ...signupForm, username: e.target.value });
                    handleSignupInputChange(e);
                  }}
                />
              </div>
              {signupErrors.username && (
                <p className="error dark:font-semibold">
                  <i className="fa fa-info-circle text-danger"></i>&nbsp;
                  {signupErrors.username}
                </p>
              )}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="mail"
                  name="email"
                  placeholder="Email"
                  value={signupForm.email}
                  onChange={(e) => {
                    setSignupForm({ ...signupForm, email: e.target.value });
                    handleSignupInputChange(e);
                  }}
                />
              </div>
              {signupErrors.email && (
                <p className="error dark:font-semibold">
                  <i className="fa fa-info-circle text-danger"></i>&nbsp;
                  {signupErrors.email}
                </p>
              )}
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="tel" // Change the input type to "tel" for phone numbers
                  placeholder="Phone"
                  name="mobile"
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
                    handleSignupInputChange(e);
                  }}
                />
              </div>
              {signupErrors.mobile && (
                <p className="error dark:font-semibold">
                  <i className="fa fa-info-circle text-danger"></i>&nbsp;
                  {signupErrors.mobile}
                </p>
              )}

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type={signupForm.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={signupForm.password}
                  onChange={(e) => handlePasswordChange(e, "signup")}
                />
                <i
                  className={`fas ${
                    signupForm.showPassword ? "fa-eye-slash" : "fa-eye"
                  } password-toggle-icon`}
                  onClick={() => handlePasswordToggle("signup")}
                ></i>
              </div>

              {signupErrors.password && (
                <p className="error dark:font-semibold">
                  <i className="fa fa-info-circle text-danger"></i>&nbsp;
                  {signupErrors.password}
                </p>
              )}
              {signupForm.password && (
                <div className="w-full px-3 md:px-6">
                  {!isValid && (
                    <>
                      <div className="mt-1">
                        <div className="w-full h-1 bg-gray-300 rounded-full">
                          <div
                            className={`h-full rounded-full ${progressBarColor}`}
                            style={{
                              width: `${(conditionsPassed / 5) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-inside passPoints">
                          <li
                            className={`${
                              /[a-z]/.test(password) && /[A-Z]/.test(password)
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck /> 1 lowercase & 1 uppercase
                          </li>
                          <li
                            className={`${
                              /\d/.test(password)
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck />1 Number (0-9)
                          </li>
                          <li
                            className={`${
                              /[\W_]/.test(password)
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck />1 Special Character (!@#$%^&*)
                          </li>
                          <li
                            className={`${
                              password.length >= 8
                                ? "text-green-500"
                                : "text-gray-300"
                            }`}
                          >
                            <FaCheck /> Atleast 8 Character
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
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
