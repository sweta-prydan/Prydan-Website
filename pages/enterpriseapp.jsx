import React from 'react';
import Enterprisebanner from '../components/Card/enterprisecard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Enterprice = () => {
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
                Enterprise application development services</h1>

            <p className='lead text-muted'>Enterprise-grade apps delivered through state-of-<br />
                the-art technology for improved performance and <br />
                efficiency of your business. You get robust and <br />
                scalable enterprise app that maximize business <br />
                growth.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style={{ maxWidth: '22rem' }}>
            <img
                src='/application-development.jpg'
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
                What is enterprice application development service?</h2>

            <p>Enterprise application development is evolving to become more agile and collaborative<br />
                where IT works to build applications both with internal business teams and agencies external<br />
                to the company Enterprise application development is evolving to become more agile and<br />
                collaborative where IT works to build applications both with internal business teams and<br />
                agencies external to the company.
            </p>
        </div>

        <Enterprisebanner />

        <Footer />

    </div>;
};
export default Enterprice;