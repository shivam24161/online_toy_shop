import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ToysIcon from "@mui/icons-material/Toys";
import PersonIcon from "@mui/icons-material/Person";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Link } from "react-router-dom";
import { userContext } from "./Mycontext";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import LogoutIcon from "@mui/icons-material/Logout";
import data from "./Data";
import NavigationIcon from "@mui/icons-material/Navigation";

const pages = ["Products"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const obj = React.useContext(userContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    obj.setCategoryItems(undefined);
  };

  // Logout user
  const logout = () => {
    obj.setcheckedloggedin(false);
  };

  // Get all Products  allproducts,setallproducts,  checkallproducts,setcheckallproducts
  const getAllProducts = () => {
    var x1 = data.building;
    var x2 = data.dolls;
    var x3 = data.gun;
    var x4 = data.vehicles;
    var x5 = data.board_games;
    var x6 = data.puzzles;
    var x7 = data.collectibles;
    const temp1 = [...x1, ...x2, ...x3, ...x4, ...x5, ...x6, ...x7];
    obj.setallproducts([...temp1]);
    obj.setallproducts1([...temp1]);
    obj.setcheckallproducts(true);
  };
  
  var mybutton = document.getElementById("myBtn");
  // When the user scrolls down , show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 380 ||
      document.documentElement.scrollTop > 380
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#E72B61" }} id="appBar">
      <Button onClick={topFunction} id="myBtn" title="Go to top">
        <NavigationIcon />
      </Button>

      <Container maxWidth="xl">
        <Toolbar>
          <Link to="/" id="icon_link">
            <ToysIcon
              sx={{
                display: { xs: "none", md: "flex", fontSize: "4vw" },
                mr: 1,
              }}
            />
          </Link>
          <Link to="/" id="icon_link">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "1.5vw",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TOYSHOP
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to="/product" sx={{ color: "whitesmoke" }} id="link1">
                    <Typography
                      textAlign="center"
                      onClick={getAllProducts}
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        fontSize: "2vw",
                        fontWeight: "bold",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/" id="icon_link">
            <ToysIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          </Link>
          <Link to="/" id="icon_link">
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
                fontSIze: "1.5vw",
              }}
            >
              TOYSHOP
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to="/product" sx={{ textDecoration: "none" }} id="link1">
                <Button
                  key={page}
                  onClick={getAllProducts}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                    fontSize: "1vw",
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* Displaying login user name */}
            {obj.checkloggedin === true ? (
              <>
                <span className="login_name">Hii {obj.loginname}</span>
              </>
            ) : (
              <></>
            )}
            <Tooltip title="Home">
              <IconButton sx={{ paddingLeft: "2vh", color: "white" }}>
                <Link to="/" id="link">
                  <HouseSidingIcon sx={{ fontSize: "6vh" }} />
                </Link>
              </IconButton>
            </Tooltip>
            {obj.checkloggedin === true ? (
              <>
                <Tooltip title="Cart">
                  <IconButton sx={{ paddingLeft: "2vh", color: "white" }}>
                    <Link to="/cart" id="link">
                      <Badge
                        badgeContent={obj.cartitems.length}
                        color="primary"
                        sx={{fontSize:"2vw"}}
                      >
                        <ShoppingCartIcon sx={{ fontSize: "6vh" }} />
                      </Badge>
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Logout">
                  <IconButton sx={{ paddingLeft: "2vh", color: "white" }}>
                    <LogoutIcon sx={{ fontSize: "6vh" }} onClick={logout} />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Login / Signup">
                  <IconButton sx={{ paddingLeft: "2vh", color: "white" }}>
                    <Link to="/login" id="link">
                      <PersonIcon sx={{ fontSize: "6vh" }} />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Cart">
                  <IconButton sx={{ paddingLeft: "2vh", color: "white" }}>
                    <Link to="/cart" id="link">
                      <Badge
                        badgeContent={obj.cartitems.length}
                        color="primary"
                        sx={{fontSize:"2vw"}}
                      >
                        <ShoppingCartIcon sx={{ fontSize: "6vh" }} />
                      </Badge>
                    </Link>
                  </IconButton>
                </Tooltip>
              </>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
