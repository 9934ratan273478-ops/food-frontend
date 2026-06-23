import "./WeProvide.css"
import image from "../assets/webg.png"
function WeProvide() {
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
          <button className="About-btn">More About Us</button>
        </div>
        <div className="contact">
          <p>Come and visit us</p>
          
        </div>
      </div>
    </>
  )
}

export default WeProvide