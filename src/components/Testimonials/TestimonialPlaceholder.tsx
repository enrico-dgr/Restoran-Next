import './Testimonial.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Testimonial() {
  return (
    <div className="testimonial is--placeholder">
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p className="comment"></p>
      <p className="comment"></p>
      <div className="user">
        <div className="img">
          <img src={'../img/user.png'} alt={'reviewer'} />
        </div>
        <div className="info">
          <h5></h5>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
