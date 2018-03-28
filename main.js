var twitter = require('twitter');
var credentials = require('./auth.js');

function presentTweet(error, tweet, response)
{
  if(error) throw error;
  console.log(tweet[0].text);
}

const twitterClient = new twitter(credentials);

twitterClient.get('statuses/user_timeline',
                  {user_id: 'MagicRealismBot', count: 1},
                  presentTweet);
