const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req, res) => {
  return request
    .get('https://some-random-api.ml/animal/:dog')
    .then(resp => {
      const data = resp.body.all
      // const index = getRandomIndex(factArray)
      // const textArray = factArray.map(item => item.text)
      res.json(data)
    })
})

module.exports = router

// function getRandomIndex (array) {
//   return Math.floor(Math.random() * Math.floor(array.length))
// }
