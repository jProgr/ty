var twitter = require('twitter');
const credentials = require('./auth.js');
const accounts = require('./accounts.js');

function presentTweet(error, tweet, response)
{
  if(error) throw error;
  console.log(tweet[0].text);
}

function pickUsername(accounts)
{
  return accounts[getRandomInt(accounts.length)]
}

function getRandomInt(max)
{
  return Math.floor(Math.random() * Math.floor(max));
}

const twitterClient = new twitter(credentials);

const twitterParams = {
  screen_name: pickUsername(accounts.userNames),
  count: 1
};

twitterClient.get('statuses/user_timeline', twitterParams, presentTweet);
