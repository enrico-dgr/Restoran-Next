import './CardTeam.scss'
import { useMemo } from 'react'
import CardFadeInUp from '../CardFadeInUp/CardFadeInUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export interface CardTeamProps {
  name: string
  description: string
  img: string
  fb: string
  x: string
  ig: string
  className?: string
}

function CardTeam({
  name,
  description,
  img,
  className,
  fb,
  ig,
  x,
}: CardTeamProps) {
  const classes = useMemo(() => {
    let value = 'is--team mt-4'

    if (className) {
      value += ` ${className}`
    }

    return value
  }, [className])

  return (
    <CardFadeInUp className={classes}>
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <h5>{name}</h5>
      <p>{description}</p>
      <div className="socials">
        <a href={fb}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href={x}>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href={ig}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </CardFadeInUp>
  )
}

export default CardTeam
