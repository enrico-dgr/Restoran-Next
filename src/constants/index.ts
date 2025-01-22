import api from './api'
import { ENV } from './types'

const envVariables = {
  API: api[process.env.NODE_ENV as ENV],
}

export default envVariables
