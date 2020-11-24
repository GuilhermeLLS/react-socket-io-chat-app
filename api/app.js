const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const router = require("./router")
const cors = require("cors")
const Users = require("./users")


class App {
    constructor() {
        this.server = this.createServer()
        this.io = socketio(this.server, {
            cors: {
                origin: "*",
            }
        })
        this.createIoConnection()
    }

    createServer() {
        const expressApp = express()
        const httpServer = http.createServer(expressApp)
        expressApp.use(cors())
        expressApp.use(router)
        return httpServer
    }

    createIoConnection() {
        this.io.on("connection", (socket) => this.createSocket(socket))
    }

    createSocket(socket) {
        socket.on("join", ({ name, room }, callback) => {
            const { error, user } = Users.addUser({ id: socket.id, name, room })
            if (error) {
                return callback(error)
            }
            socket.emit("message", { user: "admin", text: `${user.name} welcome to the room` })
            socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has joined the room` })
            socket.join(user.room)

            callback()
        })
    
        socket.on("sendMessage", (message, callback) => {
            const user = Users.getUser(socket.id)
            this.io.to(user.room).emit("message", { user: user.name, text: message })

            callback()
        })
    
    
        socket.on("disconnect", () => {
            const user = Users.removeUser(socket.id)
            if (user) {
                this.io.to(user.room).emit("message", { user: "admin", text: `${user.name} has left the room` })
            }
        })
    }
}

module.exports = new App().server