import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const webSkills = [
    {
      title: "HTML/CSS",
      meter: meter1,
    },
    {
      title: "JavaScript",
      meter: meter1,
    },
    {
      title: "React",
      meter: meter1,
    },
    {
      title: "Git|Github",
      meter: meter3,
    },
    {
      title: "Typescript",
      meter: meter3,
    },
    {
      title: "Redux",
      meter: meter3,
    },
    {
      title: "Bootstrap",
      meter: meter2,
    },
    {
      title: "jQuery",
      meter: meter2,
    },
    {
      title: "PHP",
      meter: meter3,
    },
    {
      title: "mySQL",
      meter: meter3,
    },
  ];
  const aiSkills = [
    {
      title: "Python",
      meter: meter1,
    },
    {
      title: "Machine Learning",
      meter: meter1,
    },
    {
      title: "Deep Learning",
      meter: meter2,
    },
    {
      title: "Data Engineering",
      meter: meter2,
    },
    {
      title: "Computer Vision",
      meter: meter1,
    },
    {
      title: "NLP",
      meter: meter3,
    },
    {
      title: "TensorFlow",
      meter: meter3,
    },
  ];

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx '>
              <h2>Skills</h2>
              <p>
                Some of my Web and AI skills that i can help you with <br></br>{" "}
              </p>
              <div className='web-skills'>
                <h3>Web Skills</h3>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className='owl-carousel owl-theme skill-slider'>
                  {webSkills.map((skill) => {
                    return (
                      <div className='item'>
                        <img src={skill.meter} alt={skill.title} />
                        <h5>{skill.title}</h5>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <div className='ai-skills'>
                <h3>AI Skills</h3>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className='owl-carousel owl-theme skill-slider'>
                  {aiSkills.map((skill) => {
                    return (
                      <div className='item'>
                        <img src={skill.meter} alt={skill.title} />
                        <h5>{skill.title}</h5>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='' />
    </section>
  );
};
