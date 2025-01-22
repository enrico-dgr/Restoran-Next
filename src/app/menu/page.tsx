import FoodMenu from '../../components/FoodMenu/FoodMenu'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function Menu() {
  return (
    <>
      <Header />
      <FoodMenu numberOfElements={8} />
      <Footer />
    </>
  )
}
