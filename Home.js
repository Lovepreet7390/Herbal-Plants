import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'



const Home = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <>
    
  {/* Header */}
  <header>
    <div className="container">
      <div className="intro-text" data-aos="zoom-in">
        <div className="intro-lead-in">Herbal Plants</div>
        <div className="intro-heading">
        Medicinal plants, also called medicinal herbs
        </div>
        <a href="#services" className="page-scroll btn btnn-xl">
          Service
        </a>
      </div>
    </div>
  </header>
  {/* Services Section */}
  <section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Services</h2>
          <h3 className="section-subheading text-muted">
          We provide some services to users.
          </h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4" data-aos="fade-up">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="glyphicon glyphicon-tree-conifer" />
          </span>
          <h4 className="service-heading">Plant Identification</h4>
          <p className="text-muted">
          We make people aware about identifying medicinal plants so that they can know everything about medicinal plants and can grow the plants at home..
          </p>
          {/* <button className='btn-read-more'>Read More</button> */}
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <span className="fa-stack fa-4x" >
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="glyphicon glyphicon-heart" />
          </span>
          <h4 className="service-heading">How to growing plants</h4>
          <p className="text-muted">
          We tell you the angle at which medicinal plants should grow in the season so that they can grow quickly. Most medicinal herbs like a soil high in organic matter.</p>
          {/* <button className='btn-read-more'>Read More</button> */}

        </div>
        <div className="col-md-4" data-aos="fade-up">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="glyphicon glyphicon-tint" />
          </span>
          <h4 className="service-heading">Plants Pruning and harvesting</h4>
          <p className="text-muted">
          What things should be kept in mind after the plant grows and when should the plant be pruned so that it is well prepared for harvesting?
          </p>
          {/* <button className='btn-read-more'>Read More</button> */}

        </div>
      </div>
    </div>
  </section>

  
  

  {/* About Section */}
  {/* <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">About</h2>
          <h3 className="section-subheading text-muted">
            Ajmal, I need help to learn how to tweak this part. I don't want
            53this timeline crap. Haha.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src="img/about/1.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src="img/about/2.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src="img/about/3.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="img-circle img-responsive"
                  src="img/about/4.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section> */}

  {/* Team Section */}
  {/* <section id="team" className="bg-light-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img
              src="http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg"
              className="img-responsive img-circle"
              alt=""
            />
            <h4>Kay Garland</h4>
            <p className="text-muted">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img
              src="http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg"
              className="img-responsive img-circle"
              alt=""
            />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Marketer</p>
            <ul className="list-inline social-buttons">
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img
              src="http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg"
              className="img-responsive img-circle"
              alt=""
            />
            <h4>Diana Pertersen</h4>
            <p className="text-muted">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 text-center">
          <p className="large text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
    </div>
  </section> */}



<div className='fouritems' style={{textAlign:"center", paddingLeft:"450px"}}>
<main>

  <ul>
    <li>
      <article className='article-art'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>

        <h3>Plants</h3>
        <p>Dedicated to fostering a connection between users and farmers in India, we take pride 
          in offering authentic herbal plants. Our mission revolves around  
          <Link href="#" className='read-more'> Read more</Link></p>
      </article>
    </li>
    <li>
      <article className='article-art'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
        </svg>

        <h3>Preview.</h3>
        <p>Dedicated to fostering a connection between users and farmers in India, we take pride 
          in offering authentic herbal plants. Our mission revolves around  
          <Link href="#" className='read-more'> Read more</Link></p>
      </article>
    </li>
    <li>
      <article className='article-art'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>

        <h3>Delivery</h3>
        <p>
        As a plant delivery service operating in India, we take pride in providing top-notch service to our 
          customers. Our commitment extends beyond merely  
          <Link href="#" className='read-more'> Read more</Link></p>
      </article>
    </li>
    <li>
      <article className='article-art'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>

        <h3>Profit.</h3>
        <p>
        As a plant delivery service operating in India, we take pride in providing top-notch service to our 
          customers. Our commitment extends beyond merely  
          <Link href="#" className='read-more'> Read more</Link>
          </p>
      </article>
    </li>
  </ul>
</main></div>
  

  {/* <div className='rightphoto-title'>
  <h1>How to make the website responsive</h1></div>
  <br />
  <div className="parent">
    <br />
    <div className="son">
      <p>
        {" "}
        Medicinal plants, also called medicinal herbs, have been discovered and used in traditional medicine 
        practices since prehistoric times. Plants synthesize hundreds of chemical compounds for various functions,
         including defense and protection against insects, fungi, diseases, and herbivorous mammals.
<br></br>
The earliest historical records of herbs are found from the Sumerian civilization, where hundreds of medicinal 
plants including opium are listed on clay tablets, c. 3000 BC. The Ebers Papyrus from ancient Egypt, c. 1550 BC, 
describes over 850 plant medicines. The Greek physician Dioscorides, who worked in the Roman army, documented over
 1000 recipes for medicines using over 600 medicinal plants in De materia medica, c. 60 AD; this formed the basis 
 of pharmacopoeias for some 1500 years. Drug research sometimes makes use of ethnobotany to search for pharmacologically active substances, and this approach has yielded hundreds of useful compounds. These include the common drugs aspirin, digoxin, quinine, and opium. The compounds found in plants are diverse, with most in four biochemical classes: alkaloids, glycosides, polyphenols, and terpenes. Few of these are scientifically confirmed as medicines or used in conventional medicine.{" "}
      </p>
    </div>
    <br />
    <div className="daughter">
      <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Salix_alba_004.jpg/1024px-Salix_alba_004.jpg" />
      </a>
    </div>
  </div> */}

