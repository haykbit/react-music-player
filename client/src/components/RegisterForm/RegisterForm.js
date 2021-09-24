import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../Input/index";
import Button from "../Buttons/index";
import Checkbox from "../Input/Checkboxes/index";
import { Formik } from "formik";
// import { Link } from "react-router-dom";
import FormSchema from "./FormSchema";
import "./style/RegisterForm.scss";

function RegisterForm() {
  let history = useHistory();
  return (
    <Formik
      onSubmit={(values) => {
        history.push("/home-page");
        console.log(values);
        console.log("Form Submitted");
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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
              onChange={handleChange}
              onBlur={handleBlur}
              hasErrorMessage={touched.email}
              errorMessage={errors.email}
            />
            <div className="checkboxes">
              <label>
                <Checkbox
                  name="checkboxOne"
                  className="checkboxOne"
                  type="checkbox"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // hasErrorMessage={touched.checkboxOne}
                  // errorMessage={errors.checkboxOne}
                />

                <span>I accept privacy polices</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkboxTwo"
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
