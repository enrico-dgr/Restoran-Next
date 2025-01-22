import './SignUpBtn.scss'

export default function SignUpBtn() {
  return (
    <div className="sign-up mx-auto">
      <input className="py-3 pl-4 pr-5" type="text" placeholder="Your email" />
      <button
        type="button"
        className="btn btn-primary py-2 position-absolute mt-2 mr-2"
      >
        SignUp
      </button>
    </div>
  )
}
