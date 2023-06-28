import "../Styles/Card.css";
import { vansImages } from "../data";

function Card({ img, category, name, price }) {
  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="name-price">
        <h1>{name}</h1>
        <p>
          ${price}
          <span> /day</span>
        </p>
      </div>
      <div className="category">{category}</div>
    </div>
  );
}
export default Card;
