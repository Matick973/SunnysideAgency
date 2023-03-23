import arrow from './images/icon-arrow-down.svg';
import './App.scss';
import NavBar from './components/Navbar';
import FooterNavBar from './components/FooterNavbar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <div className='slogan'>
          <h1>WE ARE CREATIVES</h1>
          <div className='arrow'>
            <img src={arrow} alt='slogan we are creative'/>
          </div>
        </div>
      </header>
      
      <div className='l1'>
        <div div className='text-container'>
          <h2>Transform your brand</h2>
          <p>We are a full-service creative agency specializing in<br/> helping brands grow fast. Engage your clients through<br/> compelling visuals that do most of marketing for you</p>
          <a href='*' className='text-deco yellow'>LEARN MORE</a>
        </div>

        <div className='back-image picture-container l1-image'></div>
      </div>

      <div className='l2'>
        <div className='back-image picture-container l2-image'></div>

        <div className='text-container'>
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, researchers,<br/> photographers, videographers and copywriters, we'll<br/> build and extend your brand in digital places.</p>
          <a href='*' className='text-deco red'>LEARN MORE</a>
        </div>
      </div>

      <div className='l3'>
        <div className='back-image picture-container bottom-align l3-image spec'>
          <div className='text-hover-picture dark-desaturated-cyan'>
            <h3>Graphic Design</h3>
            <p>Great design makes memorable. We deliver<br/>artwork that underscores your brand message<br/> and captures potential clients' attention.</p>
          </div>
        </div>
        <div className='back-image picture-container bottom-align l3-image-2 spec'>
          <div className='text-hover-picture dark-blue'>
            <h3>Photography</h3>
            <p>Increase your credibility by getting the most<br/> stunning, high-quality photos that improve your<br/> business image.</p>
          </div>
        </div>
      </div>

      <div className='l4'>
        <div>
          <h4> CLIENT TESTIMONIALS</h4>
        </div>

        <div className='clients'>
          <div className='client-container'>
            <div className='back-image client-picture emily'>
              
            </div>
            <div className='client-testimonial'>
              <p>
                We put our trust in Sunnyside and they<br/> delivered, making sure our needs were met <br/> and deadlines were always hit.
              </p>
            </div>
            <h5>Emily R.</h5>
            <p>Marketing Director</p>
          </div>

          <div className='client-container'>
          <div className='back-image client-picture thomas'>
              
              </div>
              <div className='client-testimonial'>
                <p>
                  Sunnyside's enthusiasm coupled with their<br/> keen interest in our brands success made it<br/> a satisfying and enjoyable experience.
                </p>
              </div>
              <h5>Thomas S.</h5>
              <p>Chief Operating Officer</p>
          </div>

          <div className='client-container'>
          <div className='back-image client-picture jennie'>
              
              </div>
              <div className='client-testimonial'>
                <p>
                  Incredible end result! Our sales increased<br/> over 400% when we worked with Sunnyside. <br/> Highly recommended!
                </p>
              </div>
              <h5>Jennie F.</h5>
              <p>Business Owner</p>
          </div>

        </div>

      </div>

      <div className='l5'>
        <div className='back-image mosaic l5-image-1'></div>
        <div className='back-image mosaic l5-image-2'></div>
        <div className='back-image mosaic l5-image-3'></div>
        <div className='back-image mosaic l5-image-4'></div>
      </div>

      <footer>
        <FooterNavBar/>
      </footer>
    </div>
  );
}

export default App;
