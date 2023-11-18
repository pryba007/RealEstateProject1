import React from "react";
import house1 from "../images/house1.png";
import house2 from "../images/house2.png";
import house3 from "../images/house3.png";
import Carousel from "react-bootstrap/Carousel";

const PromoSlideShow = () => {
  return (
    <Carousel
      fade
      slide="auto"
      idicators="all"
      controls="all"
      interval="2000"
      data-bs-theme=""
    >
      <Carousel.Item>
        <img src={house1} className="d-block w-100" alt="House 1" />
        <Carousel.Caption>
          <h3>Hot Pick One</h3>
          <p className="">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={house2} className="d-block w-100" alt="House 2" />
        <Carousel.Caption>
          <h3>Hot Pick Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={house3} className="d-block w-100" alt="House 3" />
        <Carousel.Caption>
          <h3>Hot Pick Three</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PromoSlideShow;
