import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("isim soyisim gerekli.")
    .min(3, "isim soyisim en az 3 karekter olamlı."),
  email: Yup.string().required("Email gerekli.").email("Email geçersiz."),
  password: Yup.string()
    .required("şifre gerekli.")
    .min(8, "şifre en az 8 karekter olmalı."),
  confirmPassword: Yup.string()
    .required("şifrenin gerekli olduğnu onaylayın.")
    .oneOf([Yup.ref("password"), null], "şifreler aynı olmalı."),
});
