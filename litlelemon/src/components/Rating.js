import {star} from "../images/images";

function Rating({ stars }) {
  return (
    <div className="rating" style={{}}>
      {Array.from({ length: stars }).map((_, index) => (
        <img
          style={{width: "15%"}}
          key={index}
          src={star}
          alt="star"
          className="star"
        />
      ))}
    </div>
  );
}

export default Rating