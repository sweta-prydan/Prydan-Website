import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Backboneimage from '../components/Image/backboneimage';
import Backbonebanner from '../components/Card/backbonecard';
import Backbonefaq from '../components/Faq/backbonefaq';
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
                Hire Backbone.js developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Backboneimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'

                    }}>We have made it easy to Hire Backbone.js developers</h2>

                <p>As we at Prydan are using Backbone.js in many of the web development projects,we have in<br />
                    house team of Backbone.js developers. We have pool of Backbone.js developers who has<br />
                    demonstrated strong expertise in Backbone.js and worked on multiple web development<br />
                    projects.
                </p>
            </div>
        </div>

        <div>

            <Backbonebanner />

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
        <p style={{ textAlign: "center" }}>The two aspects of about our Backbone.js developers make us right choice for your hiring requirement.
        </p>
        <Poster />

        <Backbonefaq />

        <Footer />
    </div>;
};
export default Backbone;