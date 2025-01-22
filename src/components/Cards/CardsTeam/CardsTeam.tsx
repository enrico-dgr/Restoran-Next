import CardTeam, { CardTeamProps } from './CardTeam'
import './CardsTeam.scss'
import Section from '../../Section/Section'

const cards_mock: CardTeamProps[] = [
  {
    name: 'John Doe',
    description: 'Master Chef',
    img: '../img/team-1.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
  {
    name: 'Dohn Joe',
    description: 'Master Chef',
    img: '../img/team-2.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
  {
    name: 'John Snow',
    description: 'Master Chef',
    img: '../img/team-3.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
  {
    name: 'Son Goku',
    description: 'Master Chef',
    img: '../img/team-4.png',
    fb: 'https://facebook.com',
    x: 'https://twitter.com',
    ig: 'https://instagram.com',
  },
]

// Duplicate cards to make it two rows
cards_mock.push(...cards_mock)

export default function CardsTeam({
  cards = cards_mock,
  twoRows = false,
}: {
  cards?: CardTeamProps[]
  twoRows?: boolean
}) {
  return (
    <Section className="cards-team">
      <div className="cards-team__header">
        <h5 className="section-title before after">Team Members</h5>
        <h1 className="mb-4">Our Master Chefs</h1>
      </div>
      <div className="cards-team__content">
        {cards.slice(0, twoRows ? 8 : 4).map(({ name, ...props }, i) => (
          <CardTeam key={`card-team_${name}_${i}`} name={name} {...props} />
        ))}
      </div>
    </Section>
  )
}
