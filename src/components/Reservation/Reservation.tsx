'use client'

import './Reservation.scss'
import Section from '../Section/Section'
import useVisualized from '../../hooks/useVisualized/useVisualized'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import ReactDatePicker from 'react-datepicker'

const videoUrl =
  'https://www.youtube.com/embed/C3psWoyNzJ4?autoplay=1&modestbranding=1&showinfo=0'

export default function Reservation() {
  const { ref: refContainer, visualized: visualizedContainer } = useVisualized()
  const { ref: refForm, visualized: visualizedForm } = useVisualized()

  const [showModal, setShowModal] = useState(false)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [dateInputFocused, setDateInputFocused] = useState<boolean>(false)

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [showModal])

  return (
    <>
      <Section
        className={`section-reservation px-0 ${
          visualizedContainer ? 'fadeInUp' : ''
        }`}
        containerClassName="px-0"
        ref={refContainer}
      >
        <div className="video">
          <button
            type="button"
            className="btn-play"
            onClick={() => setShowModal(!showModal)}
          >
            <span></span>
          </button>
        </div>
        <div className={`form-container p-5`}>
          <div
            className={visualizedForm ? 'fadeInUp' : ''}
            ref={refForm}
          >
            <h5 className="section-title after text-primary">Reservation</h5>
            <h1 className="text-white mb-4">Book A Table Online</h1>
            <form>
              <div className="name">
                <input type="text" id="name" placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="email">
                <input type="email" id="email" placeholder="Your Email" />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="date">
                <ReactDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  onFocus={() => setDateInputFocused(true)}
                  onBlur={() => setDateInputFocused(false)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="date"
                  id="datetime"
                  placeholderText="Date & Time"
                ></ReactDatePicker>
                <label
                  className={startDate || dateInputFocused ? 'in-use' : ''}
                  htmlFor="datetime"
                >
                  Date &amp; Time
                </label>
              </div>
              <div className="number">
                <select id="select1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <label htmlFor="select1">No Of People</label>
              </div>
              <div className="message">
                <textarea placeholder="Special Request" id="message"></textarea>
                <label htmlFor="message">Special Request</label>
              </div>
              <div className="confirm">
                <button className="btn btn-primary py-3" type="submit">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      <div className={`reservation-modal ${showModal ? 'show' : ''}`}>
        <div className="reservation-modal__dialog">
          <div className="header">
            <h5 className="title">Youtube Video</h5>
            <FontAwesomeIcon
              size="2x"
              icon={faClose}
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="body">
            <iframe
              className="embed-responsive-item"
              src={showModal ? videoUrl : ''}
              allowFullScreen
              {...{ allowscriptaccess: 'always' }}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
