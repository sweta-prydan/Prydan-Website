import React from 'react';
import Softbanner from '../components/Card/softwarecard';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Button } from 'react-bootstrap';

const Software = () => {
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
                Dedicated Software Development Team</h1>

            <p className='lead text-muted'>Hire an on-site,off-site or offshore dedicated <br />
                software development team with highly skilled IT <br />
                Professionals.Save yourself from recruitment hassles <br />
                and infrastructure cost.
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
                Do you need dedicated software development team?</h2>
            <p> Prydan help you upgrade your software development capabilities with dedicated software <br />
                development teams. We allow our clients to create a dedicated team based on what skills do <br />
                they require for their project.
            </p>
        </div>

        <Softbanner />

        <Footer />

    </div>;
};
export default Software;