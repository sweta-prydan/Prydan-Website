import React from 'react';
import Custombanner from '../components/Card/customcard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Custom = () => {
    return <div>

        <Header />

        <div className='container'
            style={{
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
                Custom software development services <br />
                that solve your unique business problems</h1>

            <p className='lead text-muted'>
                Leverage the full potenial of software technologies <br />
                for your business to gain edge on competition.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style={{ maxWidth: '22rem' }}>
            <img
                src='/Custom-Software-Development-Banner.png'
                className='hover-zoom'
                width={400}
                style=
                {{
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
                Do you need custom software?</h2>

            <p>Most likely yes because every business is unique and need to innovate the unique way to solve <br />
                business problems. Custom software help you to solve your business problem more effectively <br />
                and give you edge on competition. Obviously, off-the-self software may not fit with your way <br />
                to doing business many times, no worries let develope a custom software for you that <br />
                exactly solve your own unique business problem perfectly. Leverage our decades of <br />
                experience in crafting bespoke software solution for businesses. Which is user friendly, <br />
                save you operational cost, scale with your business and secure. As Custom Software.
            </p>
        </div>

        <Custombanner />

        <Footer />

    </div>;
};
export default Custom;