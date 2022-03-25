## ten day forecast app using aws lambda and api gateway with [serverless](https://www.serverless.com/) framework

🚀 view live [here](https://ten-day-forecast.vercel.app/)

### getting started

in root folder, install dependencies

```bash
yarn install
```

start frontend development server

```bash
yarn dev
```

build frontend for production

```bash
yarn build-fe
```

deploy backend to aws dev environment

```bash
yarn deploy
```

deploy backend to aws prod environment

```bash
yarn deploy-prod
```

### backend

make sure to have serverless installed

```bash
npm install -g serverless
```

configure serverless with aws credentials

```bash
sls config credentials --provider aws --key <YOUR_AWS_KEY> --secret <YOUR_AWS_SECRET> --profile <PROFILE_NAME>
```

bootstrap new project with aws-nodejs template

```bash
sls create --template aws-nodejs --path <PROJECT_PATH>
```

deploy to aws

```bash
sls deploy
```
