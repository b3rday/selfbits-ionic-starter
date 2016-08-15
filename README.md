# <a href="http://www.selfbits.org" target="\_blank">Selfbits Backend as a Service (BaaS)</a>  Mobile App Starter
This is our tab-based mobile app template to get you started with Selfbits BaaS. Selfbits Backend-as-Service allows you to skip backend development and focus on what's most important for your users: design and user-experience.

If you don't have an account yet simply sign up at http://baas.selfbits.org and create a new project.

This template is based on [ionic-starter-tabs](https://github.com/driftyco/ionic-starter-tabs).

**Before we get started make sure [NodeJS](http://nodejs.org) is installed.**

## A. Getting Started
#### Quickstart
```sh
$ git clone https://github.com/selfbits/selfbits-ionic-starter.git
$ cd selfbits-ionic-starter
$ npm run setup
```

## OR

#### Manual Setup
Alternatively you can install the dependencies manually.
To run this package we need ionic, bower and cordova installed globally and then install the local dependencies
```sh
$ npm install -g ionic bower cordova
$ cd selfbits-ionic-starter
$ npm install
$ bower install
$ ionic state restore
```

## B. Setup
#### Add Selfbits credentials

Open `www/js/app.js` and add your Selfbits credentials as follows:
```sh
$sbApiProvider.domain = "https://your-api.selfbits.io";
$sbApiProvider.appId = "Your-App-ID";
$sbApiProvider.appSecret = "Your-App-Secret";
```
**Important Note:** ***NEVER*** use the `appSecret` if your deployed source code is **public**. If your source code is public add `Allowed-Orgins` on the Admin Dashboard instead. Your app will then be validated by checking `appId` and `Allowed-Origins` instead of using the `appSecret`.

#### Delete Demo Code
In `www/js/app.js` scroll to the bottom and delete the segment in the code that ist marked with `DELETE - START` and `DELETE - END`. Save your file.

## C. Run

#### Serve your app
To start development in the browser simply run
```sh
 $ ionic serve
```
Your application should now automatically start and reload live on code changes

**Try it**: Register with email and password! Head to 'Authentication > Users' on the Admin Dashboard. Your new user should be visible in the User list.

## D. Using Selfbits Database-As-A-Service
The starter includes a ToDo-Demo to show the usage of Selfbits Database-as-a-Service.
You are able to add tasks or delete tasks by swipe.
Before you can use DBaaS you have to set up a collection:

1. Go to the <a href="http://baas.selfbits.org" target="\_blank">Selfbits Admin Dashboard</a> and in your project navigate to `Database -> Collections`
2. Add a a collection named `todo`
3. Click on `Schema`
4. Use the builder to create the following schema

```javascript
{
	"name" : String,
	"details" : String
}
```

5. Hit `Save` on the bottom right
6. Now switch back to your app and refresh the page. You should now be able to add ToDos and delete them by swiping!

## E. Using Selfbits Push
The starter also includes support for push notifications. Please read the according docs which can be found in the <a href="http://baas.selfbits.org" target="\_blank">Selfbits Admin Dashboard</a>
