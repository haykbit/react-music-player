import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(80, "Too long")
    .required("The song title is required"),
  artist: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("The song artist is required"),
  album: Yup.string().min(2, "Too short").max(50, "Too long"),
  genre: Yup.string().required("The song genre is required"),
});

export default FormSchema;
