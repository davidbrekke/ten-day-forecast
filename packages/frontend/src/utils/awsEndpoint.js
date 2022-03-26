import { NODE_ENV } from '@utils/constants'

const testEndpoint =
  'https://ev57rp9uzc.execute-api.us-east-1.amazonaws.com/forecast'

const prodEndpoint =
  'https://dn8amkrgu2.execute-api.us-east-1.amazonaws.com/forecast'

const awsEndpoint = (zipcode) => {
  if (NODE_ENV === 'development') {
    return `${testEndpoint}?zipcode=${zipcode}`
  }
  if (NODE_ENV === 'production') {
    return `${prodEndpoint}?zipcode=${zipcode}`
  }
}

export { awsEndpoint }
