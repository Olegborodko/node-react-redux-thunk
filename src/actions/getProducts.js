const axios = require('axios')
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT + '/api'

export function getProducts(dispatch) {
  axios.get(`/products`)
    .then(function (res) {
      dispatch({
        type: 'PRODUCTS_CHANGE', 
        payload: res.data.body
	    })
    })
    .catch(function (error) {
      dispatch({
        type: 'PRODUCTS_CHANGE', 
        payload: []
	    })
    })
}

export default () => {
  return (dispatch) => {
    getProducts(dispatch)
  }
}
