'use client'

import './Footer.scss'
import Section from '../Section/Section'
import useVisualized from '../../hooks/useVisualized/useVisualized'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import SignUpBtn from './SignUpBtn'
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import routes from '../../constants/routes'
import Link from 'next/link'

export default function Footer() {
  const { ref: refContainer, visualized: visualizedContainer } = useVisualized()

  return (
    <Section
      className="footer__content"
      containerClassName={`footer pt-5 mt-5 ${
        visualizedContainer ? 'fadeIn' : ''
      }`}
      ref={refContainer}
    >
      <div className="container infos py-5 px-0">
        <div className="infos__subsection">
          <h4 className="section-title after">Company</h4>
          {[
            'About Us',
            'Contact Us',
            'Reservation',
            'Privacy Policy',
            'Terms & Condition',
          ].map((item, index) => (
            <a href="" key={`footer_link_${item}_${index}`}>
              <FontAwesomeIcon icon={faAngleRight} fontWeight={900} size="sm" />
              {item}
            </a>
          ))}
        </div>
        <div className="infos__subsection">
          <h4 className="section-title after">Contact</h4>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} fontWeight={900} />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faPhoneAlt} fontWeight={900} />
            +012 345 67890
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} fontWeight={900} />
            info@example.com
          </p>
          <div className="socials">
            <a href="">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="infos__subsection">
          <h4 className="section-title after">Opening</h4>
          <h5 className="mb-2">Monday - Saturday</h5>
          <p className="mb-3">09AM - 09PM</p>
          <h5 className="mb-2">Sunday</h5>
          <p className="mb-3">10AM - 08PM</p>
        </div>
        <div className="infos__subsection">
          <h4 className="section-title after">Newsletter</h4>
          <p className="mb-3">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <SignUpBtn />
        </div>
      </div>
      <div className="container copyright">
        <div className="text">
          © <a href="#">Your Site Name</a>, All Right Reserved. Designed By{' '}
          <a href="https://htmlcodex.com">HTML Codex</a>
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: `<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->`,
            }}
          />
          Distributed By{' '}
          <a href="https://themewagon.com" target="_blank">
            ThemeWagon
          </a>
        </div>
        <div className="menu">
          <Link href={routes.home.absolutePath}>Home</Link>
          <Link href={routes.home.absolutePath}>Cookies</Link>
          <Link href={routes.home.absolutePath}>Help</Link>
          <Link href={routes.home.absolutePath}>FQAs</Link>
        </div>
      </div>
    </Section>
  )
}
