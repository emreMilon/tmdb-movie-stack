import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import "../globals.scss";

export default function Footer() {
  return (
    <div className="footer">
      <AppBar position="static" color="primary" className="footer">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Movie Stack
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
