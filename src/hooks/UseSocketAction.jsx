import {useEffect} from 'react'

const socket = require('libs/socket')

export default function UseSocketAction(action, callback) {
    socket.on(action, callback)
    function sendAction() {
        socket.emit(action)
    } return useEffect(sendAction, [])
}
