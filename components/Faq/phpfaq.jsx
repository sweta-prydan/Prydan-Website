import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Phpfaq = () => {
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
                What You Can Do with PHP?
                </Accordion.Header>
                <Accordion.Body>
                In PHP, You can generate pages and files dynamically,You can create, open, read, write emails and close files on the server.You can send and receive cookies to track the visitor of your website.
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
                Why PHP different to Other Languages?</Accordion.Header>
                <Accordion.Body>
                PHP is developed and maintained by a worldwide community of developers who make its source code freely available to download and use. PHP runs on various platforms such as Microsoft Windows, Linux, Mac OS, etc.
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
                How can PHP and Javascript interact?</Accordion.Header>
                <Accordion.Body>
                PHP and Javascript cannot directly interact since PHP is a server side language and Javascript is a client-side language. However, we can exchange variables since PHP can generate Javascript code to be executed by the browser and it is possible to pass specific variables back to PHP via the URL.
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

export default Phpfaq;