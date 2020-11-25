const redirectReducer = (state = {}, action) => {
    if (action.type === "REDIRECT_TO_CHAT") {
        return {
            nameJoin: action.nameJoin,
            roomJoin: action.roomJoin,
        }
    }
    return state
}

export default redirectReducer