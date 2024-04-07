import { Button } from "@mui/material";
import React, { useContext } from "react";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "./Category.css";
import data from "./Data";
import { userContext } from "./Mycontext";
const Carousel = () => {
  const obj=useContext(userContext);
  // select from Category
  const category=(event)=>{
    var a = data[event.target.id];
    obj.setcheckallproducts(false);
    if(event.target.id === "building")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]);
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked1(true); 
    } 
    else if(event.target.id === "vehicles")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]); 
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked2(true); 
    }
    else if(event.target.id === "dolls")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]); 
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked3(true); 
    }
    else if(event.target.id === "gun")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]); 
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked4(true); 
    }
    else if(event.target.id === "puzzles")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]);
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked5(true);  
    }
    else if(event.target.id === "board_games")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]);
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked6(true);  
    }
    else if(event.target.id === "collectibles")
    {
      obj.setdisplayproducts([ ...a,...obj.displayproducts]);
      obj.setCategoryItems([...a, ...obj.categoryItems]);
      obj.setchecked7(true);  
    }
  }

  const getAllProducts=()=>{
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
  }
 

  return (
    <>
    {/*Offer Slider */}
      <div className="slider" style={{ backgroundColor: "#95BCDF" }}>
        <Slider>
          <div className="slide">
            <h4 className="offer_heading1">
              Flat 50% off , on shopping of more than &#8377; 2000!{" "}
              <Link to="/product" className="offer_link"><Button variant="outlined" id="offer_btn" onClick={getAllProducts}>Shop Now</Button></Link>
            </h4>
          </div>
          <div className="slide">
            <h4 className="offer_heading1">
              Free Delivery on every product , for new users only!{" "}
              <Link to="/product" className="offer_link"><Button id="offer_btn" variant="outlined" onClick={getAllProducts}>Shop Now</Button></Link>
            </h4>
          </div>
          <div className="slide">
            <h4 className="offer_heading1">
              Extra 20% off , For new users on every product!{" "}
              <Link to="/product" className="offer_link"><Button id="offer_btn" variant="outlined" onClick={getAllProducts}>Shop Now</Button></Link>
            </h4>
          </div>
        </Slider>
      </div>

      {/*  Slider */}
      <div className="slider">
        <Slider>
          <div className="slide">
            <img src="./carousel1.jpg" alt="img" className="carousel" />
          </div>
          <div className="slide">
            <img src="./carousel2.jpg" alt="img" className="carousel" />
          </div>
          <div className="slide">
            <img src="./carousel3.jpg" alt="img" className="carousel" />
          </div>
        </Slider>
      </div>

      {/* Category Slider */}
      <h1 className="category_heading">Shop By Category</h1>
      <div className="category_slider">
        <Slider>
          <div className="slide">
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Building_Construction.jpg"
                  alt="img"
                  className="carousel1"
                  id="building"
                  onClick={category}
                />
                <h4 onClick={category} className="category_div1">Building & Construction</h4>
              </div>
            </Link>
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Cars_Vehicle_Playsets.jpg"
                  alt="img"
                  className="carousel1"
                  id="vehicles"
                  onClick={category}
                />
                <h4 onClick={category} className="category_div1">Cars & Vehicles Playsets</h4>
              </div>
            </Link>
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Dolls_Accessories.jpg"
                  alt="img"
                  className="carousel1"
                  id="dolls"
                  onClick={category}
                />
                <h4 onClick={category} className="category_div1">Dolls & Accessories</h4>
              </div>
            </Link>
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Toy_Guns_Bullets.jpg"
                  alt="img"
                  className="carousel1"
                  id="gun"
                  onClick={category}
                />
                <h4 onClick={category} className="category_div1">Toy Guns & Bullets</h4>
              </div>
            </Link>
          </div>

          <div className="slide">
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Puzzles.jpg"
                  alt="img"
                  className="carousel1"
                  id="puzzles"
                  onClick={category}
                />
                <h4 className="category_div1">Puzzles</h4>
              </div>
            </Link>
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Board_Games.jpg"
                  alt="img"
                  className="carousel1"
                  id="board_games"
                  onClick={category}
                />
                <h4 className="category_div1">Board Games</h4>
              </div>
            </Link>
            <Link to="/product" className="category_subheading">
              <div>
                <img
                  src="./category/Collectibles.jpg"
                  alt="img"
                  className="carousel1"
                  id="collectibles"
                  onClick={category}
                />
                <h4 className="category_div1">Mixed Toys</h4>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
