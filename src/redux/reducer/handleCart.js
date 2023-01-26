const cart = [];

const handleCart = (state = cart, action) => {
    const player = action.payload;
    switch(action.type) {
        case "ADDITEM": 
            // Check if player Already Exists
            const exist = state.find((x)=> x.id === player.id);
            if(exist){
                // Increase the Quantity
                return state.map((x)=>
                x.id === player.id ? {...x, qty: x.qty + 1} : x
                );
            }else{
                const player = action.payload;
                return [
                    ...state,
                    {
                        ...player,
                        qty: 1,
                    }
                ]
            }
            break;

            case "DELITEM": 
                const exist1 = state.find((x)=> x.id === player.id);
                if(exist1.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=>
                      x.id === player.id ? {...x, qty: x.qty-1} : x  
                    );
                }
                break;

        default:
            return state;
            break;
    }
}

export default handleCart;