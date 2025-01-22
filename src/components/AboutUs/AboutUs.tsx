/* eslint-disable @next/next/no-img-element */
'use client'

import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, motion, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import useVisualized from '../../hooks/useVisualized/useVisualized'
import Section from '../Section/Section'
import './AboutUs.scss'
import Image from 'next/image'

const Counter = ({
  value,
  className,
}: {
  value: number
  className?: string
}) => {
  const animatedValue = useSpring(0, {
    duration: 5000,
    visualDuration: 5000,
    bounce: -10,
    damping: 65,
    mass: 2,
  })

  const t = useTransform(animatedValue, latest => Math.round(latest))

  useEffect(() => {
    animatedValue.set(value)
  }, [value, animatedValue])

  return <motion.h1 className={className}>{t}</motion.h1>
}

export default function AboutUs() {
  const { ref: refPhotos, visualized: photosVisualized } = useVisualized()
  const { ref: refNumbers, visualized: numbersVisualized } = useVisualized()

  return (
    <Section className="section-about-us">
      <div
        className={`photo-group ${photosVisualized ? 'show' : ''}`}
        ref={refPhotos}
      >
        <Image src="/img/restaurant-1.png" alt="Restaurant view"  width={260} height={260} />
        <Image src="/img/restaurant-2.png" alt="Restaurant view" width={260} height={260} />
        <Image src="/img/food-1.png" alt="Dish" width={260} height={260} />
        <Image src="/img/food-2.png" alt="Dish" width={260} height={260} />
      </div>
      <div className="section-about-us__description">
        <h5 className="section-title after">About Us</h5>
        <h1 className="mb-4">
          Welcome to{' '}
          <FontAwesomeIcon icon={faUtensils} className="text-primary mr-2" />
          Restoran
        </h1>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="numbers mb-4" ref={refNumbers}>
          <div className="number">
            {numbersVisualized ? (
              <Counter className="text-5 text-primary mb-0" value={15} />
            ) : (
              <h1 className="text-5 text-primary mb-0">0</h1>
            )}

            <div className="pl-4">
              <p>Years of</p>
              <h6 className="text-uppercase mb-0">Experience</h6>
            </div>
          </div>
          <div className="number">
            {numbersVisualized ? (
              <Counter className="text-5 text-primary mb-0" value={50} />
            ) : (
              <h1 className="text-5 text-primary mb-0">0</h1>
            )}
            <div className="pl-4">
              <p className="mb-0">Popular</p>
              <h6 className="text-uppercase mb-0">Master Chefs</h6>
            </div>
          </div>
        </div>
        <a className="btn btn-primary py-3 px-5 mt-2" href="">
          Read More
        </a>
      </div>
    </Section>
  )
}
