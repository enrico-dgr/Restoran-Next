
import './styles/NotFound.scss'
import routes from '../constants/routes'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="container not-found py-5">
      <div className="p-4 bg-light">
        <h2 className="text-primary mb-4">404 - Page Not Found</h2>
        <p className="mb-3">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href={routes.home.absolutePath} className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
