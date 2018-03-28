var twitter = require('twitter');
const credentials = require('./auth.js');
const accounts = require('./accounts.js');

function presentTweet(error, tweet, response)
{
  if(error) throw error;
  console.log(cleanTweet(tweet[0].text));
}

function pickUsername(accounts)
{
  return accounts[getRandomInt(accounts.length)]
}

function getRandomInt(max)
{
  return Math.floor(Math.random() * Math.floor(max));
}

function cleanTweet(tweet)
{
  const replyTester = RegExp('@');
  const replyCleaner = RegExp('@.+:(.*)');

  if(!replyTester.test(tweet)) return tweet;
  return replyCleaner.exec(tweet)[1].trim();
}

const twitterClient = new twitter(credentials);

const twitterParams = {
  screen_name: pickUsername(accounts.userNames),
  count: 1
};

twitterClient.get('statuses/user_timeline', twitterParams, presentTweet);
