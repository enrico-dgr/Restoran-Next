import './HeaderBookATable.scss'

export default function HeaderBookATable() {
  return (
    <div className="container my-5 py-5">
      <div className="header__book-a-table">
        <div className="item">
          <h1 className="text-3 text-white slideInLeft">
            Enjoy Our
            <br />
            Delicious Meal
          </h1>
          <p className="text-white slideInLeft mb-4 pb-2">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <a
            href=""
            className="btn btn-primary py-sm-3 px-sm-5 mr-3 slideInLeft"
          >
            Book A Table
          </a>
        </div>
        <div className="item">
          <img className="img" src="img/header-img.png" alt="" />
        </div>
      </div>
    </div>
  )
}
