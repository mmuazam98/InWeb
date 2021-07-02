import React, { useEffect } from "react";
import "../css/Login.css";
import login from "../images/login.png";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import signup from "../images/signup.png";
function Login(props) {
  function changeFormMode(e) {
    if (e.target === document.querySelector("#signup_button")) {
      document.querySelector("#wrapper_Area").classList.add("sign-up__Mode-active");
    }
    if (e.target === document.querySelector("#signin_button")) {
      document.querySelector("#wrapper_Area").classList.remove("sign-up__Mode-active");
    }
  }
  useEffect(() => {
    document.getElementById("err").style.display = "none";

    const wrapper__Area = document.querySelector("#wrapper_Area");
    const loginForm = document.querySelector("#loginForm");
    const signUpForm = document.querySelector("#signUpForm");
    const aside__Area = document.querySelector("#aside_Area");
    const aside__SignUp_Button = document.querySelector("#aside_signUp_Btn");
    const aside__SignIn_Button = document.querySelector("#aside_signIn_Btn");
    const allLoginFormFields = Array.from(document.querySelectorAll("#loginForm .input__group .field input"));
    const allSignUpFormFields = Array.from(document.querySelectorAll("#signUpForm .input__group:not(.confirm__group) .field input"));
    const passwordField = document.querySelector("#signUpPassword");
    const confirmPassword = document.querySelector("#signUpConfirmPassword");
    // const loginFormSubmitBtn = document.querySelector("#loginSubmitBtn");
    // const signUpFormSubmitBtn = document.querySelector("#signUpSubmitBtn");
    const showHidePassDom = Array.from(document.querySelectorAll(".showHide__Icon i"));
    const patterns = {
      username: /^[a-z]+\d?/,
      email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /^[^\d\W]\w+\d?\W?\w?/i,
    };

    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      loginFormValidation();
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: document.getElementById("loginUsername").value, password: document.getElementById("loginPassword").value }),
      };
      try {
        let result = await fetch("/users/login", config);
        console.log(result);
        let data = await result.json();
        let status = await result.status;
        console.log(data);
        // console.log()
        if (status === 200) {
          document.getElementById("err").style.display = "none";

          localStorage.setItem("id", data.info._id);
          localStorage.setItem("authToken", data.token);
          props.setLoggedIn(true);
        } else {
          document.getElementById("err").style.display = "block";
        }
      } catch (err) {
        console.log(err);
      }
    });
    signUpForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      let validate = signUpFormValidation();
      if (validate === 4) {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: document.getElementById("signUpName").value, email: document.getElementById("signUpEmail").value, password: document.getElementById("signUpPassword").value }),
        };
        let result = await fetch("/users", config);
        let data = await result.json();
        let status = await result.status;
        console.log(status, data);
        if (status === 201) {
          localStorage.setItem("id", data.info._id);
          props.setLoggedIn(true);
          //   window.location.href = "/home";
        }
      }
    });
    aside__Area.addEventListener("click", chnageFormMode);
    aside__Area.addEventListener("click", chnageFormMode);

    function chnageFormMode(e) {
      if (e.target === aside__SignUp_Button) {
        wrapper__Area.classList.add("sign-up__Mode-active");
      }
      if (e.target === aside__SignIn_Button) {
        wrapper__Area.classList.remove("sign-up__Mode-active");
      }
    }
    (function showHidePass() {
      showHidePassDom.forEach((icon) => {
        icon.addEventListener("click", () => {
          const targetAreaInput = icon.parentElement.parentElement.querySelector(".field input");
          if (icon.className === "bx bx-hide") {
            icon.className = "bx bx-show";
            targetAreaInput.setAttribute("type", "text");
          } else {
            icon.className = "bx bx-hide";
            targetAreaInput.setAttribute("type", "password");
          }
        });
      });
    })();
    function loginFormValidation() {
      allLoginFormFields.forEach((input) => {
        const inputAttribueValueName = input.attributes.name.value;
        const inputValue = input.value.trim();
        const inputRegex = patterns[inputAttribueValueName].test(inputValue);
        if (inputValue === "") {
          setErrorFor(input, `${inputAttribueValueName} is required. Please enter your response.`);
        } else if (inputRegex === false) {
          setErrorFor(input, `${inputAttribueValueName} Is Invalid .`);
        } else {
          setSuccessFor(input);
        }
      });
    }
    function signUpFormValidation() {
      let count = 0;
      allSignUpFormFields.forEach((input) => {
        if (input.id !== "signUpName") {
          const passwordFieldValue = passwordField.value.trim();
          const conifrmPassValue = confirmPassword.value.trim();
          const inputAttribueValueName = input.attributes.name.value;
          const inputValue = input.value.trim();
          const inputRegex = patterns[inputAttribueValueName].test(inputValue);
          if (inputValue === "") {
            setErrorFor(input, `${inputAttribueValueName} is required. Please enter your response.`);
          } else if (inputRegex === false) {
            setErrorFor(input, `${inputAttribueValueName} Is Invalid .`);
          } else {
            setSuccessFor(input);
            count++;
          }
          if (conifrmPassValue === "") {
            setErrorFor(confirmPassword, `Confirm password is required. Please enter your response.`);
          } else if (conifrmPassValue !== passwordFieldValue) {
            setErrorFor(confirmPassword, `Confirm password does not match`);
          } else {
            setSuccessFor(confirmPassword);
            count++;
          }
        }
      });
      console.log(count);
      return count;
    }
    function setErrorFor(input, message) {
      const targetParentInput = input.parentElement.parentElement;
      const targetErrorMessage = targetParentInput.querySelector(".input__error_message");
      targetParentInput.classList.remove("formSuccess");
      targetParentInput.classList.add("formError");
      targetErrorMessage.innerHTML = message;
    }
    function setSuccessFor(input) {
      const targetParentInput = input.parentElement.parentElement;
      const targetErrorMessage = targetParentInput.querySelector(".input__error_message");
      targetParentInput.classList.remove("formError");
      targetParentInput.classList.add("formSuccess");
      targetErrorMessage.innerHTML = "";
    }
  }, [props]);
  return (
    <div className="login">
      <div className="wrapper__area" id="wrapper_Area">
        <div className="forms__area">
          <form className="login__form" id="loginForm">
            <h1 className="form__title">Sign In!</h1>
            <p id="err" className="text-center">
              <ErrorOutlineRoundedIcon /> Invalid credentials.
            </p>
            <div className="input__group">
              <label className="field">
                <input type="text" name="username" placeholder="Email" id="loginUsername" />
              </label>
              <span className="input__icon">
                <i className="bx bx-at"></i>
              </span>
              <small className="input__error_message"></small>
            </div>
            <div className="input__group">
              <label className="field">
                <input type="password" name="password" placeholder="Password" id="loginPassword" />
              </label>
              <span className="input__icon">
                <i className="bx bx-lock"></i>
              </span>
              <span className="showHide__Icon">
                <i className="bx bx-hide"></i>
              </span>
              <small className="input__error_message"></small>
            </div>
            <div className="form__actions">
              <div className="forgot_password">Forgot Password?</div>
            </div>
            <button type="submit" className="submit-button" id="loginSubmitBtn">
              Sign in
            </button>
            <div className="change-button">
              New user?
              <span onClick={changeFormMode} id="signup_button" className="md-toggler">
                Sign Up
              </span>
            </div>

            <div className="alternate-login">
              <div className="link">
                <i className="bx bxl-google"></i>
                <span>Google</span>
              </div>
              <div className="link">
                <i className="bx bxl-facebook-circle"></i>
                <span>Facebook</span>
              </div>
            </div>
          </form>

          <form className="sign-up__form" id="signUpForm">
            <h1 className="form__title">Sign Up!</h1>
            <div className="input__group">
              <label className="field">
                <input type="text" name="name" placeholder="Name" id="signUpName" />
              </label>
              <span className="input__icon">
                <i className="bx bx-user"></i>
              </span>
              <small className="input__error_message"></small>
            </div>
            <div className="input__group">
              <label className="field">
                <input type="text" name="email" placeholder="Email@example.com" id="signUpEmail" />
              </label>
              <span className="input__icon">
                <i className="bx bx-at"></i>
              </span>
              <small className="input__error_message"></small>
            </div>
            <div className="input__group">
              <label className="field">
                <input type="password" name="password" placeholder="Password" id="signUpPassword" />
              </label>
              <span className="input__icon">
                <i className="bx bx-lock"></i>
              </span>
              <span className="showHide__Icon">
                <i className="bx bx-hide"></i>
              </span>
              <small className="input__error_message"></small>
            </div>
            <div className="input__group confirm__group">
              <label className="field">
                <input type="password" name="confirm_password" placeholder="Confirm Password" id="signUpConfirmPassword" />
              </label>
              <span className="input__icon">
                <i className="bx bx-lock"></i>
              </span>
              <span className="showHide__Icon">
                <i className="bx bx-hide"></i>
              </span>
              <small className="input__error_message"></small>
            </div>
            <button type="submit" className="submit-button" id="signUpSubmitBtn">
              Sign Up
            </button>
            <div className="change-button">
              Already have an account?
              <span onClick={changeFormMode} className="md-toggler" id="signin_button">
                Sign In
              </span>
            </div>

            <div className="alternate-login">
              <div className="link">
                <i className="bx bxl-google"></i>
                <span>Google</span>
              </div>
              <div className="link">
                <i className="bx bxl-facebook-circle"></i>
                <span>Facebook</span>
              </div>
            </div>
          </form>
        </div>

        <div className="aside__area" id="aside_Area">
          <div className="login__aside-info">
            <h4>Hello</h4>
            <img src={login} alt="logo" />
            <p>Enter your personal details and start journey with us</p>
            <button id="aside_signUp_Btn">Sign Up</button>
          </div>
          <div className="sign-up__aside-info">
            <h4>Welcome</h4>
            <img src={signup} alt="logo" />
            <p>To Keep connected with us please login with your personal info</p>
            <button id="aside_signIn_Btn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
