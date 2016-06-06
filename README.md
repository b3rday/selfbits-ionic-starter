# [Selfbits Backend as a Service (BaaS)](http://www.selfbits.org) Mobile App Starter

This is our tab-based Mobile Application template to get you started with Selfbits BaaS. Selfbits Backend-as-Service allows you to skip backend development and focus on what's most important for you: your user-experience.

If you don't have an account yet simply sign up at http://baas.selfbits.org and create a new project.

This template is based on [ionic-starter-tabs](https://github.com/driftyco/ionic-starter-tabs).

**Before we get started make sure [NodeJS](http://nodejs.org) is installed.**

## A. Prerequisites
To run this package we need ionic, bower and cordova installed
```sh
$ npm install -g ionic bower cordova

```
## B. Getting Started
#### 1. Clone this repository
```sh
$ git clone https://github.com/selfbits/selfbits-ionic-starter.git

```

#### 2. Install dependencies
```sh
$ cd selfbits-ionic-starter
$ npm install
$ bower install
```
#### 3. Add Selfbits credentials

Open `www/js/app.js` and add your Selfbits credentials as follows:
```sh
$sbApiProvider.domain = "https://your-api.selfbits.io";
$sbApiProvider.appId = "Your-App-ID";
$sbApiProvider.appSecret = "Your-App-Secret";
```
**Important Note:** ***NEVER*** use the `appSecret` if your deployed source code is **public**. If your source code is public add `Allowed-Orgins` on the Admin Dashboard instead. Your app will then be validated by checking `appId` and `Allowed-Origins` instead of using the `appSecret`.

#### 4. Delete Demo Code
In `www/js/app.js` scroll to the bottom and delete the segment in the code that ist marked with `DELETE - START` and `DELETE - END`. Save your file.

#### 5. Serve your app
```sh
 $ ionic serve
```
Your application should now automatically start and open in a browser window.

**Try it**: Register with email and password! Head to 'Authentication > Users' on the Admin Dashboard. Your new user should be visible in the User list.

## C. Using Selfbits Database-As-A-Service
The starter includes a ToDo-Demo to show the usage of Selfbits Database-as-a-Service.
You are able to add tasks or delete tasks by swipe.
Before you can use DBaaS you have to set up a collection:

1. Go to the [Admin Dashboard](http://baas.selfbits.org) and in your project navigate to `Database -> Collections`
2. Add a a collection named `todo`
3. Click on `Schema`
4. Use the builder to create the following schema

```
{
	"name" : String,
	"details" : String
}
```
5. Hit `Save` on the bottom right

6. Now switch back to your app and refresh the page. You should now be able to add ToDos and delete them by swiping!
