# [Selfbits Backend as a Service (BaaS)](http://www.selfbits.org) Mobile App Starter

A simple tab-based Mobile Application template to get you started with Selfbits BaaS. This template is based on [ionic-starter-tabs](https://github.com/driftyco/ionic-starter-tabs). 

## Example

## Prerequisites
What you need for your App to run:
- NodeJS
- w
## Getting Started
#### Step 1
1. Create an account at http://www.baas.selfbits.org
2. Create a new Project for your Application
#### Step 2
Now go back to your terminal:
```sh
$ cd selfbits-ionic-starter
$ sudo npm install -g ionic cordova
$ bower install
```
#### Step 3
Go back to your Admin dashboard at http://baas.selfbits.org. Navigate to Settings and you will see the credentials of your App-project.
Now you have to paste your credentials into the www/js/app.js:
```sh
	$sbApiProvider.domain = "http://your-subdomain.selfbits.io";
	$sbApiProvider.appId = "Your-App-ID";
	$sbApiProvider.appSecret = "Your-App-Secret";
```
#### Step 4
Now you are all set and can start your application:
```sh
$ ionic serve
```
Your application should now automatically start and open in a browser window. 
