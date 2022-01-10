import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const LoginForm = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        alert("Successful Login!! 🎉🎉");
      }}
    >
      {(formik) => (
        <div>
          <h1>Log In</h1>
          <Form className="login_text">
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button type="submit">Login</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default LoginForm;
