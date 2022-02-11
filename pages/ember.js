import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Reactnativeimage from '../components/Image/reactnativeimage';
import Reactnativebanner from '../components/Card/reactnativecard';
import Reactnativefaq from '../components/Faq/reactnativefaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Ember = () => {
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
                Hire Ember.js developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Reactnativeimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>Hire best Ember.js developers</h2>

                <p>Hire top notch Ember.js developers who works dedicately for your web<br />
                    development project. Ember.js developers has more than decades of<br />
                    experience at Prydan.<br />
                </p>
            </div>
        </div>

        <div>

            <Reactnativebanner />

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
        <p style={{ textAlign: "center" }}>
            The two aspects of about our React JS developers make us right choice for your hiring requirement.
        </p>
        <Poster />

        <Reactnativefaq />

        <Footer />
    </div>;
};
export default Ember;