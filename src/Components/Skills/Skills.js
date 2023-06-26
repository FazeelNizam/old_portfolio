import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import ProgressBar from 'react-animated-progress-bar'
import { TbFileDownload } from 'react-icons/tb'
import CV from '../../Assets/cv/Fazeel_Nizam_CV.pdf'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import './Skills.css'

const Skills = () => {
  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  These are a few skills that I mastered. For the records, I'm
                  self-learning JAVA, Nodejs, and SQL partially. Also, I'm
                  familiar with OOP concepts, Design Patterns, Agile, and Scrum.
                </p>
                <a href={CV} download>
                  Download CV <TbFileDownload size={25} />
                </a>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={25}
                  slidesPerGroup={1}
                  navigation={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    750: {
                      slidesPerView: 3,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="85"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#00A1C7',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>Reactjs</h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="75"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#00A1C7',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>JAVA</h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="70"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#3f8304',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>PHP</h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="65"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#00A1C7',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>Bootstrap</h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="90"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#3f8304',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>Figma</h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="80"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#00A1C7',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>Autocad</h5>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="progress-bar">
                      <ProgressBar
                        width="250px"
                        fontColor="white"
                        trackWidth="30"
                        percentage="75"
                        trackPathColor="transparent"
                        trackBorderColor="none"
                        hollowBackgroundColor="transparent"
                        defColor={{
                          fair: 'orangered',
                          good: '#3f8304',
                          excellent: '#012188',
                        }}
                      />
                    </div>
                    <h5>Proteus</h5>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Skills
