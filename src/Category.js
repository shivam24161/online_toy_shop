import React from "react";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import "./Category.css";
const Category = () => {
  const category_items = [
    "./category/Building_Construction.jpg",
    "./category/Cars_Vehicle_Playsets.jpg",
    "./category/Dolls_Accessories.jpg",
    "./category/Puzzles.jpg",
    "./category/Toy_Guns_Bullets.jpg"
  ];

  return (
    <> 
      <h1 className="category_heading">Shop By Category</h1>
      <div className="category_slider">
       
        <Slider>
          <div className="slide">
            <img
              src= "./category/Building_Construction.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
             <img
              src= "./category/Cars_Vehicle_Playsets.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
             <img
              src= "./category/Dolls_Accessories.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
            <img
              src= "./category/Toy_Guns_Bullets.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
            </div>
            <div className="slide">
            <img
              src="./category/Puzzles.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
              <img
              src="./category/Toy_Guns_Bullets.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
            <img
              src="./category/Collectibles.jpg"
              alt="img"
              className="carousel1"
              style={{ width: "20vw" }}
            />
            </div>
        </Slider>
      </div>
    </>
  );
};
export default Category;
