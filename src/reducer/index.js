let initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_item":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list, {
                        id: id,
                        data: data
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

        default:
            return state
    }
}