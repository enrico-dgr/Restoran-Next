import CardPros, { CardServiceProps } from './CardService'
import './CardsService.scss'
import Section from '../../Section/Section'

export default function CardsService({
  cards,
  showHeader = true,
}: {
  cards: CardServiceProps[]
  showHeader?: boolean
}) {
  return (
    <Section className="cards-service">
      <div className="cards-service__header">
        {showHeader && (
          <>
            <h5 className="section-title before after">Our Services</h5>
            <h1 className="mb-4">Explore Our Services</h1>
          </>
        )}
      </div>
      <div className="cards-service__content">
        {cards.map(({ description, icon, title }, i) => (
          <CardPros
            key={`card-service_${title}_${i}`}
            description={description}
            icon={icon}
            title={title}
          />
        ))}
      </div>
    </Section>
  )
}
