import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("Email gerekli.").email("Email geçersiz."),
  password: Yup.string()
    .required("şifre gerekli.")
    .min(8, "şifre en az 8 karekter olmalı."),
});
