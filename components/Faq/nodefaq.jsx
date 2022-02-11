import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Nodefaq = () => {
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
                    What is Node.js and how it works?
                </Accordion.Header>
                <Accordion.Body>
                    Node.js is a virtual machine that uses JavaScript as its scripting language and runs Chrome’s V8 JavaScript engine. Basically, Node.js is based on an event-driven architecture where I/O runs asynchronously making it lightweight and efficient.
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
                    Enumerate the differences between NodeJS and Javascript?
                </Accordion.Header>
                <Accordion.Body>
                    Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers. NodeJS code can be run outside the browser.
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
                    Do you provide any document to secure the authority of my project?
                </Accordion.Header>
                <Accordion.Body>
                    Yes, we do. You will have 100% ownership of your Node project. It includes NDA, copyright, source code, intellectual property rights, etc.
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
                    How NodeJS secure to other languages?</Accordion.Header>
                <Accordion.Body>
                    The Node. js ecosystem, however, consists of many different modules and libraries that you can install. It is very common to use a lot of them in your projects. This creates a security issue; when using code written by someone else, you can't be 100 percent sure that it's secure.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <div>

        <Inquiry />

        </div>

    </div>;
};

export default Nodefaq;