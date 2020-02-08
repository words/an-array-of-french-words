var fs = require('fs')
var https = require('https')
var concat = require('concat-stream')
var bail = require('bail')

var endpoint =
  'https://raw.githubusercontent.com/lorenbrichter/Words/master/Words/fr.txt'

https.request(endpoint, onrequest).end()

function onrequest(res) {
  res.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var data = String(buf)
    .split('\n')
    .map(d => d.toLowerCase())
    .filter(Boolean)
    .sort()

  fs.writeFile('index.json', JSON.stringify([...new Set(data)]) + '\n', bail)
}
