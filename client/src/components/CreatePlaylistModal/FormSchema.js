import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("The playlist title is required"),
  description: Yup.string()
    .min(2, "Too short")
    .max(200, "Too long")
    .required("The description is required"),
  private: Yup.string().required("This field is required"),
});

export default FormSchema;
