import { Col, Row } from "react-bootstrap";

export const Resume = () => {
  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              For More Info <br></br> Check Out MY Resume
            </h3>
          </Col>
          <Col md={6} xl={7} style={{ textAlign: "end", marginTop: "20px" }}>
            <a href='/files/resume.pdf' className='download-btn' download>
              <span>Download</span>
            </a>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
