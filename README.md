![Serverless typed apollo graphql with react](https://user-images.githubusercontent.com/2996493/81471761-11442780-9211-11ea-88ff-03162f2a0b4e.png)

# apollo-graphql-typescript

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e36deda-7bb5-4608-852b-704adf79fbe7/deploy-status)](https://app.netlify.com/sites/apollo-graphql-typescript/deploys)

Template for serverless typed GraphQL app deployed on netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pushkar8723/apollo-graphql-typescript)

**Demo:**
[Application](https://apollo-graphql-typescript.netlify.app/) |
[GraphQL PlayGround](https://apollo-graphql-typescript.netlify.app/.netlify/functions/graphql)

## How it works

The client side of the app is deployed as static code on netlify. The GraphQL side of the application is developed using `apollo-server-lambda` and is deployed as netlify function. Netlify deploys each function as AWS lambda. You can read more about it [here](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions).

Although, there is a default template which can be quickly bootstraped using the command `netlify functions:create`, it doesn't support TypeScript and requires developer to use legacy `netlify-lambda` command. But using the legacy command further complicates the application and also has a few issues which you can read [here](https://community.netlify.com/t/error-could-not-find-encoding-module-in-file-netlify-function/2259).

In this template, I transpile the lambda directory using `tsc` command during the build process. Thus eleminating the need to use `netlify-lambda`. And I find this is a much more cleaner approach.

### Dev Landscape

<p align="center">
  <img src="https://user-images.githubusercontent.com/2996493/81474874-e0bab880-9225-11ea-806f-17058ad46fb9.png" alt="Dev Landscape" />
</p>

`netlify dev` command runs a server on port 3000 (defined in [netlify.toml](https://github.com/pushkar8723/apollo-graphql-typescript/blob/master/netlify.toml)). This server acts as proxy for both `webpack-dev-server` (which we use to run our client app with hot reloading) and for the netlify GraphQL lambda.

## Getting Started

Install netlify globally

```JavaScript
npm i -g netlify-cli
```

Install npm dependencies

```JavaScript
npm i
```

Start netlify dev server

```JavaScript
netlify dev
```

App is now running on [http://localhost:3000/](http://localhost:3000/).

## Features

- [x] Fully typed
- [x] Automated deployment
- [x] Hot Reloading for client
- [x] Watch and rebuild for GraphQL server
- [x] Lint check on each commit
- [x] Automatic type generation based on GraphQL schema

## Stateful App

If you wanted to create a serverless stateful app. Netlify got you covered. Netlify has [FaunaDB](https://fauna.com/) add on. Using which you can quickly add a serverless database to your application. You can direclty import your GraphQL schema on Fauna dashboard to create collections and use their GraphQL endpoints to query / mutate the data.

To add FaunaDB to you application. Run following commands.

```JavaScript
netlify addons:create fauna
netlify addons:auth fauna
```

## Contribution

PRs are welcome.

[MIT License](https://github.com/pushkar8723/apollo-graphql-typescript/blob/master/LICENSE)
