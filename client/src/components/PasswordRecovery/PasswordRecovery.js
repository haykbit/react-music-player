import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { sendPasswordResetEmailToUser } from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import RecoverySchema from "./RecoverySchema";
import Input from "../Input";
import Buttons from "../Buttons";

function PasswordRecovery() {
  const dispatch = useDispatch();
  const history = useHistory();
  const resetState = useSelector((state) => state.auth.passwordResetDone);

  useEffect(() => {
    if (resetState) {
      history.push("/login");
    }
  }, [resetState, history]);

  return (
    <Formik
      onSubmit={(values) => {
        try {
          dispatch(sendPasswordResetEmailToUser(values.email));
        } catch (err) {
          console.log(err.response.data);
        }
      }}
      initialValues={{
        email: "",
      }}
      validationSchema={RecoverySchema}
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
        <div className="recoveryModal">
          <form onSubmit={handleSubmit}>
            <Input
              className="reset-inputs email"
              name="email"
              placeholder="Email"
              label=""
              type="email"
              value={values.email}
              handleChange={handleChange}
              onBlur={handleBlur}
              hasErrorMessage={touched.email}
              errorMessage={errors.email}
            />
            <p>
              Please enter your email address to receive a recovery message.
            </p>
            <Buttons type="submit">Recover password</Buttons>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default PasswordRecovery;
