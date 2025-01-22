import React from 'react'
import './ErrorBoundary.scss'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error monitoring service
    console.error('Error caught by boundary:', error)
    console.error('Component stack:', errorInfo.componentStack)

    // You can send to your analytics service
    // analytics.track('Error Boundary Catch', { error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container error-boundary mt-5 pt-4 pb-3">
          <div className="p-4 bg-light">
            <h2 className="text-danger mb-4">Oops! Something went wrong</h2>
            <p className="mb-3">We're working on fixing this issue.</p>
            <p>
              Please, contact{' '}
              <a href="mailto:restoran-mail@gmail.com">
                restoran-mail@gmail.com
              </a>{' '}
              for help or call us at <a href="tel:123456789">123-456-789</a>
            </p>
            <button
              className="btn btn-primary mt-5"
              onClick={() => window.location.reload()}
            >
              Or try refreshing
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
