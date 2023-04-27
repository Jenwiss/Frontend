import React from "react";
import { FaStar } from "react-icons/fa";

const Ratings = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  };

  const handleMouseLeave = value => {
    setHoverValue(undefined)
  };

  return (
    <div className="ratingstars">
      {stars.map((_, index) => {
        return <FaStar className="stars" key={index} />;
      })}
    </div>
  );
};

export default Ratings;
