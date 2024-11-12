import { Form, Field, Formik, ErrorMessage } from "formik";
import React from "react";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  gender: yup.string().required("Gender is required"),
});

const Register = () => {
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
        {({ handleChange, setFieldValue }) => (
          <Form className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="firstName"
                type="text"
                placeholder="First Name"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="firstName"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                type="text"
                placeholder="Last Name"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component={"div"}
                className="text-red-500"
              />
            </div>
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
                component={"div"}
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
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                onChange={(event) =>
                  setFieldValue("gender", event.target.value)
                }
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              <ErrorMessage
                name="gender"
                component={"div"}
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-2 items-center justify-center">
        <p>Already have an account ?</p>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </>
  );
};

export default Register;
