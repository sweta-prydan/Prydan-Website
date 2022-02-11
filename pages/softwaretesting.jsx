import React from 'react';
import Productbanner from '../components/Card/productcard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Testing = () => {
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
                Software testing services</h1>

            <p className='lead text-muted'>Confidently deliver software faster with a talented <br />
                team of testers and robust QA processes
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style=
            {{
                maxWidth: '22rem'
            }}>
            <img
                src='/dedicated-developers.jpg'
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
                Why should you outsource software testing?</h2>
            <p> Assigning development and testing to two different teams has many benefits. You get an <br />
            unbiased objective evaluation of your application. By outsourcing the quality assurance, the <br />
            time of defect detection decreases, making the process much faster.
            </p>
        </div>

        <Productbanner />

        <Footer />

    </div>;
};
export default Testing;