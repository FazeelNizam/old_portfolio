import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import './Projects.css'
import './sky.scss'
import 'animate.css'
import Frame from './Frame'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { projects } from './ProjectData.js'
import UI from '../../Assets/img/Illustrations/Breadchoice.png'
import CGU from '../../Assets/img/Illustrations/CGUToken.jpg'
import CRT from '../../Assets/img/Illustrations/Circuit.PNG'
import HLX from '../../Assets/img/Illustrations/Helix.PNG'
import D3 from '../../Assets/img/Illustrations/3D.PNG'
import CRE5 from '../../Assets/img/Illustrations/CRE05.PNG'
import MTR from '../../Assets/img/Illustrations/Motor.PNG'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  selectedImg
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')
  return (
    <>
      <section className='project' id='projects'>
        <div className='sky-container'>
          <div class='star1'></div>
          <div class='star2'></div>
          <div class='star3'></div>
        </div>

        <Container className='tab-container'>
          <Row>
            <Col size={12}>
              <h2>Projects</h2>
              <p>A small gallery of my recent projects.</p>
              <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                <Nav
                  variant='pills'
                  className='nav-pills mb-5 justify-content-center align-items-center'
                  id='pills-tab'
                >
                  <Nav.Item>
                    <Nav.Link eventKey='first'>Web Devs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>Illustrations</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <Row>
                      <Col size={12}>
                        <div className='gallery'>
                          <ImageList
                            sx={{ width: 1, height: 0.7 }}
                            variant='quilted'
                            cols={4}
                            rowHeight={110}
                          >
                            {imageData.map((item) => (
                              <ImageListItem
                                key={item.img}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                                layoutId={item.id}
                              >
                                <img
                                  className='gallery-img'
                                  {...srcset(
                                    item.img,
                                    121,
                                    item.rows,
                                    item.cols
                                  )}
                                  alt={item.title}
                                  loading='lazy'
                                  onClick={() => setSelectedImg(item.img)}
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                          {selectedImg && (
                            <Frame
                              selectedImg={selectedImg}
                              setSelectedImg={setSelectedImg}
                            />
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

const imageData = [
  {
    id: 1,
    img: UI,
    title: 'Breakfast',
    rows: 2.5,
    cols: 4,
  },
  {
    id: 2,
    img: MTR,
    title: 'Hats',
    cols: 1,
  },
  {
    id: 3,
    img: CGU,
    title: 'Honey',
    rows: 2,
    cols: 3,
  },
  {
    id: 4,
    img: HLX,
    title: 'Burger',
    rows: 2,
    cols: 1,
  },
  {
    id: 5,
    img: CRE5,
    title: 'Burger',
    rows: 2,
    cols: 1,
  },
  {
    id: 6,
    img: CRT,
    title: 'Burger',
    rows: 2,
    cols: 2,
  },
  {
    id: 7,
    img: D3,
    title: 'Burger',
    rows: 1,
    cols: 1,
  },
]

export default Projects
