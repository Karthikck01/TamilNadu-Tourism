import React from "react";
import { Carousel, Image } from "react-bootstrap";

const LandingPageCarousel = () => {
  const CarouselImages = [
    { img: "/images/banner1.jpg" },
    { img: "/images/pic1.jpeg" },
    { img: "/images/pic2.jpeg" },
    { img: "/images/pic3.jpeg" },
    { img: "/images/pic4.jpeg" },
  ];
  return (
    <Carousel className="mb-5">
      {CarouselImages.map((img, index) => {
        return (
          <Carousel.Item key={index}>
            <Image src={img.img} className="w-100" style={{height: '80vh'}}/>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default LandingPageCarousel;