{/* ===================== Wrapper ============================= */}

<section className='Wrapper-section'>
<div className="wrapper-card">
  <div className="drama">
    <div className="poster">
      <img
        src="https://m.media-amazon.com/images/I/71xplqSf5KL._AC_UF1000,1000_QL80_.jpg"
        alt="Tulsi"
      />
    </div>
    <div className="details">
      <h1>Tulsi</h1>
      <h2> Lamiaceae Family herbal Plant</h2>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        
      </div>
      <div className="tags">
        <span className="tag">Holi Basil</span>
      </div>
      <p className="desc">
      The botanical name of Tulsi is Ocimum sanctum. Tulsi is a domestic plant and is grown widely in India. It is also known by its different names at different places like Holy Basil in English, Thulasi in Tamil, Tulasi in Punjabi, Imli in Urdu etc. Tulsi is worshipped by people. Tulsi is known for its medicinal values, antimicrobial and antiviral properties which helps in purifying the air. Drugs obtained from Tulsi are used to cure stress, fever, decreases inflammation and increases stamina. It is an annual shrub with average height of 2 to 4 feet. Flowers are small and purple in color. It is found throughout in India but in MP it is found commonly.
      <Link href="#" className='read-more'>Read more</Link>
      </p>
          </div>
  </div>
</div>


<div className="wrapper-card">
  <div className="drama">
    <div className="poster">
      <img
        src="https://plantalay.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-18-at-11.20.14-AM.jpeg"
        alt="Sadabahar"
      />
    </div>
    <div className="details">
      <h1>Sadabahar</h1>
      <h2>Apocynacea family herbal Plant</h2>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        
      </div>
      <div className="tags">
        <span className="tag">Catharanthus roseus</span>
      </div>
      <p className="desc">
      The botanical name of Tulsi is Ocimum sanctum. Tulsi is a domestic plant and is grown widely in India. It is also known by its different names at different places like Holy Basil in English, Thulasi in Tamil, Tulasi in Punjabi, Imli in Urdu etc. Tulsi is worshipped by people. Tulsi is known for its medicinal values, antimicrobial and antiviral properties which helps in purifying the air. Drugs obtained from Tulsi are used to cure stress, fever, decreases inflammation and increases stamina. It is an annual shrub with average height of 2 to 4 feet. Flowers are small and purple in color. It is found throughout in India but in MP it is found commonly.
      <Link href="#" className='read-more'>Read more</Link>
      </p>

          </div>
  </div>
</div>

<div className="wrapper-card">
  <div className="drama">
    <div className="poster">
      <img
        src="https://preview.redd.it/how-to-use-safed-musli-v0-cbik6utmovhb1.png?width=1366&format=png&auto=webp&s=2059264135a1cbfd7d5e7e596a1eea07c59e7e4b"
        alt="Safed Musli"
      />
    </div>
    <div className="details">
      <h1>Safed Musli</h1>
      <h2>Asparagus Family herbal Plant</h2>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        
      </div>
      <div className="tags">
        <span className="tag">Chlorophytum borivilianum</span>
      </div>
      <p className="desc">
      The botanical name of Tulsi is Ocimum sanctum. Tulsi is a domestic plant and is grown widely in India. It is also known by its different names at different places like Holy Basil in English, Thulasi in Tamil, Tulasi in Punjabi, Imli in Urdu etc. Tulsi is worshipped by people. Tulsi is known for its medicinal values, antimicrobial and antiviral properties which helps in purifying the air. Drugs obtained from Tulsi are used to cure stress, fever, decreases inflammation and increases stamina. It is an annual shrub with average height of 2 to 4 feet. Flowers are small and purple in color. It is found throughout in India but in MP it is found commonly.
      <Link href="#" className='read-more'>Read more</Link>
      </p>

          </div>
  </div>
</div>

<div className="wrapper-card">
  <div className="drama">
    <div className="poster">
      <img
        src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/33432_aloe-vera-gift-plant.jpeg"
        alt="Aloe Vera"
      />
    </div>
    <div className="details">
      <h1>Aloe Vera</h1>
      <h2>Asphodelaceae family herbal Plant</h2>
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        
      </div>
      <div className="tags">
        <span className="tag">Aloe barbadensis miller</span>
      </div>
      <p className="desc">
      The botanical name of Tulsi is Ocimum sanctum. Tulsi is a domestic plant and is grown widely in India. It is also known by its different names at different places like Holy Basil in English, Thulasi in Tamil, Tulasi in Punjabi, Imli in Urdu etc. Tulsi is worshipped by people. Tulsi is known for its medicinal values, antimicrobial and antiviral properties which helps in purifying the air. Drugs obtained from Tulsi are used to cure stress, fever, decreases inflammation and increases stamina. It is an annual shrub with average height of 2 to 4 feet. Flowers are small and purple in color. It is found throughout in India but in MP it is found commonly.
      <Link href="#" className='read-more'>Read more</Link>
      </p>

          </div>
  </div>
</div>
</section>

{/* ================================= Wrapper end =================================== */}


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
  )
}

export default Home;