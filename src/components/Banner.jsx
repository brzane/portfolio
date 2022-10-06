import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "AI Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);

      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);

      setDelta(500);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <div className={"animate__animated animate__fadeIn"}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Brzane`}{" "}
                <span className='txt-rotate'>
                  <span className='wrap'>{text}</span>
                </span>
              </h1>
              <p>
                An enthusiastic AI engineering senior student currently enrolled
                in Damascus University . Seeking to deliver state-of-the-art AI
                solutions.<br></br>
                Front-End Developer with skill of programming to deliver an
                immersive and engaging user experience through efficient website
                development with React framework.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={10} md={6} xl={5}>
            <div className={"animate__animated animate__zoomIn"}>
              <img src={headerImg} alt='Header Img' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
