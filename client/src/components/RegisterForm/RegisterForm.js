/* import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerWithEmailAndPassword } from "../../redux/auth/action";
import "./style/RegisterForm.scss";

function RegisterForm() {
  

  const dispatch = useDispatch();

  
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <form className="register-box" onSubmit={handleSubmit}>
      <div>Register</div>
      <div></div>
      <div>Name</div>
      <div>
        Password
        <input value={password} onChange={handleChange} name="password" />
      </div>
      <div>Surname</div>
      <div>Confirm Password</div>
      <div>
        Email
        <input value={email} name="email" onChange={handleChange} />
      </div>
      <div></div>
      <div>
        <button>Register Button</button>
      </div>
    </form> */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../Input/index";
import Button from "../Buttons/index";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import "./style/RegisterForm.scss";
import { registerWithEmailAndPassword } from "../../redux/auth/action";

import { getAuth } from "firebase/auth";

const auth = getAuth();

function RegisterForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;

  let history = useHistory();
  const dispatch = useDispatch();

  const handleRegisterSubmit = (event) => {
    //event.preventDefault();
    console.log(email, "EMAIL");
    console.log(password, "PASS");
    dispatch(registerWithEmailAndPassword(auth, email, password));
  };

  const handleRegisterChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  return (
    <Formik
      onSubmit={(values) => {
        //history.push("/home-page");
        console.log(values);
        console.log("Form Submitted");
        handleRegisterSubmit();
      }}
      onChange={(values) => {
        console.log(values, "OnChange values");
        handleRegisterChange(values);
      }}
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
        checkboxOne: false,
        checkboxTwo: false,
      }}
      validationSchema={FormSchema}
    >
      {({
        errors,
        values,
        touched,
        isValidating,
        isValid,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="register-box">
            <div className="text">Register</div>
            <div className="space"></div>
            <Input
              className="register-inputs name"
              type="text"
              name="name"
              label=""
              value={values.name}
              placeholder="Name"
              handleChange={(e) => {
                handleChange(e);
                handleRegisterChange(e);
              }}
              handleBlur={handleBlur}
              hasErrorMessage={touched.name}
              errorMessage={errors.name}
            />
            <Input
              className="register-inputs surname"
              type="text"
              name="surname"
              label=""
              value={values.surname}
              placeholder="Surname"
              handleChange={(e) => {
                handleChange(e);
                handleRegisterChange(e);
              }}
              handleBlur={handleBlur}
              hasErrorMessage={touched.surname}
              errorMessage={errors.surname}
            />
            <Input
              className="register-inputs password"
              type="password"
              name="password"
              label=""
              value={values.password}
              placeholder="Password"
              handleChange={(e) => {
                handleChange(e);
                handleRegisterChange(e);
              }}
              handleBlur={handleBlur}
              hasErrorMessage={touched.password}
              errorMessage={errors.password}
            />

            <Input
              className="register-inputs cpassword"
              name="confirm"
              label=""
              placeholder="Confirm password"
              type="password"
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              hasErrorMessage={touched.confirm}
              errorMessage={errors.confirm}
            />
            <Input
              className="register-inputs email"
              name="email"
              placeholder="Email"
              label=""
              type="email"
              value={values.email}
              handleChange={(e) => {
                handleChange(e);
                handleRegisterChange(e);
              }}
              onBlur={handleBlur}
              hasErrorMessage={touched.email}
              errorMessage={errors.email}
            />
            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  name="checkboxOne"
                  value={values.checkboxOne}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>I accept privacy polices</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="checkboxTwo"
                  value={values.checkboxTwo}
                  onChange={handleChange}
                />
                <span>Subscribe to our newsletter</span>
              </label>
              {errors.checkboxOne && (
                <div className="errorMessage">{errors.checkboxOne}</div>
              )}
            </div>

            {/* <button className="register-inputs button">Register</button> */}
            {/* <Link to="home-page"> */}
            <Button
              submitButton
              disabled={isValidating || !isValid}
              className="register-inputs button"
            >
              Register
            </Button>
            {/* </Link> */}

            <div>
              <p className="info">
                * Your data will be saved on a secured server
              </p>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
