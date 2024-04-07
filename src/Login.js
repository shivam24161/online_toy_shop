import { Button, Table, TableCell, TableRow } from "@mui/material";
import { useContext, useState } from "react";
import "./Login.css";
import { userContext } from "./Mycontext";
import Typography from "@mui/material/Typography";

import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Navigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#A73E3E",
  color:"white",
  boxShadow: 24,
  p: 4,
};
export const Login = () => {
  const [flag, setflag] = useState("none");
  const [displayLogin, setDisplayLogin] = useState("block");
  const [displaySignup, setDisplaySignup] = useState("none");
  const [errortext,seterrortext]=useState();
  const [openerror, setopenerror] =useState(false);
  const obj = useContext(userContext);

  const handleCloseorder = () => {
    setopenerror(false);
  }

  // User Login
  const login = () => {
    let email = document.getElementById("emaillogin").value;
    let password = document.getElementById("passwordlogin").value;
    const isFound = obj.userdetails.some((i) => {
      if ((i.email === email && i.password === password) || (i.mobile === email && i.password === password)) {
        obj.setloginname(i.name)
        return true;
      }
    });
    if (isFound) {
      obj.setcheckedloggedin(true);
      obj.setemail1(email);
      obj.setmobile1("12345678")
    } else {
      setopenerror(true);
      obj.setcheckedloggedin(false);
      seterrortext("Details not matched...");
    }
  };

  // User Signup
  const signup = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("emailsignup").value;
    let password = document.getElementById("passwordsignup").value;
    let mobile = document.getElementById("mobile").value;
    var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (name === "" || email === "" || password === "" || mobile === "") {
    seterrortext("All fields are mandatory!, Please provide input!");
    setopenerror(true);
  }
  else if(!isNaN(name))
  {
    seterrortext("Please enter valid name!");
    setopenerror(true);
  } 
  else if (!filter.test(email)) {
    seterrortext("Please provide a valid email address!");
    setopenerror(true);
  }
  else{
    const userDet = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    obj.setuserdetails([...obj.userdetails, userDet]);
    setopenerror(true);
    seterrortext("Account created successfully, Proceed to Login!");
    setDisplayLogin("block");
    setDisplaySignup("none");
  }
  };
  // Show login/ signup div
  const showDisplaySignup = () => {
    setDisplayLogin("none");
    setDisplaySignup("block");
  };

  const showDisplaylogin = () => {
    setDisplayLogin("block");
    setDisplaySignup("none");
    
  };
  return (
    <>
   

      {obj.checkloggedin && (<Navigate to="/" replace="true"/>)}
      <div className="login_signup">
        <div className="login" style={{ display: displayLogin }}>
          <h1 style={{ textDecoration: "underline" }}>Login</h1>
          <table>
            <tbody>
              <tr>
                <td className="td"> Email or Phone</td>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    id="emaillogin"
                  />
                </td>
              </tr>
              <tr>
                <td className="td">Password</td>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    id="passwordlogin"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button id="btn" onClick={login}>
            Login
          </Button>
          <p style={{fontSize:"1.8vw"}}>
            <i>
              Not, Have an account ?{" "}
              <Button variant="contained" onClick={showDisplaySignup} sx={{fontSize:"1vw",backgroundColor:"white",color:"red"}}>Create Account</Button>
            </i>
          </p>
        </div>

        <div className="Signup" style={{ display: displaySignup }}>
          <h1 style={{ textDecoration: "underline" }}>Create Account</h1>
          <table>
            <tbody>
              <tr>
                <td className="td">Name</td>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    id="name"
                  />
                </td>
              </tr>
              <tr>
                <td className="td">Email</td>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    id="emailsignup"
                  />
                </td>
              </tr>
              <tr>
                <td className="td">Mobile</td>
                <td>
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="input"
                    id="mobile"
                  />
                </td>
              </tr>
              <tr>
                <td className="td">Password</td>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    id="passwordsignup"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button id="btn" onClick={signup} >
            Signup
          </Button>
          <p style={{fontSize:"1.8vw"}}>
            <i>
              Already, Have an account ?{" "}
              <Button variant="contained" onClick={showDisplaylogin} sx={{fontSize:"1vw",backgroundColor:"white",color:"red"}}>Login Now</Button>
            </i>
          </p>
        </div>
      </div>
      <Modal
        open={openerror}
        onClose={handleCloseorder}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "4vh"}}
          >
            <h5 sx={{ fontSize: "2vh" }}>{errortext}</h5>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
