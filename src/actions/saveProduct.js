const { getProducts } = require('./getProducts')
const axios = require('axios')
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT + '/api'

export function saveProduct(dispatch, id, obj) {
  axios.put(`/products/${id}`, obj)
    .then(function (res) {
      if (res.status === 200) {
        return getProducts(dispatch)
      }
    })
    .catch(function (error) {
      
    })
}

export default (id, obj) => {
  return (dispatch) => {
    saveProduct(dispatch, id, obj)
  }
}
