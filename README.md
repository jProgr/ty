# ty

Little utility with self-care tweets.

When called on a CLI `$ node main.js`, fetches a tweet that helps you ponder a bit or makes you remember to take care of yourself. Inspired by [tiny-care-terminal](https://github.com/notwaldorf/tiny-care-terminal).

## Installation

ty needs [Node and npm](https://nodejs.org/en/) installed. Download the repository and install the dependencies:

```
$ git clone https://github.com/jProgr/ty.git
$ cd ty
$ npm install
```

You need to set up your own [Twitter keys and access tokens](https://apps.twitter.com/). Set the following enviroment variables:

```
export TWITTER_CONSUMER_KEY=XXXX
export TWITTER_CONSUMER_SECRET=XXXX
export TWITTER_ACCESS_TOKEN_KEY=XXXX
export TWITTER_ACCESS_TOKEN_SECRET=XXXX
```

where "XXXX" is your own data. You can put them in a script file (eg.: .env) and run it with `$ source .env` to set all the enviroment variables.

## Usage

Everytime `$ node main.js` is executed, ty will fetch a tweet from one of the following accounts for default: [@MagicRealismBot](https://twitter.com/MagicRealismBot), [@tinycarebot](https://twitter.com/tinycarebot), [@metaprophet](https://twitter.com/metaprophet).

You can customize ty sources. ty will look for a file named `config` in the same directory and fetch the tweets from those accounts instead. Put the username of each twitter account one per line and without the "@".

Example `config` file:
```
ASmallFiction
MagicRealismBot
tinycarebot
metaprophet
```
