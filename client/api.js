import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getCat () {
  return request
    .get('https://aws.random.cat/meow')
    .then(resp => {
      return resp.body
    })
}

export function getCatFact () {
  return request
    .get(`${serverURL}/cat`)
    .then(resp => {
      return resp.body
    })
}
