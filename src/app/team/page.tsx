import CardsTeam from '../../components/Cards/CardsTeam/CardsTeam'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function OurTeam() {
  return (
    <>
      <Header />
      <CardsTeam twoRows={true} />
      <Footer />
    </>
  )
}
