import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Your name is required"),
  surname: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Your surname is required"),
  password: Yup.string()
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
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  email: Yup.string().email().required("Please Enter your Email"),
  checkboxOne: Yup.boolean().oneOf(
    [true],
    "You must accept our privacy polices to continue"
  ),
});

export default FormSchema;
