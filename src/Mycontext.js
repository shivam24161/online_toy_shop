import React, { createContext, useState } from "react";
export const userContext = createContext();
const Mycontext = (props) => {
  const [userdetails, setuserdetails] = useState([]);
  const [cartitems, setcartitems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [displayproducts, setdisplayproducts] = useState([]);
  const [categoryHeading, setCategoryHeading] = useState();
  const [checked, setchecked] = useState(false);
  const [checkloggedin, setcheckedloggedin] = useState(false);
  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);
  const [checked5, setchecked5] = useState(false);
  const [checked6, setchecked6] = useState(false);
  const [checked7, setchecked7] = useState(false);
  const [loginname,setloginname]=useState();
  const [allproducts,setallproducts]=useState([]);
  const [allproducts1,setallproducts1]=useState([]);
  const [checkallproducts,setcheckallproducts]=useState(false);
  const [email1, setemail1] = useState();
  const [mobile1,setmobile1]=useState();
  return (
    <userContext.Provider
      value={{
        email1, setemail1,
        mobile1,setmobile1,
        userdetails,
        setuserdetails,
        cartitems,
        setcartitems,
        categoryItems,
        setCategoryItems,
        categoryHeading,
        setCategoryHeading,
        checked,
        setchecked,
        displayproducts,
        setdisplayproducts,
        checkloggedin,
        setcheckedloggedin,
        checked1, setchecked1,
        checked2, setchecked2,
        checked3, setchecked3,
        checked4, setchecked4,
        checked5, setchecked5,
        checked6, setchecked6,
        checked7, setchecked7,
        loginname,setloginname,
        allproducts,setallproducts,
        checkallproducts,setcheckallproducts,
        allproducts1,setallproducts1
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};
export default Mycontext;
