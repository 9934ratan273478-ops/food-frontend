import "../Components/OurMenu.css"
import { GiCoffeeCup } from "react-icons/gi";
function OurMenu() {
  return (
    <>
      <div className="Menu-div">
        <h1 className="Browse-Menu">Browse Our Menu</h1>
        <div className="Menu-Card">
          <div className="card">
            <div className="icon-div">
              <GiCoffeeCup size={30} />
            </div>
            <p className="head">Breakfast</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <GiCoffeeCup size={30} />
            </div>
            <p className="head">Breakfast</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <GiCoffeeCup size={30} />
            </div>
            <p className="head">Breakfast</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <GiCoffeeCup size={30} />
            </div>
            <p className="head">Breakfast</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMenu