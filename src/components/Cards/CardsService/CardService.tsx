import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardService.scss'
import { useMemo } from 'react'
import CardFadeInUp from '../CardFadeInUp/CardFadeInUp'

export interface CardServiceProps {
  title: string
  description: string
  icon: IconDefinition
  className?: string
}

function CardService({
  title,
  description,
  icon,
  className,
}: CardServiceProps) {
  const classes = useMemo(() => {
    let value = 'is--service mt-4'

    if (className) {
      value += ` ${className}`
    }

    return value
  }, [className])

  return (
    <CardFadeInUp className={classes}>
      <FontAwesomeIcon icon={icon} size="3x" className="mb-4" />
      <h5>{title}</h5>
      <p>{description}</p>
    </CardFadeInUp>
  )
}

export default CardService
