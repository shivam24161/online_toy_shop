import { Button, Typography } from "@mui/material";
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import data from "./Data";
import { userContext } from "./Mycontext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MoodIcon from "@mui/icons-material/Mood";
import Rating from '@mui/material/Rating';
import "./Product.css";
export const Product = () => {
  const obj = useContext(userContext);
  const categories = obj.categoryItems;

  // Add to Cart
  const addToCart = (id) => {
    var flag = false;
    obj.cartitems.map((i) => {
      if (i.unique_id === id) {
        flag = true;
      }
    });
    if (flag === true) {
      obj.displayproducts.map((i) => {
        if (i.unique_id === id) {
          i.quantity = i.quantity + 1;
          i.total = i.quantity * i.price;
          obj.setcartitems([...obj.cartitems]);
        }
      });
      obj.allproducts1.map((i) => {
        if (i.unique_id === id) {
          i.quantity = i.quantity + 1;
          i.total = i.quantity * i.price;
          obj.setcartitems([...obj.cartitems]);
        }
      });
    } else {
      obj.displayproducts.map((i) => {
        if (i.unique_id === id) {
          obj.setcartitems([...obj.cartitems, i]);
        }
      });
      obj.allproducts1.map((i) => {
        if (i.unique_id === id) {
          obj.setcartitems([...obj.cartitems, i]);
        }
      });
    }
  };

  // Filter Products
  const filter_product = (event) => {
    var x1 = data.building;
    var x2 = data.dolls;
    var x3 = data.gun;
    var x4 = data.vehicles;
    var x5 = data.board_games;
    var x6 = data.puzzles;
    var x7 = data.collectibles;

    const temp1 = [...x1, ...x2, ...x3, ...x4, ...x5, ...x6, ...x7];
    obj.setcheckallproducts(true);
    var a = data[event.target.id];
    if (event.target.id === "building") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked1(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter((i) => i.type !== "building");
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked1(false);
      }
    } else if (event.target.id === "vehicles") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked2(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter((i) => i.type !== "vehicles");
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked2(false);
      }
    } else if (event.target.id === "dolls") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked3(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter((i) => i.type !== "dolls");
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked3(false);
      }
    } else if (event.target.id === "gun") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked4(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter((i) => i.type !== "gun");
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked4(false);
      }
    } else if (event.target.id === "puzzles") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked5(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter((i) => i.type !== "puzzles");
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked5(false);
      }
    } else if (event.target.id === "board_games") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked6(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter((i) => i.type !== "board_games");
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked6(false);
      }
    } else if (event.target.id === "collectibles") {
      if (event.target.checked === true) {
        obj.setCategoryItems([...a, ...obj.categoryItems]);
        obj.setdisplayproducts([...a, ...obj.displayproducts]);
        obj.setchecked7(true);
      } else if (event.target.checked === false) {
        const items = obj.categoryItems.filter(
          (i) => i.type !== "collectibles"
        );
        obj.setCategoryItems([...items]);
        obj.setdisplayproducts([...items]);
        obj.setchecked7(false);
      }
    }
  };

  // Sort By Rating
  const selectbylowhighrating = (event) => {
    let text = event.target.value;
    if (text === "low") {
      var low = obj.categoryItems.sort(function (a, b) {
        return a.price - b.price;
      });
      obj.setCategoryItems([...low]);
      obj.setdisplayproducts([...low]);

      var low1 = obj.allproducts1.sort(function (a, b) {
        return a.price - b.price;
      });
      obj.setallproducts1([...low1]);
    } else if (text === "high") {
      var high = obj.categoryItems.sort(function (a, b) {
        return b.price - a.price;
      });
      obj.setCategoryItems([...high]);
      obj.setdisplayproducts([...high]);

      var high1 = obj.allproducts1.sort(function (a, b) {
        return b.price - a.price;
      });
      obj.setallproducts1([...high1]);
    } else if (text === "rating") {
      var rating = obj.categoryItems.sort(function (a, b) {
        return b.rating - a.rating;
      });
      obj.setCategoryItems([...rating]);
      obj.setdisplayproducts([...rating]);

      var rating1 = obj.allproducts1.sort(function (a, b) {
        return b.rating - a.rating;
      });
      obj.setallproducts1([...rating1]);
    }
  };
  // Search Items
  const searchItems = () => {
    var tt = obj.categoryItems;
    var text = document.getElementById("text").value;
    let txt = text.toLowerCase();
    var temp = [];
    var temp1 = [];
    obj.categoryItems.map((i) => {
      var name = i.name.toLowerCase();
      if (name.includes(txt)) {
        temp.push(i);
        obj.setdisplayproducts(temp);
      }
    });
    obj.allproducts1.map((i) => {
      var name = i.name.toLowerCase();
      if (name.includes(txt)) {
        temp1.push(i);
        obj.setallproducts1(temp1);
      }
    });
    if (txt === "") {
      obj.setdisplayproducts([...obj.categoryItems]);
      obj.setallproducts1([...obj.allproducts]);
    }
  };

  return (
    <>
      <div>
        <div className="sortBy">
          <div className="sort_span1">
            <FormControl variant="standard" sx={{ minWidth: 250 }}>
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ fontWeight: "bold", color: "#411508", fontSize: "1vw" }}
              >
                Sort By:
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={selectbylowhighrating}
                label="Category"
                sx={{ fontWeight: "bold" }}
              >
                <MenuItem value={"low"}>Price : Low to High</MenuItem>
                <MenuItem value={"high"}>Price : High to Low</MenuItem>
                <MenuItem value={"rating"}>Rating</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="sort_span2">
            <TextField
              id="text"
              label="Search by Product Name"
              variant="standard"
              sx={{ fontWeight: "bold", color: "#411508" }}
              onChange={searchItems}
            />
          </div>
        </div>
      </div>
      <div className="main_product_div">
        <div className="category_div">
          <div style={{ position: "sticky", top: 5 }}>
            <div className="product_found">
              {obj.displayproducts.length > 1 ? obj.displayproducts.length : ""}{" "}
              Products
              <MoodIcon sx={{ color: "#411508"}} />
            </div>
            <p className="filter_category">Category</p>

            <FormControlLabel
              id="building"
              control={<Checkbox id="building" checked={obj.checked1} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>Building Toys</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
            <FormControlLabel
              id="vehicles"
              control={<Checkbox id="vehicles" checked={obj.checked2} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>vehicles Playsets</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
            <FormControlLabel
              id="dolls"
              control={<Checkbox id="dolls" checked={obj.checked3} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>Dolls</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
            <FormControlLabel
              id="gun"
              control={<Checkbox id="gun" checked={obj.checked4} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>Guns & Bullets</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
            <FormControlLabel
              id="puzzles"
              control={<Checkbox id="puzzles" checked={obj.checked5} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>Puzzles</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
            <FormControlLabel
              control={<Checkbox id="board_games" checked={obj.checked6} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>Board Games</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
            <FormControlLabel
              control={<Checkbox id="collectibles" checked={obj.checked7} />}
              label={<Typography sx={{fontSize: '1.5vw'}}>Mixed Toys</Typography>}
              className="filter_text"
              onChange={filter_product}
            />
          </div>
        </div>
        {obj.displayproducts.length > 1 ? (
          <>
            <div className="product_div">
              {obj.displayproducts.map((i) => {
                var a = (i.price / i.t_price) * 100;
                var b = Math.round(a);
                var c = 100 - b;
                return (
                  <>
                  {/* Displaying the cards */}
                    <div className="product_card">
                      <div class="circle">
                        <span class="circle__content">{c}% off</span>
                      </div>
                      <img src={i.image} alt="img" className="product_image" />
                      <p className="star_rating">
                      <Rating name="read-only" value={i.rating} readOnly sx={{fontSize:"1.5vw"}}/>
                      </p>
                      <p className="product_name">{i.name}</p>
                      <p className="product_price">
                        &#8377; {i.price}{" "}
                        <sub>
                          <span className="span_discount">
                            &#8377;{i.t_price}
                          </span>
                        </sub>
                      </p>
                      <Button
                        id="add_to_basket"
                        onClick={() => addToCart(i.unique_id)}
                      >
                        Add to Basket
                      </Button>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="product_div">
              {obj.allproducts1.map((i) => {
                var a = (i.price / i.t_price) * 100;
                var b = Math.round(a);
                var c = 100 - b;
                return (
                  <>
                    <div className="product_card">
                    <div class="circle">
                        <span class="circle__content">{c}% off</span>
                      </div>
                      <img src={i.image} alt="img" className="product_image" />
                     
                      <p className="star_rating">
                      <Rating name="read-only" value={i.rating} readOnly sx={{fontSize:"1.5vw"}}/>

                      {/* Another way */}
                      {/* {[...Array(5)].map((item, index) => {
                      const givenRating = index + 1;
                      return (
                        <i
                            className="fa-solid fa-star"
                            style={{ color:
                              givenRating < i.rating || givenRating === i.rating
                                ? "gold"
                                : "rgb(192,192,192)"
                            } }
                          ></i>
                        
                      )})} */}
                      </p>
                      <p className="product_name">{i.name}</p>
                      <p className="product_price">
                        &#8377; {i.price}{" "}
                        <sub>
                          <span className="span_discount">
                            &#8377;{i.t_price}
                          </span>
                        </sub>
                      </p>
                      <Button
                        id="add_to_basket"
                        onClick={() => addToCart(i.unique_id)}
                      >
                        Add to Basket
                      </Button>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
