import React from 'react';
import Appbanner from '../components/Card/appcard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const App = () => {
    return <div>

        <Header />

        <div className='container'
            style={{
                marginTop: "120px",
                marginBottom: "180px",
                textAlign: "center"
            }}>

            <h1 className='h1'
                style={{
                    fontSize: "59px",
                    fontWeight: "700",
                    color: "#171c3f",
                    marginBottom: "40px",
                }}>
                Application development services <br />
                to accelerate your business growth</h1>

            <p className='lead text-muted'>Our next-gen app development offering simplifies <br />
                business complexities for some of the most successful <br /> companies.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style={{ maxWidth: '22rem' }}>
            <img
                src='/application-development.jpg'
                className='hover-zoom'
                width={400}
                style={{
                    marginLeft: '400px',
                    zoomWidth: 500,
                }} />
        </div>

        <div style={{ textAlign: "center" }}>
            <h2 style=
                {{
                    fontSize: '40px',
                    marginBottom: '20px',
                    color: '#171c3f',
                    fontWeight: '700'
                }}>
                What is application development service?</h2>

            <p> Application development services allow you to build consumer-facing or B2B apps for a<br />
                range of digital platforms like mobile, web, desktop, smartwatch, VR and AR.<br />
            </p>
        </div>

        <Appbanner />

        <Footer />

    </div>;
};
export default App;