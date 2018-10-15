const aliases = require('./aliases')

require('@babel/register')({
  'plugins': [
    ['module-resolver', {
      'alias': { ...aliases },
    }],
  ]
})
