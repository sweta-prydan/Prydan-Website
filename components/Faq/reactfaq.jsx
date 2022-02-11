import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Reactfaq = () => {
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
                How much does it cost to Hire a react js developer?
                </Accordion.Header>
                <Accordion.Body>
                Typically we charge $15/hour for react js developers. However, actual price varies based on skills and experience.
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
                How can I choose a developer of my choice?
                </Accordion.Header>
                <Accordion.Body>
                If you prefer, you can conduct as many interviews as you want, before you hire a developer of your choice. If in-case, the expertise of a hired developer does not deliver the desired output or if you want to add more developers with the diverse skill-set, then we will help you in both situations right away. We are offering peace of mind with 100% success guaranteed.
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
                What if I am not satisfied with the developer's work?
                </Accordion.Header>
                <Accordion.Body>
                In the unlikely case that you are not satisfied with one of our developers, we will replace him/her with someone having similar skills from our development team. And yes, you can thoroughly interview the developer before finalizing him/her.
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
                How much does it cost to Hire a ReacJS developer?
                </Accordion.Header>
                <Accordion.Body>
                The big difference is results. our years of experience working remotely and expertise in software engineering help us to deliver results. We nurture good engineers and take all the deligence before we deploy them to for your business.
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
                Will the hired developer work only for me?
                    </Accordion.Header>
                <Accordion.Body>
                Yes, that’s what we offer- the developers you hire will work only on your project and terms. If you hire an entire dedicated developers’ team then the entire team will work only on your project.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <div>

        <Inquiry />

        </div>

    </div>;
};

export default Reactfaq;