import "./Event.css"
import Event1 from "../assets/Event1.png"
function Event() {
  return (
    <>
      <div className="Event-main">
        <h2 className="Heading">We also offer unique <br /> services for your events</h2>
        <div className="Card-div">
          <div className="card">
            <img className="image" src={Event1} alt="" />
            <h2 className="head">Caterings</h2>
            <p className="para">In the new era of technology we look in the future with certainty for life.</p>
          </div>
          <div className="card">
            <img className="image" src={Event1} alt="" />
            <h2 className="head">Caterings</h2>
            <p className="para">In the new era of technology we look in the future with certainty for life.</p>
          </div>
          <div className="card">
            <img className="image" src={Event1} alt="" />
            <h2 className="head">Caterings</h2>
            <p className="para">In the new era of technology we look in the future with certainty for life.</p>
          </div>
          <div className="card">
            <img className="image" src={Event1} alt="" />
            <h2 className="head">Caterings</h2>
            <p className="para">In the new era of technology we look in the future with certainty for life.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event