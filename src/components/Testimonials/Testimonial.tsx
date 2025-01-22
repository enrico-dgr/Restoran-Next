import './Testimonial.scss'
import { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export interface TestimonialData {
  name: string
  description: string
  comment: string
  img: string
}

export interface TestimonialProps extends TestimonialData {
  className?: string
}

function Testimonial({
  name,
  description,
  img,
  className,
  comment,
}: TestimonialProps) {
  const classes = useMemo(() => {
    let value = 'testimonial'

    if (className) {
      value += ` ${className}`
    }

    return value
  }, [className])

  return (
    <div className={classes}>
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p className="comment">{comment}</p>
      <div className="user">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <div className="info">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
