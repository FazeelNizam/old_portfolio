import React, { useEffect, useState } from 'react'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { FiGithub } from 'react-icons/fi'
import { BiHomeAlt2 } from 'react-icons/bi'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineProject } from 'react-icons/ai'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import logo from '../../Assets/img/logo.png'
import './Navbar.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const homeSection = document.querySelector('#home')
      const skillsSection = document.querySelector('#skills')
      const projectsSection = document.querySelector('#projects')
      const contactSection = document.querySelector('#contact')

      const homeOffset = homeSection.offsetTop - 200
      const skillsOffset = skillsSection.offsetTop - 200
      const projectsOffset = projectsSection.offsetTop - 200
      const contactOffset = contactSection.offsetTop - 200

      if (window.scrollY >= homeOffset && window.scrollY < skillsOffset) {
        setActiveLink('home')
      } else if (
        window.scrollY >= skillsOffset &&
        window.scrollY < projectsOffset
      ) {
        setActiveLink('skills')
      } else if (
        window.scrollY >= projectsOffset &&
        window.scrollY < contactOffset
      ) {
        setActiveLink('projects')
      } else if (window.scrollY >= contactOffset) {
        setActiveLink('contact')
      }

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <>
      <nav>
        <div class="navbar" className={scrolled ? 'navbar scrolled' : 'navbar'}>
          <div class="logo">
            <img className="logo-img" src={logo} alt="Logo" />
          </div>
          <ul class="menu">
            <li class="li">
              <a
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                <div className="icon">
                  <BiHomeAlt2 size={25} />
                </div>
                <div className="link-container">
                  <span className="label">Home</span>
                </div>
              </a>
            </li>
            <li class="li">
              <a
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                <div className="icon">
                  <GiSkills size={25} />
                </div>
                <div className="link-container">
                  <span className="label">Skills</span>
                </div>
              </a>
            </li>
            <li class="li">
              <a
                href="#projects"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                <div className="icon">
                  <AiOutlineProject size={24} />
                </div>
                <div className="link-container">
                  <span className="label">Projects</span>
                </div>
              </a>
            </li>
            <li class="li">
              <a
                href="#contact"
                className={
                  activeLink === 'contact'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('contact')}
              >
                <div className="icon">
                  <TbDeviceMobileMessage size={24} />
                </div>
                <div className="link-container">
                  <span className="label">Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="media-icons">
            <ul>
              <li>
                <a href="#">
                  <ImLinkedin2 size={20} />
                </a>
              </li>
              <li>
                <a href="https://github.com/FazeelNizam" target="_blank">
                  <FiGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/FazeelNizam00"
                  target="_blank"
                >
                  <ImFacebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
