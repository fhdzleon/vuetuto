import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Debe ingresar su nombre"),
  email: yup
    .string()
    .email("Debe ingresar un correo valido")
    .required("Debe ingresar su correo "),
});
