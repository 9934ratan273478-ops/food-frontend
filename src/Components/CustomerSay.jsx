import "./CustomerSay.css"
function CustomerSay() {
  return (
    <>
      <div className="Customer-main">
        <h2 className="heading-main">What Our Customers Say:-</h2>
        <div className="Card-div">
          <div className="Card">
            <h3 className="heading">“The best restaurant”</h3>
            <p className="para">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
            <div className="profile-div">
              <div className="profile-img">
                <img className="image" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt="" />
              </div>
              <div className="info">
                <h2>Manoj K Das</h2>
                <p>Los Angeles, CA</p>
              </div>
            </div>
          </div>
          <div className="Card">
            <h3 className="heading">“Simply delicious”</h3>
            <p className="para">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared beautifully.</p>
            <div className="profile-div">
              <div className="profile-img">
                <img className="image" src="https://i.pinimg.com/736x/34/16/10/34161007958a0c577d8c8a4efa4018eb.jpg" alt="" />
              </div>
              <div className="info">
                <h2>Hrithik Roshan</h2>
                <p>Mumbai, Maharashtra.</p>
              </div>
            </div>
          </div>
          <div className="Card">
            <h3 className="heading">““One of a kind restaurant””</h3>
            <p className="para">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening.</p>
            <div className="profile-div">
              <div className="profile-img">
                <img className="image" src="https://preview.redd.it/for-me-amir-khan-is-one-of-the-most-versatile-actor-in-v0-g8se27fn5ymc1.png?width=640&crop=smart&auto=webp&s=f8b0511a29e5a163444abb709310fc5277c83900" alt="" />
              </div>
              <div className="info">
                <h2>Aamir Khan</h2>
                <p>Pali Hill, Mumbai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CustomerSay