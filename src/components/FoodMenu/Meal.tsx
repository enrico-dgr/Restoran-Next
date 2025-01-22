import './Meal.scss'

export interface MealInfo {
  description: string
  imgSrc: string
  name: string
  price: string
}

export default function Meal({ description, imgSrc, name, price }: MealInfo) {
  return (
    <li className="meal">
      <img src={imgSrc} alt={name} />
      <div className="meal__description">
        <h5 className="name">
          <span>{name}</span>
          <span className="text-primary">{price}</span>
        </h5>
        <small className="description">{description}</small>
      </div>
    </li>
  )
}
