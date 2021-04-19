// import Api from '../services/api'
const Api = require('../services/api')
const GetData = () => {
  const apiInstance = new Api()
  apiInstance
    .get('/posts')

    .then(({ data }) => {
      console.log('Result Axios Get: ', data)
    })
    .catch((error) => console.log(error))
}

export default GetData
