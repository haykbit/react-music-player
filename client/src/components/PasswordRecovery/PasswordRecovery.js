import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { sendPasswordResetEmailToUser } from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import RecoverySchema from "./RecoverySchema";
import Input from "../Input";
import Buttons from "../Buttons";
import "./style/passwordRecovery.scss";

function PasswordRecovery(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const resetState = useSelector((state) => state.auth.passwordResetDone);

  const { recoverOff } = props;

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
          recoverOff();
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
        <div className="recovery-section">
          <form className="login-form" onSubmit={handleSubmit}>
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
            <p className="recovery-message">
              Enter your email address to receive a recovery link.
            </p>
            <Buttons className="login-btn" type="submit">
              Recover password
            </Buttons>
          </form>
          <Buttons className="register-btn" onClick={recoverOff}>
            Go back
          </Buttons>
        </div>
      )}
    </Formik>
  );
}

export default PasswordRecovery;
