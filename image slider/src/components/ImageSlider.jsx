import React, { useState, useEffect } from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import "./imageslider.css";
const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchImages = async () => {
    const response = await fetch(`${url}?limit=${limit}`);
    const data = await response.json();
    setImages(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="container">
      <div>
        <button
          className="prev"
          onClick={() => setIndex((index + images.length - 1) % images.length)}
        >
          <GrLinkPrevious />
        </button>
        {loading ? (
          "loading..."
        ) : (
          <img src={images[index]?.download_url} alt="random" width={"200px"} />
        )}
        <div className="dot-container">
          {[...Array(limit)].map((_, i) => (
            <div
              key={i}
              className="dot"
              onClick={() => setIndex(i)}
              style={{ backgroundColor: i === index ? "black" : "white" }}
            ></div>
          ))}
        </div>
        <button
          className="next"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
