import {createStore} from 'redux';
const initialState={
	contactList:[],
	keyword: ""
}

let store = createStore(reducer)
function reducer(state=initialState, action){
	const {type, payload} = action 
	// console.log('payload :', payload)
	if(type ==='add_contact'){
		console.log('add item')
		console.log('최종 state : ', {...state, contactList: [...state.contactList, {...payload}], keyword:payload.keyword})
		return {...state, contactList: [...state.contactList, {...payload}], keyword:payload.keyword}
	} else if(type ==='search_by_name'){
		return {...state, keyword: payload.keyword} 
		// store의 state에서는 첫번째 key값은 직접 입력해야 된다.
		// {...state, {...payload}} 식으로 하면 안된다.
	} else if(type ==='delete_item'){
		return {...state, contactList: payload.updatedList}
	}
	return {...state}
}


export default store;