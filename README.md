# Getting Started with AWS Authentication

Authentication in React with AWS Cognito and Amplify.

## Prerequisites

In order to access Amplify, you need to have an AWS account. If you have one already, then create a user.

In IAM > Users, create a user. Create access keys. Add permission by creating a group.

## Amplify CLI setup

Install the Amplify CLI

```
npm install -g @aws-amplify/cli
```

After successful installation, we can now configure the CLI by running:

```
amplify configure
```

## React app setup

In order to get our Amplify project started, we run the following command to initialize and configure the project:

```
amplify init
```

After the deployment is done, a generated file named aws-exports.js will appear in your src folder. You should never modify this file, because it changes whenever you deploy your changes.

Run the following command to add the authentication to our app.

```
amplify add auth
```

In order to deploy the new resource changes to the cloud, run:

```
amplify push
```

## Testing

Add the amplify libraries in the project.

```
yarn add @aws-amplify/ui-react aws-amplify
```

Create routes.
