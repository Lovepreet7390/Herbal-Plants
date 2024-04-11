import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact=()=>{
  useEffect(()=>{
    Aos.init();
  }, [])
 return (
  
           
<>
{/* <div className="backgrount-img"></div>
<section className="resume-section p-4 p-lg-5 text-center" id="contact">
  <div className="my-auto">
    <h2 className="mb-4"> Contact us </h2>
    <form
      className="contact-form d-flex flex-column align-items-center"
      action="#"
      method="POST"
    >
      <div className="form-group w-75">
        <input
          type="name"
          className="form-control"
          placeholder="Enter Name"
          name="name"
          required=""
        />
      </div><br></br>
      <div className="form-group w-75">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          name="name"
          required=""
        />
      </div><br></br>
      <div className="form-group w-75">
        <textarea
          className="form-control"
          type="text"
          placeholder="Message"
          rows={7}
          name="name"
          required=""
          defaultValue={" Write Your Message here ..................."}
        />
      </div>
      <button type="submit" className="btn btn-submit btn-info w-75">
        {" "}
        Submit{" "}
      </button>
    </form>
  </div>
</section> */}

<section className="section section-contact">
  
  <div className="container">
  <div className="row">
    <div className="col-md-12" >
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13721.225683886692!2d76.69403619842798!3d30.70978499220185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef67a401d1b%3A0x60cd582ea8bf9d40!2sPhase-8%2C%20Industrial%20Area%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1705561174442!5m2!1sen!2sin"
  width="100%"
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div> </div> </div>
</section>


<section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center" >
          <h2 className="section-heading" data-aos="fade-up">Get In Touch</h2>
          < h3 className="section-subheading text-mutedd" style={{color:"white"}} data-aos="fade-up">
            have any questions? We'd love to hear for you.
          </h3>
          <p style={{color:"white"}} data-aos="fade-up">We Provide 24/7 Hours Of Home Energy Auditing Service To Our Customers.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form name="sentMessage" id="contactForm" noValidate="">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    id="name"
                    required=""
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    id="email"
                    required=""
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone *"
                    id="phone"
                    required=""
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your Message *"
                    id="message"
                    required=""
                    data-validation-required-message="Please enter a message."
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="clearfix" />
              <div className="col-lg-12 text-center">
                <div id="success" />
                <button type="submit" className="btnn btnn-xl" data-aos="fade-up">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


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
                  <i className="fab fa-telegram-plane" />
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


 );
};

export default Contact;