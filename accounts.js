const fs = require('fs');

let accounts;
const configFile = __dirname + '/config';
if(fs.existsSync(configFile))
{
  accounts = {
    userNames: fs.readFileSync(configFile, 'utf-8').trim().split('\n')
  }
}
else
{
  accounts = {
    userNames: ['MagicRealismBot', 'tinycarebot', 'metaprophet']
  };
}

module.exports = accounts;
