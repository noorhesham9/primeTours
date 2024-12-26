import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
function login({ setToken }) {
  const initialValues = {
    email: "",
    password: "",
  };

  const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const handleLoginSubmit = async (values) => {
    await axios
      .post("/admin/login", values)
      .then((response) => {
        console.log(response.data);
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Invalid email or password");
      });
  };

  return (
    <>
      <Header sectionn={true} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 178.5px)",
          backgroundColor: "#f5f5f5",
          padding: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%", maxWidth: 400 }}>
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Footer />
    </>
  );
}

export default login;
