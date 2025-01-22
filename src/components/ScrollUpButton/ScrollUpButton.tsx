import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useScrollThreshold from '../../hooks/useScrollThreshold/useScrollThreshold'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'
import './ScrollUpButton.scss'

export default function ScrollUpButton() {
  const isScrolled = useScrollThreshold(315)

  const scrollUp = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    const initialTop = document.documentElement.scrollTop
    document.documentElement.scrollTop -= 5

    const step = () => {
      const currentPosition = document.documentElement.scrollTop
      const progress = 1.2 - currentPosition / initialTop

      const delta = 20 * (Math.sin(progress * Math.PI - Math.PI / 2) + 1)
      document.documentElement.scrollTop -= delta

      if (document.documentElement.scrollTop > 0) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [])

  return (
    <button
      className={'btn btn-primary scroll-up-btn' + (isScrolled ? ' show' : '')}
      onClick={scrollUp}
    >
      <FontAwesomeIcon icon={faArrowUpLong} />
    </button>
  )
}
