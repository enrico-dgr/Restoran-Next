import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import CardsService from '../../components/Cards/CardsService/CardsService'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const defaultDescription =
  'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'

export default function Service() {
  return (
    <>
      <Header />
      <CardsService
        cards={[
          {
            description: defaultDescription,
            icon: faUserTie,
            title: 'Master Chefs',
          },
          {
            description: defaultDescription,
            icon: faUtensils,
            title: 'Quality Food',
          },
          {
            description: defaultDescription,
            icon: faCartPlus,
            title: 'Online Order',
          },
          {
            description: defaultDescription,
            icon: faHeadset,
            title: '24/7 Service',
          },
          {
            description: defaultDescription,
            icon: faUserTie,
            title: 'Master Chefs',
          },
          {
            description: defaultDescription,
            icon: faUtensils,
            title: 'Quality Food',
          },
          {
            description: defaultDescription,
            icon: faCartPlus,
            title: 'Online Order',
          },
          {
            description: defaultDescription,
            icon: faHeadset,
            title: '24/7 Service',
          },
        ]}
      />
      <Footer />
    </>
  )
}
