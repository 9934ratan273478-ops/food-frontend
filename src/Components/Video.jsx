import "./Video.css"
import { BiSolidFoodMenu } from "react-icons/bi";
import { PiOvenDuotone } from "react-icons/pi";
import { GiAlarmClock } from "react-icons/gi";
import img from "../assets/playbutton.png"


function Video(){

    return(
        <>
   <div className="videoimg">
    <img className="video-icon" src={img} alt="" />
    <p className="video-para">Feel the authentic & <br /> original taste from us</p>
    
   </div>
   <div className="video-row">
   <div className="video-opt">
    <div >
        <BiSolidFoodMenu size={50} />
       </div>
    <div className="">
        <h4 className="video-head">Multi Cuisine</h4>
        <p>In the new era of technology we look in the future with certainty life.</p>
    </div>
    
    
   </div>
   <div className="video-opt">
    <div >
        <PiOvenDuotone  size={50} />
       </div>
    <div className="">
        <h4 className="video-head">Easy To Order</h4>
        <p>In the new era of technology we look in the future with certainty life.</p>
    </div>
    
    
   </div>
   <div className="video-opt">
    <div >
        <GiAlarmClock  size={50} />
       </div>
    <div className="">
        <h4 className="video-head">Fast Delivery</h4>
        <p>In the new era of technology we look in the future with certainty life.</p>
    </div>
    
    
   </div>
   </div>
   </>
    )
  }

export default Video