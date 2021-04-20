import Api from '../services/api'
// const Api = require('../services/api')
const GetData = async () => {
  const apiInstance = new Api()
  const result = await apiInstance.get('/posts')
  return result

  // .then(({ data }) => {
  //   console.log('Result Axios Get: ', data)
  // })
  // .catch((error) => console.log(error))
}

export default GetData
