import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ album, albuns }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (rating === null) return;
    const newAlbuns = albuns.map((item) => {
      if (item.id === album.id) {
        album.rating = rating;
      }
      return item;
    });
    localStorage.setItem("albuns", JSON.stringify(newAlbuns));
  }, [rating]);

 useEffect(() => {
    if (album.rating) {
      setRating(album.rating);
    }
  }
  ,[]);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
