import React from 'react';
import Productbanner from '../components/Card/productcard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Softwareproduct = () => {
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
                Software product development services</h1>

            <p className='lead text-muted'>Together, let’s turn your ideas into a strong, efficient <br />
            product and make your software your competitive <br/>
            advantage.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style=
            {{
                maxWidth: '22rem'
            }}>
            <img
                src='/software product development.png'
                className='hover-zoom'
                width={400}
                style=
                {{
                    marginLeft: '400px',
                    zoomWidth: 500,
                }}
            />
        </div>

        <div style={{ textAlign: "center" }}>
            <h2 style=
                {{
                    fontSize: '40px',
                    marginBottom: '20px',
                    color: '#171c3f',
                    fontWeight: '700'
                }}>
                Do you need software Product ?</h2>
            <p> Our services are tailored to meet the needs of each client. We apply digital product<br />
            methodologies, including rapid prototyping, ongoing usability testing, and iterative <br />
            development to bridge the gap between the digital experiences of users and their physical<br/>
            ones.
            </p>
        </div>

        <Productbanner />

        <Footer />

    </div>;
};
export default Softwareproduct;