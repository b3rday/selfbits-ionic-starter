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

6. Now swich back to your app and refresh the page. You should now be able to add ToDos and delete them by swiping!

## D. Adding Social Login (OAuth)

### Facebook

#### Step 1

1. Create a Facebook application for your project. Go to https://developers.facebook.com/ and select "My Apps > Add a new App" and then select "Website/www" as platform.
2. Follow the wizard and choose a suitable name, category, namespace and contact e-mail for your application. After setting up your application you will be redirected to the application dashboard.
3. Go to Settings > Basic and enter your Selfbits Project Backend domain:
- Basic > App Domains: yourApp-api.selfbits.io
- Website > Site URL: https://yourApp-api.selfbits.io
In this view you should also be able to access your Facebook APP ID and APP Secret.

#### Step 2

1. Go to your Selfbits BaaS dashboard and select your project.
2. Add Facebook as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider -> Facebook -> Add
3. Click "Auhentication Provider List > Facebook > Edit" and add your Facebook App ID and App Secret that you got from your Facebook App Dashboard earlier.

Facebook Login should now work for Development Users of your Facebook application. **Before you publish your app and regular users can use Facebook login, you have to publish your application in your Facebook Developer Dashboard.** Please read the corresponding Facebook documentation: https://developers.facebook.com/docs/


### Github login
#### Step 1

1. Go to your Selfbits BaaS dashboard and select your project.
2. Add Github as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider -> Github -> Add
3.  Copy the application callback url to your clipboard.


#### Step 2

1. Go to Github and create a new application: https://github.com/settings/applications/new
2. Enter an application name, URL, description of your choice.
3. Enter the Authorization Callback URL you copied earlier.
4. you should now see the client id and secret

#### Step 3

1. Go back to your Selfbits BaaS dashboard and select your project.
2. Select Github as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider List -> Github -> Edit
3. Insert the Client ID and Secret from Github and save the settings.

For further information regarding the Github login visit their developer page at https://developer.github.com

### Google login

#### Step 1

1. Go to your Selfbits BaaS dashboard and select your project.
2. Add Google as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider -> Google -> Add
3.  Copy the application callback url to your clipboard.


#### Step 2

1. Go to Google and create a new project (you have to be logged in): https://console.developers.google.com/
2. Enable the Google+ API at "API Manager > Overview > Google+"
2. Go to "API Manager > Credentials > OAuth
3. Enter the Authorization Callback URL you copied earlier and create your credentials
4. you should now see the client id and secret

#### Step 3

1. Go back to your Selfbits BaaS dashboard and select your project.
2. Select Github as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider List -> Google -> Edit
3. Insert the Client ID and Secret from Google and save the settings.


### Bitbucket login
#### Step 1

1. Go to your Selfbits BaaS dashboard and select your project.
2. Add Bitbucket as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider -> Bitbucket -> Add
3. Copy the application callback url to your clipboard.


#### Step 2

1. Go to http://bitbucket.org and navigate to Settings -> Access Management -> OAuth
2. Add a new consumer by clicking on "OAuth consumers -> Add consumer"
3. Enter your Application information and select at least "E-Mail" as Permission Scope. Enter your Selfbits BaaS callback URL at "Callback URL"

#### Step 3

1. Go back to your Selfbits BaaS dashboard and select your project.
2. Select Bitbucket as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider List -> Bitbucket -> Edit
3. Insert the Client ID and Secret from Bitbucket and save the settings.

For further information regarding the Bitbucket login visit their developer page.



### Instagram login
#### Step 1

1. Go to your Selfbits BaaS dashboard and select your project.
2. Add Instagram as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider -> Instagram -> Add
3. Copy the application callback url to your clipboard.


#### Step 2

1. Go to https://www.instagram.com/developer/ and click on "Register a new application" (eventually you have to register as a developer)
2. Enter your applications information. Enter your Selfbits BaaS Callback Url at "Valid redirect URIs".
3. Copy your Client ID and Secret

#### Step 3

1. Go back to your Selfbits BaaS dashboard and select your project.
2. Select Instagram as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider List -> Instagram -> Edit
3. Insert the Client ID and Secret from Instagram and save the settings.

For further information regarding the Instagram login visit their developer page at https://www.instagram.com/developer/

### Slack login
#### Step 1

1. Go to your Selfbits BaaS dashboard and select your project.
2. Add Slack as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider -> Slack -> Add
3. Copy the application callback url to your clipboard.

#### Step 2

1. Go to https://api.slack.com/apps and create a new app
2. Enter your applications information. Enter your Selfbits BaaS Callback Url at "Redirect URI(s)".
3. Copy your Client ID and Secret.

#### Step 3

1. Go back to your Selfbits BaaS dashboard and select your project.
2. Select Slack as an Authentication provider: Authentication > Auth Provider -> Add Authentication Provider List -> Slack -> Edit
3. Insert the Client ID and Secret from Slack and save the settings.

For further information regarding the Slack login visit their developer page at https://api.slack.com/
