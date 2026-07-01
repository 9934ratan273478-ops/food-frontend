import "../Components/OurMenu.css"
import { useNavigate } from "react-router-dom"
import { GiCoffeeCup } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import { FaGlassCheers } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";

function OurMenu() {
  const navigate = useNavigate()
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
            <button className="explore-btn" onClick={()=> navigate("/menuhero")}>Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <BiBowlRice  size={30} />
            </div>
            <p className="head">Main Dishes</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn"onClick={()=> navigate("/menuhero")} >Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <FaGlassCheers  size={30} />
            </div>
            <p className="head">Drinks</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn" onClick={()=> navigate("/menuhero")}>Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <GiCupcake size={30} />
            </div>
            <p className="head">Desserts</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn" onClick={()=> navigate("/menuhero")}>Explore Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default OurMenu