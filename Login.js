const Login=()=>{
    return(
        <>
<form action="/action_page.php" method="post">
  <div className="imgcontainer">
    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Avatar" className="avatar" />
  </div>

  <div className="UDcontainer">
  <button type="Uploadimg">Upload Image</button>
  <button type="deleteim">Delete Image</button>
  </div>

  <div className="container">
    
    <label htmlFor="uname">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="uname" required="" />
    <label htmlFor="psw">
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      required=""
    />
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
    <button type="button" className="cancelbtn">
      Cancel
    </button>
    <span className="psw">
      Forgot <a href="#">password?</a>
    </span>
  </div>

  
     {/* <div className='Signinpage' style={{textAlign:"center"}}>
     <h1>User Signin Page</h1>
     <lable>First Name:</lable><input type="text" placeholder="First Name"></input><br></br>
     <lable>Last Name:</lable><input type="text" placeholder="Last Name"></input><br></br>
     <lable>Email id:</lable><input type="email" placeholder="Email Address"></input><br></br><br></br>

     <lable>Password:</lable><input type="password" placeholder="Enter Password"></input><br></br>
     <lable>Re-Enter Password:</lable><input type="password" placeholder="Enter Re-Enter Password"></input><br></br>
     <lable>Date of Birth:</lable><input type="date" placeholder="Date of Birth"></input><br></br>
     <button type="submit">Submit</button>
     </div> */}
     </form>


     <footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>D251, Phase 8, Mohali, Punjab </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>+91 98145-64897</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>Herbalpalnt@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html">Herbal Plant
                {/* <img
                  src="https://w7.pngwing.com/pngs/989/883/png-transparent-herbal-plant-logo-thumbnail.png"
                  className="img-fluid"
                  alt="logo"
                /> */}
              </a>
            </div>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#">
                <i className="fab fa-facebook-f facebook-bg" />
              </a>
              <a href="#">
                <i className="fab fa-twitter twitter-bg" />
              </a>
              <a href="#">
                <i className="fab fa-google-plus-g google-bg" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Expert Team</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <i className="fab fa-telegram-plane" />Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>
              Copyright © 2024, All Right Reserved{" "}
              <a href="https://codepen.io/anupkumar92/">Herbal Plant</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}

export default Login;