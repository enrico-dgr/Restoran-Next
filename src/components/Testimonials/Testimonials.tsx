'use client'

import Testimonial, { TestimonialData } from './Testimonial'
import './Testimonials.scss'
import Section from '../Section/Section'
import { useEffect, useMemo, useState } from 'react'
import useVisualized from '../../hooks/useVisualized/useVisualized'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import reviews from '../../services/reviews'
import TestimonialPlaceholder from './TestimonialPlaceholder'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([])

  const [activeIndex, setActiveIndex] = useState(0)

  const { ref, visualized } = useVisualized()

  const [reviewsState, setReviewsState] = useState<
    'idle' | 'loading' | 'ready'
  >('idle')

  useEffect(() => {
    setReviewsState(state =>
      state === 'idle' && visualized ? 'loading' : state
    )

    if (reviewsState === 'idle' && visualized) {
      reviews.get
        .all()
        .then(clientReviews => {
          const testimonialsFromReviews = clientReviews.map<TestimonialData>(
            review => ({
              comment: review.text,
              description: review.customer_job,
              img: '../img/user.png',
              name: review.customer_name,
            })
          )

          setTestimonials(testimonialsFromReviews)
        })
        .catch(console.error)
    }

    setReviewsState(s => (testimonials.length > 0 ? 'ready' : s))
  }, [reviewsState, testimonials.length, visualized])

  const slides = useMemo(() => {
    if (reviewsState !== 'ready') {
      return Array.from({ length: 4 }).map((_, i) => (
        <SwiperSlide key={`testimonial-placeholder-${i}`}>
          <TestimonialPlaceholder />
        </SwiperSlide>
      ))
    }

    if (reviewsState === 'ready') {
      return testimonials.map((testimonial, i) => (
        <SwiperSlide
          key={`testimonial-${testimonial.name}_${i}`}
          onClick={() => setActiveIndex(i)}
        >
          <Testimonial
            {...testimonial}
            className={activeIndex === i ? 'active' : ''}
          />
        </SwiperSlide>
      ))
    }
  }, [activeIndex, reviewsState, testimonials])

  return (
    <Section
      className={`testimonials ${visualized ? 'fadeInUp' : ''}`}
      ref={ref}
    >
      <div className="testimonials__header">
        <h5 className="section-title before after">Testimonial</h5>
        <h1 className="mb-5">Our Clients Say!!!</h1>
      </div>
      <Swiper
        className="testimonials__content"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        spaceBetween={24}
        speed={800}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex)
        }}
      >
        {/* {testimonials.map(({ name, ...props }, i) => (
          <SwiperSlide key={`testimonial_${name}_${i}`}>
            <Testimonial
              name={name}
              {...props}
              className={activeIndex === i ? 'active' : ''}
            />
          </SwiperSlide>
        ))} */}
        {slides}
      </Swiper>
    </Section>
  )
}
