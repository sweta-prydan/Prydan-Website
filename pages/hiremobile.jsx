import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Hiremobileimage from '../components/Image/mobileimage';
import Mobilebanner from '../components/Card/hiremobilecard';
import Mobilefaq from '../components/Faq/hiremobilefaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Mobile = () => {
    return <div>
        <Header />
        <div className='container'
            style={{
                marginTop: "150px",
                marginBottom: "180px",
                marginLeft: "120px"
            }}>

            <h1 className='h1'
                style={{
                    fontSize: "59px",
                    fontWeight: "700",
                    color: "#171c3f",
                    marginBottom: "40px"
                }}>
                Hire Mobile App developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Hiremobileimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>Hire best Mobile App Developers
                </h2>

                <p> By Hiring best Mobile App Developers you can bring your product to new height. Mobile App<br />
                    Developers at Prydan has helped many products the give competitive edge over comptition<br />
                    by providing excellent performance and best user experience.
                </p>
            </div>
        </div>

        <div>

            <Mobilebanner />

        </div>
        <h2
            style={{
                fontSize: "35px",
                marginBottom: "20px",
                color: "#171c3f",
                textAlign: "center",
                fontWeight: "700",
                marginTop: "20px"

            }}>Why should you hire us?</h2>

        <p style={{ textAlign: "center" }}>The two aspects of about our Angular developers make us right choice for your hiring requirement.
        </p>

        <Poster />

        <Mobilefaq />

        <Footer />
    </div>;
};
export default Mobile;
