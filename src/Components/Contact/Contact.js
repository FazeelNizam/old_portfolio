import React from 'react'
import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'
import contactImg from '../../Assets/img/contact-img.svg'
import './Contact.css'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import emailjs from 'emailjs-com'

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})
  const [formError, setFormError] = useState({})
  const [isSubmit, setSubmit] = useState(false)

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError(validationForm(formDetails))
    setSubmit(true)

    if (Object.keys(formError).length === 0 && isSubmit) {
      setButtonText('Sending...')

      emailjs
        .sendForm(
          'service_ege1l1n',
          'template_tyky2lg',
          form.current,
          'dWbnuZE5il0hpfLP-'
        )
        .then(
          () => {
            setButtonText('Send')
            setStatus({ succes: true, message: 'Message sent successfully' })
            setFormDetails(formInitialDetails)
          },
          (error) => {
            setStatus({
              succes: false,
              message: 'Something went wrong, please try again later.',
            })
            console.log(error.text)
          }
        )
    }
  }

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  const validationForm = (value) => {
    const errors = {}
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!value.firstName) {
      errors.firstName = 'Please Enter First Name'
    }
    if (!value.lastName) {
      errors.lastName = 'Please Enter Last Name'
    }
    if (!value.email) {
      errors.email = 'Please Enter Email'
    } else if (!emailPattern.test(value.email)) {
      errors.email = 'Enter Valid Email'
    }
    if (!value.phone) {
      errors.phone = 'Please Enter Phone Number'
    }
    if (!value.message) {
      errors.message = 'Please Enter Message'
    }

    return errors
  }

  return (
    <>
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? 'animate__animated animatezoomIn' : ''
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <h2>Get In Touch</h2>
              <Row>
                <Col>
                  <div className="contact-icon">
                    <a href="http://m.me/FazeelNizam00" target="_blank">
                      <RiMessengerLine size={25} />
                      <span>Messanger</span>
                    </a>
                  </div>
                </Col>
                <Col>
                  <div className="contact-icon">
                    <a
                      href="https://api.whatsapp.com/send?phone=+94768114000"
                      target="_blank"
                    >
                      <RiWhatsappLine size={25} />
                      <span>Whatsapp</span>
                    </a>
                  </div>
                </Col>
              </Row>
              <form onSubmit={handleSubmit} ref={form}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstname"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate('firstName', e.target.value)
                      }
                    />
                    <span className="text-danger">{formError.firstName} </span>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastname"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                    <span className="text-danger">{formError.lastName} </span>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                    <span className="text-danger">{formError.email} </span>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      name="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                    <span className="text-danger">{formError.phone} </span>
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    ></textarea>
                    <span className="text-danger">{formError.message} </span>

                    <Col size={12}>
                      <button type="submit" value="Send">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? 'danger' : 'success'
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact

{
  /* <a href="mailto:fazeelmohamad5@gmail.com" target="_blank">Send a Message</a> */
}
{
  /* <a href="https://api.whatsapp.com/send?phone=+94768114000" target="_blank>Send a Message</a> */
}
