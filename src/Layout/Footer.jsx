import "./Footer.css"
import logo from "../assets/foodicon.png.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import foodlogo2 from "../assets/foodlogo2.png";
import foodlogo3 from "../assets/foodlogo3.png";
import foodlogo4 from "../assets/foodlogo4.png";
import foodlogo5 from "../assets/foodlogo5.png";
function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="footer-point">
          <div className="left">
            <div className="logo-name">
              <img className="left-logo" src={logo} alt="" />
              <h2 className="name">Raj FoodShop</h2>
            </div>
            <p className="para">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          </div>

          <div className="down-right">
            <a href="https://x.com/home">
              <div className="social-icons-div1">
                <FaTwitter size={15} />
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100087131604899">
              <div className="social-icons-div1">
                <FaFacebookF size={15} />
              </div>
            </a>
            <a href="https://www.instagram.com/rajratan441/">
            
            <div className="social-icons-div1">
              <FaInstagram size={15} />
            </div>
            </a>
            <a href="https://github.com/9934ratan273478-ops">
            <div className="social-icons-div1">
              <FaGithub  size={15} />
            </div>
            </a>
          </div>
        </div>
        <div className="footer-points">
          <div className="footer-links">
            <h3 className="heading1">Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Delivery</li>
            </ul>
          </div>


          <div className="footer-links">
            <h2 className="heading2">Utility Pages</h2>
            <ul>
              <li>Start Here</li>
              <li>Styleguide</li>
              <li>Password Protected</li>
              <li>404 Not Found</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>View More</li>
            </ul>
          </div>
        </div>
        <div className="footer-gallery">
          <h2 className="heading3">Follow Us On Instagram</h2>
          <div className="gallery">
            <img src={foodlogo2} alt="food" />
            <img src={foodlogo3} alt="food" />
            <img src={foodlogo4} alt="food" />
            <img src={foodlogo5} alt="food" />
          </div>
        </div>




      </footer>
    </>
  )
}


export default Footer