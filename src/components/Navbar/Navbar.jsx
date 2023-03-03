import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUser(true);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "teal" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Muffin Canvas
              </Link>
            </Button>
          </Typography>
          <Button color="inherit" sx={{ fontSize: "12px" }}>
            {user ? (
              <Link
                to="/profil"
                style={{ textDecoration: "none", color: "white" }}
              >
                <AccountCircleIcon />
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            )}
          </Button>
          <Button color="inherit">
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
