import Footer from "@/components/Footer/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";
import CardsTeam from "@/components/Cards/CardsTeam/CardsTeam";
import Reservation from "@/components/ContactUs/ContactUs";
import FoodMenu from "@/components/FoodMenu/FoodMenu";
import AboutUs from "@/components/AboutUs/AboutUs";
import CardsService from "@/components/Cards/CardsService/CardsService";
import Header from "@/components/Header/Header";

import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'

const defaultDescription =
  'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'

export default function Home() {
  return (
    <>
      <Header pagination={false} />
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
        ]}
        showHeader={false}
      />
      <AboutUs />
      <FoodMenu numberOfElements={8} />
      <Reservation />
      <CardsTeam />
      <Testimonials />
      <Footer />
    </>
  );
}
