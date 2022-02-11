import React from 'react';
import Apibanner from '../components/Card/apicard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Api = () => {
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
                API integration services to get<br />
                systems and apps to work together</h1>

            <p className='lead text-muted'>Cut down development time and costs by integrating
                <br />third-party API platforms & systems.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay' style={{ maxWidth: '22rem' }}>
            <img
                src='/API.png'
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
                API Development Services?</h2>

            <p>Connecting to an external service through an API is often the best and fastest solution to<br />
                provide key functionality in an application. Often it is also the only solution. That is why<br />
                proper implementation of API is so important. We integrate systems but also create dedicated <br />
                APIs for web applications. We make connections between services reliable and secure.
            </p>
        </div>

        <Apibanner />

        <Footer />

    </div>;
};
export default Api;