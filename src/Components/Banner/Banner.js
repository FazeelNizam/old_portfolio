import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import HeaderImg from '../../Assets/img/header.svg'

import 'animate.css'
import './Banner.css'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }
  return (
    <>
      <div className="banner-container">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <div className="hedding-container">
                <h1>
                  {`Hi! I'm Fazeel`}{' '}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
              </div>
              <p>
                Hey, My name is Fazeel and I use Fazeel Nizam as my name across
                social media. I'm a Computer Engineering undergraduate and
                front-end web developer from Sri Lanka. My focus is to become a
                Software Engineer for that I'm self-learning JAVA, Nodejs, and
                SQL and I'm always curious to learn more when it comes to new
                technologies and creative coding.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? 'animate__animated animatezoomIn' : ''
                    }
                  >
                    <img src={HeaderImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <div></div>
    </>
  )
}

export default Banner
