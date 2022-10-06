import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/img/linkedin.svg";
import facebookIcon from "../assets/img/facebook.svg";
import githubIcon from "../assets/img/github.svg";
import { Resume } from "./Resume";

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Resume />
          <Col size={12} sm={6}>
            <h1 className='logo'>BRZANE</h1>
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/brzane-barmaga/'>
                <img src={linkedinIcon} alt='linkedin' />
              </a>
              <a href='https://www.facebook.com/BRZANMESSI/'>
                <img src={facebookIcon} alt='facebook' />
              </a>
              <a href='https://github.com/brzane'>
                <img src={githubIcon} alt='github' />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
