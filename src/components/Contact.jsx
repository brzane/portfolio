import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if()
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_djy1gbc",
        "template_g3hbl9c",
        form.current,
        "Ey9Bjyilq0zyJosUD"
      )
      .then(
        (result) => {
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div className={"animate__animated animate__fadeIn"}>
              <h2>Got a Problem to solve ?</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className='px-1'>
                    <input
                      type='text'
                      name='first-name'
                      value={formDetails.firstName}
                      placeholder='First Name'
                      required
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className='px-1'>
                    <input
                      type='text'
                      name='last-name'
                      value={formDetails.lasttName}
                      placeholder='Last Name'
                      required
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className='px-1'>
                    <input
                      type='email'
                      name='user-email'
                      value={formDetails.email}
                      placeholder='Email Address'
                      required
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className='px-1'>
                    <input
                      type='tel'
                      name='phone'
                      value={formDetails.phone}
                      placeholder='Phone No.'
                      required
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className='px-1'>
                    <textarea
                      rows='6'
                      name='message'
                      value={formDetails.message}
                      placeholder='Message'
                      required
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }></textarea>
                    {status.message && (
                      <Row>
                        <p
                          className={
                            status.success === false
                              ? " message bg-danger"
                              : " message bg-success"
                          }>
                          {status.message}
                        </p>
                      </Row>
                    )}
                    <button type='submit'>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
