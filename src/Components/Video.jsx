import "./Video.css"
import video from "../assets/bg-video.mp4"
function Video() {
  return (
    <>
      <div className="Video-main">
        <div className="video-div">
          <video className="video" controls autoPlay loop src={video}></video>
        </div>
      </div>
    </>
  )
}

export default Video