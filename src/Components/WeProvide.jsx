import "./WeProvide.css"
import { useNavigate } from "react-router-dom"
import image from "../assets/foodimg.jpg"
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function WeProvide() {
  const navigate = useNavigate()
  return (
    <>
      <div className="Main-div">
        <div className="image-div">
          <img className="img" src={image} alt="" />
        </div>
        <div className="content-div">
          <h2 className="heading">We provide healthy food for your family.</h2>
          <p className="our-story">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
          <p className="at-place">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          <button className="About-btn" onClick={()=> navigate("/secrettip")}>More About Us</button>
        </div>
        <div className="contact">
          <p className="cont-heading">Come and visit us</p>
          <div className="cont"><CiPhone /> +91 9934273478

          </div>
          <div className="cont"><MdOutlineMail /> 9934ratan273478@gmail.com</div>
          <div className="cont"><FaLocationDot /> Bhubaneswar</div>

          
        </div>
      </div>
    </>
  )
}

export default WeProvide