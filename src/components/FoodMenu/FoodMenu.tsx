'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  faCoffee,
  faHamburger,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import './FoodMenu.scss'
import MealType from './MealType'
import Section from '../Section/Section'
import Meal, { MealInfo } from './Meal'
import MealPlaceholder from './MealPlaceholder'
import useVisualized from '../../hooks/useVisualized/useVisualized'
import menu from '../../services/menu'
import { MenuItem } from '../../services/menu/types'

interface MealsList {
  category: string
  description: string
  meals: MealInfo[]
}

const mealTypes = [
  {
    icon: faCoffee,
    category: 'breakfast',
    description: 'popular',
  },
  {
    icon: faHamburger,
    category: 'launch',
    description: 'special',
  },
  {
    icon: faUtensils,
    category: 'dinner',
    description: 'lovely',
  },
]

export default function FoodMenu({
  numberOfElements,
}: {
  numberOfElements: number
}) {
  const { ref, visualized } = useVisualized()

  // Meal Types
  const [activeCategory, setActiveCategory] = useState(mealTypes[0].category)
  const mealTypesElements = useMemo(
    () =>
      mealTypes.map(({ description, icon, category }, i) => (
        <MealType
          key={`meal-type_${category}_${i}`}
          active={activeCategory === category}
          name={category}
          description={description}
          icon={icon}
          onClick={() => setActiveCategory(category)}
        />
      )),
    [activeCategory, setActiveCategory]
  )

  // Meals
  const [mealsState, setMealsState] = useState<'idle' | 'loading' | 'ready'>(
    'idle'
  )
  const [mealsLists, setMealsLists] = useState<MealsList[]>([])

  const addOrUpdateList = useCallback(
    (meals: MenuItem[], mealType: (typeof mealTypes)[0]) => {
      const newList = {
        category: mealType.category,
        description: mealType.description,
        meals: meals.map(meal => ({
          description: meal.toppings.join(', '),
          name: meal.name.replace(' ', '-'),
          price: meal.price,
          imgSrc: meal.image,
        })),
      }

      setMealsLists(lists => [
        ...lists.filter(list => list.category !== newList.category),
        newList,
      ])
    },
    [setMealsLists]
  )

  const mealsListsElements = useMemo(() => {
    if (mealsState !== 'ready') {
      return (
        <ul className="meals-list active">
          {Array.from({ length: numberOfElements }).map((_, i) => (
            <MealPlaceholder key={`meal-placeholder-${i}`} />
          ))}
        </ul>
      )
    }

    if (mealsState === 'ready') {
      return mealsLists.map(({ meals, category }, i) => (
        <ul
          className={`meals-list ${
            activeCategory === category ? 'active' : ''
          }`}
          key={`meals-list-${category}_${i}`}
        >
          {meals.slice(0, numberOfElements).map(({ ...props }, i) => (
            <Meal {...props} key={`meal-${props.name}-${i}`} />
          ))}
        </ul>
      ))
    }

    return <></>
  }, [mealsLists, mealsState, numberOfElements, activeCategory])

  // States handling
  useEffect(() => {
    setMealsState(state => (state === 'idle' ? 'loading' : state))

    if (mealsState === 'idle') {
      mealTypes.forEach(mealType => {
        menu.get
          .byCategory({
            category: mealType.category,
            mockDelay: 2000,
          })
          .then(meals => {
            addOrUpdateList(meals, mealType)
          })
          .catch(console.error)
      })
    }

    setMealsState(s => (mealsLists.length > 0 ? 'ready' : s))
  }, [addOrUpdateList, mealsState, mealsLists])

  return (
    <Section
      className={`food-menu ${visualized ? 'show fadeInUp' : ''}`}
      ref={ref}
    >
      <div className="food-menu__description">
        <h5 className="section-title before after">Food Menu</h5>
        <h1 className="mb-5">Most Popular Items</h1>
      </div>
      <div className="food-menu__sections">
        <ul className="meal-types">{mealTypesElements}</ul>
        <div className="meals">{mealsListsElements}</div>
      </div>
    </Section>
  )
}
