'use client'

import Card, { CardProps } from '../Card/Card'
import useVisualized from '../../../hooks/useVisualized/useVisualized'
import './CardFadeInUp.scss'
import { PropsWithChildren } from 'react'

function CardFadeInUp({ className, ...props }: PropsWithChildren<CardProps>) {
  const { ref, visualized } = useVisualized()

  return (
    <Card
      {...props}
      ref={ref}
      className={`${className} is--fade-in-up ${visualized ? 'show' : ''}`}
    />
  )
}

export default CardFadeInUp
