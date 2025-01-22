import './Card.scss'
import { ForwardedRef, forwardRef, PropsWithChildren, useMemo } from 'react'

export interface CardProps {
  className?: string
}

function Card(
  { className, children }: PropsWithChildren<CardProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const classes = useMemo(() => {
    let value = 'card'

    if (className) {
      value += ` ${className}`
    }

    return value
  }, [className])

  return (
    <div className={classes} ref={ref}>
      <div className="card__content">{children}</div>
    </div>
  )
}

export default forwardRef(Card)
