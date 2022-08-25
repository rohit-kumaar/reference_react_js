import React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const ForgotPassword = () => {
  return (
    <>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
