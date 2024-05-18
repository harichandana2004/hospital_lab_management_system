import React from 'react';
import { Link } from 'react-router-dom'; 
import './homepage.css';

function Homepage() {
  return (
    <html>
      <head>
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.1/ionicons.min.css"></Link>
      </head>
   
    <body>
      <div className="homepage" align="center">
        <div className="background-image">
          <header>
            <h1>Welcome to STAR Laboratory</h1>
          </header>
          <main>
            <section>
              <h2>About Us</h2>
              <p style={{ fontFamily: 'Lucida Calligraphy' }}>Step into our hospital laboratory, a sanctuary where the synergy of pioneering science and heartfelt compassion thrives. Within our advanced facility, teeming with the latest technological marvels, a cadre of devoted experts labors tirelessly to pioneer medical breakthroughs and enhance patient well-being. From precision diagnostics to trailblazing research endeavors, we pursue excellence with unwavering determination. Embrace this journey with us as we embark on a transformative mission to touch and uplift the lives of those we serve.</p>
            </section>
            <section>
              <h2>Tests</h2>
              <div className="box1">
                
                <Link to="/left" target='_blank'><button>Urine Tests<ion-icon name="arrow-forward"></ion-icon></button></Link>
              </div>
              <div className="box2">
                
                <Link to="/right" target='_blank'><button>Blood Tests<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
              </div>
              <div className="box3">
                
                <Link to="/tm" target='_blank'><button>Tumor Tests<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
              </div>
              <div className="box4">
                
                <Link to="/hemo" target='_blank'><button>Diagnosis Tests<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
              </div>
              <div className="box5">
                
                <Link to="/diabetes" target='_blank'><button>Diabetes Tests<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
              </div>
              <div className="box6">
                
                <Link to="/covid" target='_blank'><button>Covid Tests<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
              </div>
            </section>
            <section>
              <div className='blinking'>
                <h2>RESERVATIONS</h2>
              </div>
              <Link to="/reservation" target='_blank'><button className='btn-primary d-grid gap-2'>Reserve a test here</button></Link>
            </section>
          </main>
        </div>
      </div>
    </body>
    </html>
  );
}

export default Homepage;