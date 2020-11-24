class Users {
    constructor() {
        this.users = []
    }

    addUser({ id, name, room }) {
        const parsedName = name.trim().toLowerCase()
        const parsedRoom = room.trim().toLowerCase()
        const alreadyHasUserNameInRoom = this.users.find((user) => {
            return user.room === parsedRoom && user.name === parsedName
        })

        if (alreadyHasUserNameInRoom) {
            return {
                error: "User name already exists"
            }
        }

        const parsedUser = { id, name: parsedName, room: parsedRoom };

        this.users.push(parsedUser)

        return { user: parsedUser }
    }

    removeUser(id) {
        const userIndex = this.users.findIndex((user) => user.id === id)
        if (userIndex !== -1) {
            return this.users.splice(userIndex, 1)[0]
        }
    }

    getUser(socketId) {
        return this.users.find((user) => user.id === socketId)

    }

}

module.exports = new Users()