import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/index";
import Button from "../Buttons/index";
import Checkbox from "../Input/Checkboxes/index";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import "./style/RegisterForm.scss";
import { registerWithEmailAndPassword } from "../../redux/auth/action";

function RegisterArtistForm() {
  let history = useHistory();
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.auth.registerSuccess);

  useEffect(() => {
    if (registerState) {
      history.push("/login");
    }
  }, [registerState, history]);
  return (
    <Formik
      onSubmit={(values) => {
        dispatch(
          registerWithEmailAndPassword(values.email, values.password, {
            firstName: values.name,
            lastName: values.surname,
            artist: values.artist,
          })
        );
      }}
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
        artist: true,
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
            <div className="text">Artist</div>
            <div className="space"></div>
            <Input
              className="register-inputs name"
              type="text"
              name="name"
              label=""
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
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
              autoComplete="on"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.password}
              errorMessage={errors.password}
            />

            <Input
              className="register-inputs cpassword"
              name="confirm"
              label=""
              autoComplete="on"
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
              }}
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

            <Button
              submitButton
              disabled={isValidating || !isValid}
              className="register-inputs button"
            >
              Register
            </Button>

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

export default RegisterArtistForm;
