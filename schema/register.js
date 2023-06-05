import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Tam ad gereklidir.")
    .min(3, " Tam ad en az 3 karakter olmalıdır."),
  email: Yup.string().required("Email gereklidir.").email("e-posta geçersiz."),
  password: Yup.string()
    .required("şifre gereklidir.")
    .min(8, "şifre en az 8 karekter olmalıdır")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir.."
    ),
  confirmPassword: Yup.string()
    .required("Parolanın gerekli olduğunu onaylayın.")
    .oneOf([Yup.ref("şifre"), null], "Şifreler aynı olmalıdır."),
});
