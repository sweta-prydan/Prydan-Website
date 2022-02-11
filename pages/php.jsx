import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Phpimage from '../components/Image/phpimage';
import Phpbanner from '../components/Card/phpcard';
import Phpfaq from '../components/Faq/phpfaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Php = () => {
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
                Hire PHP developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Phpimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>Hire best PHP Developers</h2>

                <p>Hire top notch PHP developers who works dedicatedly for your web development project. PHP<br />
                developers has more than decades of experience at Prydan.
                </p>
            </div>
        </div>

        <div>

            <Phpbanner />

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

        <Phpfaq />

        <Footer />
    </div>;
};
export default Php;