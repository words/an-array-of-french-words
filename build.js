const fs = require('fs')
const path = require('path')
const byline = require('byline')
const uniq = require('lodash.uniq')
var words = []

byline(fs.createReadStream('corpus.txt', { encoding: 'utf8' }))
  .on('data', function (line) {
    var word = line.toLowerCase()
    words.push(word)
  })
  .on('end', function(){
    words = uniq(words.sort())
    process.stdout.write(JSON.stringify(words, null, 2))
  })
