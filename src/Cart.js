import { useContext, useState } from "react";
import { userContext } from "./Mycontext";
import * as React from "react";
import "./Cart.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";
import Dialog from "@mui/material/Dialog";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#A73E3E",
  color: "white",
  boxShadow: 24,
  p: 4,
};
const Cart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [idd, setidd] = useState(0);
  const [errortext, seterrortext] = useState();
  const [openerror, setopenerror] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [totalAmount, settotalAmount] = useState(0);
  const [openCheck, setopenCheck] = React.useState(false);

  const handleClose = () => {
    obj.setOpen(false);
  };
  const handleCloseCheck = () => {
    setopenCheck(false);
  };

  const handleClickOpenCheck = () => {
    if (obj.checkloggedin === false) {
      setopenerror(true);
      seterrortext("Please login first");
    } else {
      setopenCheck(true);
    }
  };

  const openempty = Boolean(anchorEl1);
  const handleClickEmpty = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseEmpty = () => {
    setAnchorEl1(null);
  };

  const obj = useContext(userContext);
  const handleCloseorder = () => {
    setopenerror(false);
  };
  // Total Amount total,settotal
  React.useEffect(() => {
    var temp = 0;
    obj.cartitems.map((data) => {
      temp += parseInt(data.total_price);
      return null;
    });
    settotalAmount(temp);
  }, [obj.cartitems]);

  // Checkout
  const checkout = () => {
    let address = document.getElementById("user_address").value;
    if (address === "") {
      setopenerror(true);
      seterrortext("Please provide address");
    } else {
      setopenerror(true);
      seterrortext("Thank you , your order has been placed!");
      setopenCheck(false);
      obj.setcartitems([]);
    }
  };
  // Delete Items  cartitems,setcartitems,userdetails
  const deleteItems = () => {
    let id = parseInt(idd);
    const items = obj.cartitems.filter((i) => i.unique_id !== id);
    obj.cartitems.map((i) => {
      if (i.unique_id === id) {
        i.quantity = 1;
        i.total_price = i.quantity * i.price;
        obj.setcartitems([...items]);
      }
      return null;
    });
    setAnchorEl(null);
  };

  // Empty cart
  const emptyCart = () => {
    obj.cartitems.map((i) => {
      i.quantity = 1;
      obj.setcartitems([]);
      return null;
    });
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    obj.cartitems.map((i) => {
      if (i.unique_id === id) {
        if (i.quantity > 1) {
          i.quantity = i.quantity - 1;
          i.total_price = i.quantity * i.price;
          obj.setcartitems([...obj.cartitems]);
        }
      }
      return null;
    });
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    obj.cartitems.map((i) => {
      if (i.unique_id === id) {
        i.quantity = i.quantity + 1;
        i.total_price = i.quantity * i.price;
        obj.setcartitems([...obj.cartitems]);
      }
      return null;
    });
  };
  // Delete Confirm
  const handleClickDel = (event) => {
    console.log(event.target.parentElement);
    setidd(event.target.parentElement.id);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDel = () => {
    setAnchorEl(null);
  };
  const opendel = Boolean(anchorEl);
  const id = opendel ? "simple-popover" : undefined;

  return (
    <>
      {obj.cartitems.length === 0 ? (
        <>
          <div style={{ marginLeft: "30vw" }}>
            <img src="./empty.png" alt="Avatar" style={{ width: "27vw" }} />
          </div>
          <h1
            style={{ textAlign: "center", color: "#F89703", fontSize: "4vh" }}
          >
            <i>Your Cart is Empty.. </i>
            <Link to="/" id="link_continue">
              <Button
                variant="contained"
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  fontSize: "1.2vw",
                }}
              >
                Continue Shopping
              </Button>
            </Link>
          </h1>
        </>
      ) : (
        <div>
          <h1 className="cart_heading">
            Your Cart Items
            <Button
              id="basic-button"
              aria-controls={openempty ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openempty ? "true" : undefined}
              onClick={handleClickEmpty}
              sx={{
                fontWeight: "bold",
                marginLeft: "5vw",
                color: "red",
                fontSize: "2vh",
                backgroundColor: "white",
              }}
            >
              <ClearAllIcon />
              Empty Carty
            </Button>
          </h1>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl1}
            open={openempty}
            onClose={handleCloseEmpty}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Do You want to clear all items?</MenuItem>
            <MenuItem onClick={emptyCart}>Yes</MenuItem>
            <MenuItem onClick={handleCloseEmpty}>No</MenuItem>
          </Menu>
          <TableContainer
            component={Paper}
            sx={{ backgroundColor: "transparent" }}
          >
            <Table
              sx={{ minWidth: 650, color: "none" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "2vh" }}>
                    ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "2vh" }}>
                    Image
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "2vh" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "2vh" }}>
                    Price
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "2vh",
                      paddingLeft: "3%",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "2vh" }}>
                    Subtotal
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "2vh" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {obj.cartitems.map((row, index) => {
                  var a = row.unique_id;
                  return (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                        id={row.id}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ fontSize: "2vh", fontWeight: "bold" }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <img
                            src={row.image}
                            alt="img"
                            style={{ width: "10vh" }}
                          />
                        </TableCell>
                        <TableCell sx={{ fontSize: "2vh", fontWeight: "bold" }}>
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ fontSize: "2vh", fontWeight: "bold" }}>
                          &#8377; {row.price}
                        </TableCell>
                        <TableCell sx={{ fontSize: "2vh", fontWeight: "bold" }}>
                          <Button
                            onClick={() => decreaseQuantity(row.unique_id)}
                          >
                            <RemoveIcon sx={{ color: "#E63C6D" }} />
                          </Button>
                          {row.quantity}
                          <Button
                            onClick={() => increaseQuantity(row.unique_id)}
                          >
                            <AddIcon sx={{ color: "#E63C6D" }} />
                          </Button>
                        </TableCell>
                        <TableCell sx={{ fontSize: "2vh", fontWeight: "bold" }}>
                          &#8377; {row.total_price}
                        </TableCell>
                        <TableCell>
                          <Button
                            aria-describedby={id}
                            onClick={handleClickDel}
                            id={a}
                          >
                            <DeleteIcon id={a} sx={{ color: "#E63C6D" }} />
                          </Button>
                          {/* Delete single items */}
                          <Popover
                            open={opendel}
                            anchorEl={anchorEl}
                            onClose={handleCloseDel}
                            anchorOrigin={{
                              vertical: "bottom",
                            }}
                          >
                            <Button
                              onClick={deleteItems}
                              sx={{ fontSize: "2vh" }}
                            >
                              Delete
                            </Button>
                            <Button
                              onClick={handleCloseDel}
                              sx={{ fontSize: "2vh" }}
                            >
                              Cancel
                            </Button>
                          </Popover>
                        </TableCell>
                      </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <p style={{ marginRight: "15vw" }}>
            <Button
              variant="contained"
              id="chk_btn"
              onClick={handleClickOpenCheck}
            >
              Proceed to Checkout
            </Button>
            <span className="span_total">Total: &#8377;{totalAmount}</span>
          </p>{" "}
        </div>
      )}
      <Dialog fullWidth="fullWidth" open={openCheck} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: "#C7F8B0",
            textAlign: "center",
            fontSize: "3vh",
          }}
        >
          Confirm Your Order and checkout!
          <Button
            onClick={handleClose}
            sx={{ fontSize: "3vh", float: "right", color: "black" }}
          >
            X
          </Button>
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Enter Your Following Details:
          </Typography>
          <div>
            <h3>
              Name : <span className="span">{obj.loginname}</span>
            </h3>
            <h3>
              Email : <span className="span">{obj.email1}</span>
            </h3>
            <h3>
              Mobile Number: <span className="span">{obj.mobile1}</span>
            </h3>
            <TextareaAutosize
              id="user_address"
              aria-label="address"
              placeholder="Enter your Address"
              style={{ width: 200, padding: "2vw" }}
            />
          </div>

          <Button
            variant="contained"
            sx={{
              textAlign: "center",
              backgroundColor: "#C7F8B0",
              fontSize: "2vh",
              fontWeight: "bold",
              color: "black",
              marginTop: "1%",
              float: "right",
            }}
            onClick={checkout}
          >
            Place Your Order
          </Button>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCheck} sx={{ fontSize: "2vh" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        open={openerror}
        onClose={handleCloseorder}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "4vh" }}
          >
            <h5 sx={{ fontSize: "2vh" }}>{errortext}</h5>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default Cart;
