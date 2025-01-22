import constants from '../../constants'
import { delay } from '../../utils/promises'
import { Review } from './types'

const all = async (): Promise<Review[]> => {
  const reviews: Review[] = []

  const response = await fetch(constants.API.reviews, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => ({ ok: false, json: () => [] }))

  if (response.ok) {
    await delay(1000)
    const fetchedBodyResponse = await response.json()
    reviews.push(...fetchedBodyResponse.data)
  }

  return reviews
}

export default {
  all,
}
