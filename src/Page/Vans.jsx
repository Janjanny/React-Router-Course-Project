import { filters } from "../data";
import { Card } from "../Components";
import "../Styles/Vans.css";

function Vans() {
  return (
    <>
      <div className="vans-container">
        <h1 className="title">Explore our van options</h1>
        <div className="filters">
          {filters.map((filter, index) => (
            <div className="filter-btn" key={index}>
              {filter}
            </div>
          ))}
          <button className="clr-fltr-btn">Clear filters</button>
        </div>

        <div className="card-container">
          <Card></Card>
        </div>
      </div>
    </>
  );
}
export default Vans;
