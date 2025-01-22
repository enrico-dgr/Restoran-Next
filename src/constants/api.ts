import { EnvLike } from './types'

type APIs = {
  main: string
  menu: string
  reviews: string
}

const development: APIs = {
  main: 'http://18.194.21.216/api',
  menu: 'http://18.194.21.216/api/menu',
  reviews: 'http://18.194.21.216/api/reviews',
}

const production: APIs = {
  main: 'http://18.194.21.216/api',
  menu: 'http://18.194.21.216/api/menu',
  reviews: 'http://18.194.21.216/api/reviews',
}

export default {
  development,
  production,
} as EnvLike<APIs>
