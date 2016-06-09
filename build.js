const fs = require('fs')
const path = require('path')
const byline = require('byline')
const uniq = require('lodash.uniq')
var words = []

byline(fs.createReadStream('corpus.txt', { encoding: 'utf8' }))
  .on('data', function (line) {
    words.push(line)
  })
  .on('end', function(){
    words = uniq(words.sort())
    process.stdout.write(JSON.stringify(words, null, 2))
  })
