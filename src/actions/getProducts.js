const axios = require('axios')

export default () => {
  return (dispatch) => {
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
}
