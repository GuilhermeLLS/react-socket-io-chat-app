const redirectAction = (nameJoin, roomJoin) => {
    return {
        type: "REDIRECT_TO_CHAT",
        nameJoin,
        roomJoin,
    }
}

export default redirectAction