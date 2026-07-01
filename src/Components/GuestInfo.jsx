import "./GuestInfo.css"
import img from "../assets/guestimg.jpg"

function GuestInfo(){
    return(

    <>
    <div className="guest-hero">
    <div className="guest-left">
        <div className="guest-upper">
        <h1 className="guest-head">A little information for our valuable guest</h1>
        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        </div>
        <div className="guest-boxes">
            <div className="box">
                <p className="value-head">3</p>
                <p>Locations</p>
            </div>
            <div className="box">
                <p className="value-head">1995</p>
                <p>Founded</p>
            </div>
            <div className="box">
                <p className="value-head">65+</p>
                <p>Staff Members</p>
            </div>
            <div className="box">
                <p className="value-head">100%</p>
                <p>Satisfied Customers</p>
            </div>
        </div>
        
    </div>
    <div className="guest-right">
        <img className="right-img" src={img} alt="" />
    </div>
    
    
    </div>
    </>
    )
}
export default GuestInfo