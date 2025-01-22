import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import routes from '../../../constants/routes'
import { useMemo } from 'react'

export default function Title() {
  const location = useLocation()

  const routeTitle = useMemo(() => {
    const route = Object.values(routes).find(
      o => o.absolutePath === location.pathname
    )

    return route?.headerTitle || ''
  }, [location])

  return (
    <Helmet>
      <title>Restoran - {routeTitle}</title>
    </Helmet>
  )
}
