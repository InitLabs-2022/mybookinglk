import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

export const isEmail = (val: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val);
};

const LoginScreen = () => {
  // Step 1: Initialize Formik Component
  // Step 2: Pass parameters to the text fields
  // Step 3: Define Validations

  return (
    <div className="center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(e) => console.log(e)}
        validate={(v) => {
          const email = v.email;
          const password = v.password;

          const errors: any = {};

          if (email.length === 0) errors.email = "Email Required";
          else if (!isEmail(email)) errors.email = "Invalid Email";
          if (password.length === 0) errors.password = "Password Required";
          else if (password.length < 8)
            errors.password = "Password length must be greater than 8";
          return errors;
        }}
      >
        {({ handleChange, handleBlur, errors, handleSubmit }) => (
          <form className="display-content" onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email)}
              helperText={errors.email}
              name="email"
              className="text-field"
              label="Email"
              variant="filled"
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.password)}
              helperText={errors.password}
              name="password"
              className="text-field"
              label="Password"
              variant="filled"
            />
            <Button type="submit" variant="contained">
              LOGIN
            </Button>
            <Button type="submit" variant="text" style={{marginTop: 10}} component={Link} to="/signup">
              SIGN UP NOW
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginScreen;
