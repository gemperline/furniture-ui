import React, { useState, useRef } from "react";
import { makeStyles } from "tss-react/mui";
import { Button, Box, IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const useStyles = makeStyles()(() => ({
  carouselContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    overflow: "hidden",
  },
  imageContainer: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
  },
  image: {
    minWidth: "100%",
    height: "250px",
    objectFit: "cover",
    "@media (min-width: 768px)": {
      height: "500px"
    },
    "@media (min-width: 1024px)": {
      height: "600px"
    }
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    margin: "0 5px",
    borderRadius: "50%",
    backgroundColor: "gray",
    transition: "all 0.3s",
    cursor: "pointer",
  },
  activeDot: {
    backgroundColor: "black",
  }
}));

interface ImageCarouselProps {
  images: string[];
}

export const Carousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const { classes } = useStyles();

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const difference = touchStartX.current - touchEndX.current;
      if (difference > 50) {
        nextSlide();
      } else if (difference < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <Box
      className={classes.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        className={classes.imageContainer}
        sx={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className={classes.image} />
        ))}
      </Box>
      
      <IconButton
        sx={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={prevSlide}
      >
        <ArrowForwardIos sx={{ color: "white", transform: "rotate(180deg)" }} />
      </IconButton>

      <IconButton
        sx={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={nextSlide}
      >
        <ArrowForwardIos sx={{ color: "white" }} />
      </IconButton>
      
      <Box className={classes.dotsContainer}>
        {images.map((_, index) => (
          <Button
            key={index}
            sx={{ minWidth: "10px", height: "10px", padding: "0", borderRadius: "50%", margin: "0 5px", backgroundColor: currentIndex === index ? "black" : "gray" }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};


