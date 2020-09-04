const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req, res) => {
  return request
    .get('https://cat-fact.herokuapp.com/facts')
    .then(resp => {
      const factArray = resp.body.all
      const index = getRandomIndex(factArray)
      const textArray = factArray.map(item => item.text)
      res.json(textArray[index])
    })
})

module.exports = router

function getRandomIndex (array) {
  return Math.floor(Math.random() * Math.floor(array.length))
}
