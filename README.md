## Twitter app to retrieve 10 latest tweets by Twitter Handle

Input a twitter handle and click on submit to see the 10 latest tweets made by the user

### `To Dos`

- [ ] unit tests
- [ ] Add more comments


### `Before running this app`

You will need a Developer account on twitter to run this app
You can follow the steps from https://dev.to/sumedhpatkar/beginners-guide-how-to-apply-for-a-twitter-developer-account-1kh7

Once your account is approved and you have created a project you should be able to generate the "API Key & Secret" and "Access Token & Secret"

Then in the main directory, same as where this readme is saved, create a new file named ".env" and input the content as below

```
CONSUMER_API_KEY=< api key here >
CONSUMER_API_SECRET=< api secret here >
ACCESS_TOKEN_KEY=< access token here >
ACCESS_TOKEN_SECRET=< access token secret here >
```

Once you have done this you can continue on with the next part

### `npm install`

Run this command to install all the dependancies for this app, once this is done continue to the next part

### `npm start`

Starts the app and server
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The App.js is where you will be able to input a Twitter User ID and when you click on submit it will retrieve the 10 latest tweets of that user

The server.js handles the communication with the Twitter API to search and retrieve tweets by the Twitter User ID provided from the front end client
