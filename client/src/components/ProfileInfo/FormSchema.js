import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Please Enter your current password")
    .test(
      "regex",
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
      (val) => {
        let regExp = new RegExp(
          "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
        );
        return regExp.test(val);
      }
    ),
  newPassword: Yup.string()
    .required("Please Enter your password")
    .test(
      "regex",
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
      (val) => {
        let regExp = new RegExp(
          "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
        );
        return regExp.test(val);
      }
    ),
  confirm: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export default FormSchema;
