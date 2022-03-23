## ten day forecast app using aws lambda and api gateway with [serverless](https://www.serverless.com/)

### backend

install serverless

```bash
npm install -g serverless
```

configure serverless with aws credentials

```bash
sls config credentials --provider aws --key <YOUR_AWS_KEY> --secret <YOUR_AWS_SECRET> --profile tenDayForecastUser
```

create a new serverless service with aws-node template

```bash
sls create --template aws-nodejs --path backend
```

go to serverless project folder

```bash
cd backend
```

deploy to aws

```bash
sls deploy
```

### frontend

in root folder, install dependencies

```bash
yarn install
```

start development server

```bash
yarn dev
```

build for production

```bash
yarn build
```

start production server

```bash
yarn start
```
