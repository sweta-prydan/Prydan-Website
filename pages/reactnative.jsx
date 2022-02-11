import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Reactnativeimage from '../components/Image/reactnativeimage';
import Reactnativebanner from '../components/Card/reactnativecard';
import Reactnativefaq from '../components/Faq/reactnativefaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Reactpage = () => {
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
                Hire React Native developers</h1>

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
                    }}>Hire best React Native developers</h2>

                <p>Hiring a right react native developer is crucial for the success of your project. We are a team<br />
                    of experienced React Native Developers, programmers, coders, and engineers. Each of our<br />
                    developers has 4+ years of experience in React Native and has built Dozens of Apps which are<br />
                    live in the App store for React Native developers.
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
export default Reactpage;