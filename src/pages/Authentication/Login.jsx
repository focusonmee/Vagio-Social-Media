import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };

// Định nghĩa validationSchema chính xác
const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const handleSubmit = (values) => {
    console.log("handleSubmit", values);
  };
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="email"
              type="email"
              placeholder="Email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <Field
              as={TextField}
              name="password"
              type="password"
              placeholder="Password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center">
        <p>Don't have an account ?</p>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
    </>
  );
};

export default Login;
