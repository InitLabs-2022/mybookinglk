import { Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const signUpSchema = yup.object({
  email: yup.string().email("Must be a valid email").required().label("Email"),
  name: yup.string().required().label("Name"),
  password: yup.string().min(8).required().label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required()
    .label("Confirm Password"),
});

const SignUpScreen = () => {
  return (
    <div className="center">
      <Typography variant="h5">Sign Up to My Booking</Typography>
      <Formik
        onSubmit={(e) => console.log(e)}
        validationSchema={signUpSchema}
        initialValues={{
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {({ handleChange, handleBlur, errors, handleSubmit }) => (
          <form className="display-content" onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email)}
              helperText={errors.email}
              label="Email"
              className="text-field"
              type="email"
              name="email"
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.name)}
              helperText={errors.name}
              label="Name"
              className="text-field"
              name="name"
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.password)}
              helperText={errors.password}
              label="Password"
              className="text-field"
              type="password"
              name="password"
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
              label="Confirm Password"
              className="text-field"
              type="password"
              name="confirmPassword"
            />
            <Button variant="contained">SIGN UP</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpScreen;
