const awsEndpoint = (zipcode) =>
  `https://lfl3ntnyl2.execute-api.us-east-1.amazonaws.com/forecast?zipcode=${zipcode}`

export { awsEndpoint }
