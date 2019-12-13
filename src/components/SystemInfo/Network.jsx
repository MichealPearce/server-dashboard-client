import React, {useMemo, useState} from 'react'

import {formatBytesToString} from 'libs/formatBytes'
import UseInterval from 'hooks/UseInterval'

import Section from 'components/layout/Section'

import styles from 'styles/components/SystemInfo.module.scss'

const socket = require('libs/socket')

export default function Network() {
    
    let [networkStats, setNetworkStats] = useState([])

    UseInterval(() => {
        socket.emit('system', 'networkStats', setNetworkStats)
    }, 500)

    let networks = useMemo(() => {
        return networkStats.map(net => {
            return (
                <div key={net.iface} className={styles.group} >
                    <h3 className={styles.name} >{net.iface}</h3>
                    <div className={styles.details} >
                        <div className={styles.stat} >
                            <span>UP</span>
                            <h4>{formatBytesToString(net.tx_sec)}</h4>
                        </div>
                        <div className={styles.stat} >
                            <span>DOWN</span>
                            <h4>{formatBytesToString(net.rx_sec)}</h4>
                        </div>
                        <div className={styles.stat} >
                            <span>Total Received</span>
                            <h4>{formatBytesToString(net.rx_bytes)}</h4>
                        </div>
                        <div className={styles.stat} >
                            <span>Total Sent</span>
                            <h4>{formatBytesToString(net.tx_bytes)}</h4>
                        </div>
                    </div>
                </div>
            )
        })
    }, [networkStats])

    if(networkStats.length < 1) return false
    return (
        <Section title="Network" pclass={styles.network} >
            {networks}
        </Section>
    )
}
