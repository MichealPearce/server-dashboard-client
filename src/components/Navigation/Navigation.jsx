import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'

import UseInterval from 'hooks/UseInterval'

import ubuntuLogo from './icons/ubuntu-32.png'

import styles from 'styles/components/Navigation.module.scss'

const socket = require('libs/socket')

export default function Navigation() {

    let [time, setTime] = useState(0)
    let [osInfo, setOsInfo] = useState(false)

    useEffect(() => {
        socket.emit('system', 'osInfo', data => {
            setOsInfo(`${data.distro} ${data.release}`)
        })
    }, [])

    UseInterval(() => {
        socket.emit('system', 'time', setTime)
    }, 1000)

    return (
        <nav className={styles.navigation} >
            <img src={ubuntuLogo} alt="Ubuntu" />
            <div className={styles.header} >
                <h4 className={styles.time} >
                    Server Time - {moment(time.current).format('h:mm:ss a')}
                </h4>
                <h1>{osInfo}</h1>
            </div>

            <div className={styles.menu} >
                <NavLink exact to="/" >System</NavLink>
            </div>
        </nav>
    )
}