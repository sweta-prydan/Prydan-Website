import React from 'react';
import Hirededicatedbanner from '../components/Card/hirededicated';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Hirededicatedimage from '../components/Image/hirededicated';
import Hirededicatedfaq from '../components/Faq/hirededicatedfaq';

import { Button } from 'react-bootstrap';

const Hirededicated = () => {
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
                Hire Dedicated Developer</h1>

            <p className='lead text-muted'>
                Get risk free trial period of two weeks. Pay only if you are<br />
                satisfy.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>


        <Hirededicatedimage />

        <div style={{ textAlign: "center" }}>
            <h2 style=
                {{
                    fontSize: '40px',
                    marginBottom: '20px',
                    color: '#171c3f',
                    fontWeight: '700'
                }}>
                High skilled developers, engineers, coders, <br />
                QAs and designers</h2>

            <p>We help you build software development team in no time with zero overhead.
            </p>
        </div>

        <Hirededicatedbanner />


        <Hirededicatedfaq />

        <Footer />

    </div>;
};
export default Hirededicated;