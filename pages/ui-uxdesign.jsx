import React from 'react';
import Banner from '../components/Card/servicecard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Service = () => {
  return <div>

    <Header />

    <div className='container'
      style=
      {{
        marginTop: "120px",
        marginBottom: "180px",
        textAlign: "center"
      }}>
      <h1 className='h1'
        style=
        {{
          fontSize: "59px",
          fontWeight: "700",
          color: "#171c3f",
          marginBottom: "40px",
        }}>
        UI/ UX Design</h1>

      <p className='lead text-muted'>
        Our sleek and irresistible User Experience and <br />
        Interaction manners will amaze your clients for sure.
      </p>

      <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
    </div>

    <div className='bg-image hover-zoom hover-overlay'
      style={{
        maxWidth: '22rem'
      }}>
      <img src='/ui-ux.jpg'
        className='hover-zoom'
        width={400}
        style={{
          marginLeft: '400px',
          zoomWidth: 500,
        }}
      />
    </div>

    <div style={{ textAlign: "center" }}>
      <h2 style=
        {{
          fontSize: '40px',
          marginBottom: '20px',
          color: '#171c3f',
          fontWeight: '700'
        }}>
        Do you need custom software?</h2>

      <p>Most likely yes because every business is unique and need to innovate the unique way to solve business problems. <br />
        Custom software help you to solve your business problem more effectively and give you edge on competition.<br />
        Obviously,off-the-self software may not fit with your way to doing business many times, no worries let's<br />
        develope a custom software for you that exactly solve your own unique business problem perfectly. <br />
        Leverage our decades of experience in crafting bespoke software solution for businesses. Which <br />
        is user friendly, save you operational cost, scale with your business and secure. As Custom <br />
        Software.
      </p>
    </div>

    <Banner />

    <Footer />

  </div>;
};
export default Service;