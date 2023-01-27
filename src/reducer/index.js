let initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_item":
            const { id, data,done } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list, {
                        id: id,
                        data: data,
                        done:done
                    }
                ]
            }

        case "Delete_item":
            let newList = state.list.filter(elem => elem.id !== action.id);
            return {
                ...state,
                list: newList
            }
        case "Remove_item":
            return {
                ...state,
                list: []
            }
            case "check":
              state.list.filter(elem=>{
                if(elem.id === action.payload){
                   if(elem.done === false){
                   elem.done = true
                   }else{
                    elem.done = false
                   }
                }
               })
              
                

        default:
            return state
    }
}