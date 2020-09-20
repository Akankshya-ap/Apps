export const initialState ={
    basket:[{
        id:"123458",
        title:"Nike Air force one Green tee",
        price:12.43,
        rating:5,
        image:"https://sneakerfits.com/wp-content/uploads/2018/01/nike-air-force-one-green-tee.jpg"       
    }],
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
            let newBasket =[...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if (index>=0){
                newBasket.splice(index,1);
            } else{
                
            }

            return{...state, basket:newBasket,};
            // remove from basket
            break;
        default:
            return state;
    }
}
export default reducer;