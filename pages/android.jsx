import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Androidimage from '../components/Image/androidimage';
import Androidbanner from '../components/Card/androidcard';
import Androidfaq from '../components/Faq/androidfaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Android = () => {
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
                Hire Android developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Androidimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>We have made it easy to Hire Android developers</h2>

                <p>As we at Prydan are using Android we have top-of-the-line expertise in combining a possible<br />
                    number of front and back end Androidtechnologies like Kotlin, React Native, Flutter,<br />
                    to build scalable web architectures, so you don’t have to worry about<br />
                    scalability and flexibility when your product grows.
                </p>
            </div>
        </div>

        <div>

            <Androidbanner />

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

            <p style={{textAlign: "center"}}>The two aspects of about our Angular developers make us right choice for your hiring requirement.
            </p>
        
        <Poster />

        <Androidfaq />

        <Footer />
    </div>;
};
export default Android;