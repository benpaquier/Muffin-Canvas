import React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useMutation } from "@apollo/client";

import { CUSTOMER_CREATE } from "../api/graphql/customers/mutations";

import { useState } from "react";
import SignUpUtil from "../components/utils/SignUpUtil.jsx";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const [customerCreate, { loading, error, data }] =
    useMutation(CUSTOMER_CREATE);

  const signUpValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const signUpForm = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signUpValidationSchema,
      onSubmit: (values) => {
        customerCreate({
          variables: {
            input: {
              email: values.email,
              password: values.password,
            },
          },
        });
        if (data?.customerAccessTokenCreate?.customerAccessToken) {
          navigate("/");
        }
      },
    });
  };

  // const [success, setSuccess] = useState(false);
  // const [apiLoading, setApiLoading] = useState(false);

  // const handleSubmitSignUp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await customerCreate({
  //       variables: {
  //         input: {
  //           email: formik.values.email,
  //           password: formik.values.password,
  //         },
  //       },
  //     });
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Button>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </Button>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            margin: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <form onSubmit={formik.handleSubmit}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    autoComplete="email"
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                      console.log(userData);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                  />
                </Grid>
              </form>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                e.preventDefault();
                handleSubmitSignUp(e);
              }}
            >
              Sign Up
            </Button>
            {error && <p>{error.message}</p>}
            {loading && <p>Loading...</p>}
            {success && <p>Customer created !</p>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <SignUpUtil />
    </>
  );
};

export default Login;
