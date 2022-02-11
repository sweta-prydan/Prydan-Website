import React from 'react';
import Mobilebanner from '../components/Card/mobilecard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Mobile = () => {
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
                Mobile app development services to <br />
                build innovative experiences</h1>

            <p className='lead text-muted'>In a mobile-first world, customers and workers want <br />
                more ways to engage with your brand. Build apps to <br /> meet their needs, faster.
            </p>

            <Button variant="outline-danger" className='rounded-pill'>Get Free Consultation</Button>
        </div>

        <div className='bg-image hover-zoom hover-overlay'
            style={{ maxWidth: '22rem' }}>
            <img src='/mobile-app.jpg'
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
                Do you need mobile app development services?</h2>

            <p> Prydan offers a dedicated team of mobile app developers specializing in Android, iOS,<br />
                React Native, and more to meet your project demands related to skilled resources or new <br />
                technologies expertise. Our team of expert mobile app programmers will bridge the talent <br />
                gap in your project, ensuring streamlined operations and cost-effective delivery.
            </p>
        </div>

        <Mobilebanner />

        <Footer />

    </div>;
};
export default Mobile;