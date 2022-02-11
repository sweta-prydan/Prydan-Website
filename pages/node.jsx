import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Nodeimage from '../components/Image/nodeimage';
import Nodebanner from '../components/Card/nodecard';
import Nodefaq from '../components/Faq/nodefaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Backbone = () => {
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
                Hire Node JS developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Nodeimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>We have made it easy to Hire Node JS developers</h2>

                <p>We have in-house team of Expert Node JS Developers. Our NodeJS developers are called<br />
                    experts for a reason! Our devoted team of NodeJS developers has helped various types of<br />
                    enterprises to achieve their goals by developing web projects. Our developers are capable<br />
                    and updated with all technology trends. We offer a wide array of NodeJS web development<br />
                    services.
                </p>
            </div>
        </div>

        <div>

            <Nodebanner />

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
        <p style={{ textAlign: "center" }}>The two aspects of about our Node JS developers make us right choice for your hiring requirement.
        </p>
        <Poster />

        <Nodefaq />

        <Footer />
    </div>;
};
export default Backbone;