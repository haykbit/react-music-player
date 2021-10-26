import * as Yup from "yup";

const RecoverySchema = Yup.object().shape({
  email: Yup.string().email().required("Please Enter your Email"),
});

export default RecoverySchema;
