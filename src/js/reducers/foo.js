export default function reducer(state={
	// default state
	foo: 'bar',
}, action) {
	switch(action.type){
		case 'GET_FOO':{
			return {...state, foo: action.payload};
		}
		default: {
			return state;
		}
	}
}