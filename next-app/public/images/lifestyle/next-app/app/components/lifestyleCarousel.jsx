"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "../data/lifestyle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./lifestyleCarousel.css";

export const LifestyleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsPerPage : prevIndex - 1
    );
  };

  const currentImages = images.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Experience More. Live Better.</h2>
      <div className="carousel-wrapper">
        <button onClick={prevSlide} className="arrow left-arrow">
          <IoIosArrowBack />
        </button>
        <div className="carousel-slide">
          {currentImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                objectFit="cover"
              />
              <p className="carousel-caption">{image.caption}</p>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="arrow right-arrow">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
