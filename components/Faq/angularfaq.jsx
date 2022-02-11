import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Angularfaq = () => {
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
                    Is building a web app in Angular is a secure choice?</Accordion.Header>
                <Accordion.Body>
                    Absolutely yes! Angular is a JavaScript framework that works as per REST, which helps you to build high traffic applications keeping all the data secured and encrypted.
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
                    Why were client-side frameworks like Angular introduced?</Accordion.Header>
                <Accordion.Body>
                    Back in the day, web developers used VanillaJS and jQuery to develop dynamic websites but, as the logic of one's website grew, the code became more and more tedious to maintain. For applications that use complex logic, developers had to put in extra effort to maintain separation of concerns for the app.
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
                    Do you provide any document to absolute ownership of my Angular project?</Accordion.Header>
                <Accordion.Body>
                    Rest assured, you will have 100% ownership of your Angular project. It includes NDA, copyright, source code, intellectual property rights, etc.
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
                    How will you manage the code in my Angular project?</Accordion.Header>
                <Accordion.Body>
                    We use Github for source code management and version control. Our Angular developers will regularly push the code so you can review all the commits and manage them easily.
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
                    May I test your Angular developer's expertise and industry experience?</Accordion.Header>
                <Accordion.Body>
                    We have incredibly talented Angular developers who have in-depth knowledge and extensive experience in building real-time and dynamic apps using Angular. Hire Angular developer from us for top-grade Angular development services to achieve desired business results.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <div>

        <Inquiry />

        </div>

    </div>;
};

export default Angularfaq;