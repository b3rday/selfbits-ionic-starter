# [Selfbits Backend as a Service (BaaS)](http://www.selfbits.org) Mobile App Starter

A tab-based Mobile Application template to get you started with Selfbits BaaS. It introduces you to Selfbits Authorization services with OAuth integration and to Selfbits Database-as-a-Service service. 

This template is based on [ionic-starter-tabs](https://github.com/driftyco/ionic-starter-tabs). 

## Prerequisites
What you need for your App to run:
- NodeJS
- Ionic

## Getting Started

#### Step 1
1. Create an account at http://baas.selfbits.org
2. Create a new Project for your Application

#### Step 2
Now go back to your terminal:
```sh
$ cd selfbits-ionic-starter
$ sudo npm install
$ bower install
```
#### Step 3
Go back to your Admin dashboard at http://baas.selfbits.org. Navigate to Settings and you will see the credentials of your App-project.
Now you have to paste your credentials into the www/js/app.js:
```sh
	$sbApiProvider.domain = "https://your-subdomain.selfbits.io";
	$sbApiProvider.appId = "Your-App-ID";
	$sbApiProvider.appSecret = "Your-App-Secret";
```

#### Step 4
Now you are all set and can start your application:
```sh
 $ionic serve
```
Your application should now automatically start and open in a browser window.

## Using Selfbits Database-As-A-Service
Using our Database-as-a-Service option, you won't need a dedicated database provider. Selfbits Ionic Starter shows you the use of DBaaS on a Todo-List example. You are able to add tasks or delete tasks by swipe.
Before you can use DBaaS you have to set up a collection:

1. Go to http://baas.selfbits.org and navigate to Database -> Collections
2. Add a a collection and name it "todo"
3. Add the following schema to the collection:

```
{
	"name" : String,
	"details" : String
}
```

As soon as you added the collection the example will work as expected!


## Adding Social login

### Facebook login

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