import React, {useEffect} from 'react'

import Page from 'components/layout/Page'
import SystemInfo from 'components/SystemInfo'

import styles from 'styles/pages/Home.module.scss'

const socket = require('libs/socket')

export default function Home() {

    useEffect(() => {
        socket.emit('system', 'osInfo', osInfo => {
            document.title = `${osInfo.distro} ${osInfo.release} - Home`
        })
    }, [])

    return (
        <Page pagetitle="Home" className={styles.page} >
            <SystemInfo />
        </Page>
    )
}
