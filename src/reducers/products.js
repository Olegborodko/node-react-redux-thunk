const initialState = {
	items: []
};

export default function start(state=initialState, action){
  if (action.type === 'PRODUCTS_CHANGE') {
  	return {
      ...state,
      items: action.payload
    }
  }

  return state;
}