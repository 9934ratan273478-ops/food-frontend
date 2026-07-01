import "./Footer.css"
import logo from "../assets/Food-Logo.png"
import { FaTwitter } from "react-icons/fa";
import img1 from "../assets/img1.png"
import img2 from "../assets/img-2.png"
import img3 from "../assets/img-3.png"
import img4 from "../assets/img-4.png"


function Footer() {
  return (
    <>
      <footer className="Footer">
        {/* Left */}
        <div className="left">
          <div className="logo-name">
            <img className="left-logo" src={logo} alt="" />
            <h2 className="name">Manoj FoodShop</h2>
          </div>
          <p className="para">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          {/* Social Links */}
          <div className="social-linkDiv">
            <a href="">
              <div className="social-item">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="">
              <div className="social-item">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="">
              <div className="social-item">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="">
              <div className="social-item">
                <FaTwitter size={20} />
              </div>
            </a>
          </div>
        </div>
        {/* Middle */}
        <div className="middle">
          <div className="middle-1st">
            <p className="page">Pages</p>
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
            </div>
          </div>
          <div className="middle-1st">
            <p className="page">Utility Pages</p>
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="Right">
          <p className="Follow">Follow Us On Instagram</p>
          <div className="images">
            <div className="row">
              <div className="img">
                <img src={img1} alt="img-1" />
              </div>
              <div className="img">
                <img src={img2} alt="img-2" />
              </div>
            </div>
            <div className="row">
              <div className="img">
                <img src={img3} alt="img-3" />
              </div>
              <div className="img">
                <img src={img4} alt="img-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer