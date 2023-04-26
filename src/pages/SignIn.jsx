import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <TwitterIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ marginTop: "2rem", fontSize: "2rem" }}
          >
            Sign in to Twitter
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mt: "20px",
              borderRadius: "60px",
              width: "25rem",
              height: "3rem",
              color: "#3c4043",
              textTransform: "none",
            }}
          >
            <GoogleIcon sx={{ marginRight: "5px" }} />
            Sign in with Google
          </Button>

          <Button
            variant="outlined"
            sx={{
              mt: "20px",
              borderRadius: "60px",
              width: "25rem",
              height: "3rem",
              color: "black",
              textTransform: "none",
            }}
          >
            <AppleIcon sx={{ marginRight: "5px" }} />
            Sign in with Apple
            
          </Button>
          <Typography sx={{mt:"1rem"}}>
           or
          </Typography>
         
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Phone, email or username"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              placeholder="Password"
              autoFocus
            />

            <Button
              variant="outlined"
              sx={{
                mt: "20px",
                borderRadius: "60px",
                width: "25rem",
                height: "3rem",
                color: "white",
                backgroundColor: "black",
                
              }}
            >
              Sign In
            </Button>

            <Button
              variant="outlined"
              sx={{
                mt: "20px",
                borderRadius: "60px",
                width: "25rem",
                height: "3rem",
                color: "black",
              }}
            >
              Forgot password?
            </Button>

            <Grid container>
              <Grid item sx={{ marginTop: "3rem" }}>
                <span>Don't have an account?</span>
                <Link href="#" variant="body2">
                  <span>Sign up</span>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
