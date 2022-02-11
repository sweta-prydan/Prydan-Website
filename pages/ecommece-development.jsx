import React from 'react';
import Ecommercebanner from '../components/Card/ecommercecard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Ecommerce = () => {
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
                E-commerce development services <br />
                to build innovative experiences</h1>

            <p className='lead text-muted'>Solve your unique business challenges by building
                <br />custom applications.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style={{ maxWidth: '22rem' }}>
            <img
                src='/ecommerce5.jpg'
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
                Do you need E-commerce Developer?</h2>

            <p>If you are looking for the best E-commerce web development services, then you are at the<br />
                right place. At The prydan, we guide you with a systematic approach to select an appropriate<br />
                E-commerce platform that suits best to your needs. We are a bunch of certified developers <br />
                who are actively involved in offering flexible engagement model with SEO-friendly web <br />
                presence.
            </p>
        </div>

        <Ecommercebanner />

        <Footer />

    </div>;
};
export default Ecommerce;