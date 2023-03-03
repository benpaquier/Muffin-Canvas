import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { CUSTOMER_LOGIN_WITH_CREDENTIALS } from "../api/graphql/customers/mutations";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const [customerLoginWithCredentials, { loading, error, data }] = useMutation(
    CUSTOMER_LOGIN_WITH_CREDENTIALS
  );

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(userData);
    customerLoginWithCredentials({
      variables: {
        input: userData,
      },
    });
    if (data?.customerAccessTokenCreate?.customerAccessToken) {
      setSuccess(true);
      // set the token in local storage
      localStorage.setItem(
        "userToken",
        data.customerAccessTokenCreate.customerAccessToken.accessToken
      );
      navigate("/");
    }
  };

  return (
    <>
      <Button>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </Button>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                e.preventDefault();
                handleSubmitLogin(e);
              }}
            >
              Sign In
            </Button>
            {error && <p>{error.message}</p>}
            {loading && <p>Loading...</p>}
            <Grid container>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
