import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Angularimage from '../components/Image/angularimage';
import Angularbanner from '../components/Card/angularcard';
import Angularfaq from '../components/Faq/angularfaq';
import Poster from '../components/Poster/poster';

import { Button } from 'react-bootstrap';

const Angular = () => {
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
                Hire Angular developers</h1>

            <p className='lead text-muted'>
                Get high skill programmers, engineers and coders on <br />
                monthly, weekly or hourly basis.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <Angularimage />

        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>We have made it easy to Hire Angular developers</h2>

                <p>As we at Prydan are using Angular we have top-of-the-line expertise in combining a possible<br />
                    number of front and back end technologies like AngularJS+ Rails, AngularJS+ Node,<br />
                    AngularJS+ Php, to build scalable web architectures, so you don’t have to worry about<br />
                    scalability and flexibility when your product grows.
                </p>
            </div>
        </div>

        <div>

            <Angularbanner />

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

        <Angularfaq />

        <Footer />
    </div>;
};
export default Angular;