export const initialState ={
    basket:[],
};

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
            basket:[...state.basket, action.item]
        };
            //add to basket
            break;
        case 'REMOVE_FROM_BASKET':
            return{state};
            // remove from basket
            break;
        default:
            return state;
    }
}
export default reducer;