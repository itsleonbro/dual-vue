import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/dualvue.css";

const DualVue = ({
  firstImage,
  secondImage,
  initialPosition = 50,
  sliderColor = "white",
  sliderWidth = 2,
  buttonSize = 40,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const handleImageError = e => {
    console.error(`Failed to load image: ${e.target.src}`);
  };

  const handleMove = e => {
    if (!isDragging.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;

    setPosition(newPosition);
  };

  const startDragging = () => {
    isDragging.current = true;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleTouchMove = e => {
    if (!isDragging.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    setPosition(newPosition);
  };

  const handleKeyDown = e => {
    switch (e.key) {
      case "ArrowLeft":
        setPosition(prev => Math.max(0, prev - 1));
        break;
      case "ArrowRight":
        setPosition(prev => Math.min(100, prev + 1));
        break;
      case "Home":
        setPosition(0);
        break;
      case "End":
        setPosition(100);
        break;
    }
  };

  useEffect(() => {
    sliderRef.current?.focus();

    const container = containerRef.current;
    const touchMoveHandler = e => {
      e.preventDefault();
      handleTouchMove(e);
    };

    container.addEventListener("touchmove", touchMoveHandler, {
      passive: false,
    });

    const cleanup = () => {
      isDragging.current = false;
    };

    window.addEventListener("mouseup", cleanup);

    return () => {
      container.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("mouseup", cleanup);
    };
  }, []);

  useEffect(() => {
    if (imagesLoaded === 2) {
      setIsLoading(false);
    }
  }, [imagesLoaded]);

  return (
    <div
      ref={containerRef}
      className="dualvue-container"
      onMouseMove={handleMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchMove={handleTouchMove}
      onTouchStart={startDragging}
      onTouchEnd={stopDragging}
    >
      {isLoading && <div className="dualvue-loading">Loading...</div>}

      <div className="image-wrapper">
        <img
          src={firstImage}
          alt="First"
          className="dualvue-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      <div
        className="image-wrapper overlay"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={secondImage}
          alt="Second"
          className="dualvue-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      <div
        ref={sliderRef}
        className="dualvue-slider"
        style={{ left: `${position}%` }}
        onMouseDown={startDragging}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Image comparison slider"
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="slider-bar"
          style={{ backgroundColor: sliderColor, width: `${sliderWidth}px` }}
        ></div>
        <div
          className="slider-button"
          style={{ width: `${buttonSize}px`, height: `${buttonSize}px` }}
        ></div>
      </div>
    </div>
  );
};

DualVue.propTypes = {
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
  initialPosition: PropTypes.number,
  sliderColor: PropTypes.string,
  sliderWidth: PropTypes.number,
  buttonSize: PropTypes.number,
};

export default DualVue;
