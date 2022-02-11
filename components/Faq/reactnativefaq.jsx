import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Reactnativefaq = () => {
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
                How much does it cost to Hire a react Native developer?
                </Accordion.Header>
                <Accordion.Body>
                Typically we charge $15/hour for react native developers. However, actual price varies based on skills and experience.
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
                May I know your developer’s core expertise and industry experience?
                </Accordion.Header>
                <Accordion.Body>
                We have extremely talented Agile software developers who have in-depth knowledge and extensive experience in all the top-notch technologies.
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
                How do you make working remotely successful?
                </Accordion.Header>
                <Accordion.Body>
                We have decades of experience working for our oversease clients, developers, designers and business partners. We have learn the art and science of dynamics of remote software developement. We have equipped ourself with all the latest tools and techniques to make remote colloboration successful.
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
                Will the hired developer work only for me?
                </Accordion.Header>
                <Accordion.Body>
                Yes. He will. It is your developer and works only for you.
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
                What if I am not satisfied with the developer's work?
                    </Accordion.Header>
                <Accordion.Body>
                We will replace the developer or give your money back.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <div>

        <Inquiry />

        </div>

    </div>;
};

export default Reactnativefaq;