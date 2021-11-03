import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../styles/Progress.scss";

export default function CircularIndeterminate() {
  return (
    <Box className="progress">
      <CircularProgress />
    </Box>
  );
}
