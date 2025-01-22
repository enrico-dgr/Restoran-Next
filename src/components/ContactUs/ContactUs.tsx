'use client'

import './ContactUs.scss'
import Section from '../Section/Section'
import useVisualized from '../../hooks/useVisualized/useVisualized'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export default function Reservation() {
  const { ref: refHeader, visualized: visualizedHeader } = useVisualized()
  const { ref: refForm, visualized: visualizedForm } = useVisualized()

  return (
    <Section className="section-contact-us">
      <div
        className={`section-contact-us__header ${
          visualizedHeader ? 'fadeInUp' : ''
        }`}
        ref={refHeader}
      >
        <h5 className="section-title before after text-primary">Contact Us</h5>
        <h1 className="mb-5">Contact For Any Query</h1>
      </div>
      <div className="section-contact-us__content">
        <div className="contacts">
          <div className="contact">
            <h5 className="section-title after text-primary">Booking</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelopeOpen} /> book@example.com
            </p>
          </div>
          <div className="contact">
            <h5 className="section-title after text-primary">General</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelopeOpen} /> info@example.com
            </p>
          </div>
          <div className="contact">
            <h5 className="section-title after text-primary">Technical</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelopeOpen} /> tech@example.com
            </p>
          </div>
        </div>
        <div className="send-message mt-4">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              allowFullScreen={false}
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="form-container">
            <div className={visualizedForm ? 'fadeInUp' : ''} ref={refForm}>
              <form>
                <div className="name">
                  <input type="text" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="email">
                  <input type="email" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="subject">
                  <input type="text" id="subject" placeholder="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="message">
                  <textarea placeholder="Message" id="message"></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <div className="confirm">
                  <button className="btn btn-primary py-3" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
