export const Add_item = (data) => {
    return {
        type: "Add_item",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }

}
export const Delete_item = (data) => {
    return {
        type: "Delete_item",
        id: data
    }
}

export const Remove_item = () => {
    return {
        type: "Remove_item",

    }
}

