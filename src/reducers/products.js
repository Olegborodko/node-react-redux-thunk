const initialState = {
  items: [],
  editId: 0
};

export default function start(state=initialState, action){
  if (action.type === 'PRODUCTS_CHANGE') {
  	return {
      ...state,
      items: action.payload
    }
  }

  if (action.type === 'PRODUCT_EDIT') {
  	return {
      ...state,
      editId: action.payload
    }
  }

  return state;
}