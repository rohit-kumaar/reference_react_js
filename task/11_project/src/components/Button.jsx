import React from "react";
import Button from "@mui/material/Button";

const Btn = (props) => {
  return (
    <>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {props.name}
      </Button>
    </>
  );
};

export default Btn;
