import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please Enter your password")
    .test(
      "regex",
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
      (val) => {
        let regExp = new RegExp(
          "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
        );
        // console.log(regExp.test(val), regExp, val);
        return regExp.test(val);
      }
    ),
  confirm: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default FormSchema;
