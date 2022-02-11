import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Mobilefaq = () => {
    return <div className='container'>
        <h2 style=
            {{
                fontSize: "35px",
                fontWeight: "700",
                textAlign: "center",
                color: "#171c3f",
                marginTop: "15px",
                marginBottom: "55px",
            }}>Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0"
                style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    How much does it cost to Hire a Mobile App developer?
                </Accordion.Header>
                <Accordion.Body>
                    Typically we charge $15/hour for Mobile App developers. However, actual price varies based on skills and experience.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    Will the hired developer work only for me?</Accordion.Header>
                <Accordion.Body>
                    Yes, that’s what we offer- the developers you hire will work only on your project and terms. If you hire an entire dedicated developers’ team then the entire team will work only on your project.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    How much does it cost to Hire a Backbone.js developer?</Accordion.Header>
                <Accordion.Body>
                    Typically we charge $15/hour for Backbone.js developers. However, actual price varies based on skills and experience.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    Will I have complete control over the hired developers?</Accordion.Header>
                <Accordion.Body>
                    Yes, the developers you hire from us will dedicatedly work on your project as your employees only. You will have the total access and complete control on them through your convenient communication platform.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    How do you manage the code?</Accordion.Header>
                <Accordion.Body>
                    For source code management and version control, we use Github. Our developers will regularly push the code so you can review all the commits and manage it easily.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <div>

            <Inquiry />

        </div>

    </div>;
};

export default Mobilefaq;