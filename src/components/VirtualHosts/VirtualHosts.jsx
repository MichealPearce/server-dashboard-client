import React, { useEffect, useState } from 'react'
import _ from 'underscore'

import styles from 'styles/components/VirtualHosts.module'

function Host(props) {
    return (
        <div className={styles.vhost}>
            <h2>{props.ServerName}</h2>
            <div className={styles.hostDetails} >
                {_.pairs(props).map(([name, value]) => {
                    return (
                        <div key={name} className={styles.detail} >
                            <h4>{name}</h4>
                            <span>{value}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function VirtualHosts({ socket }) {

    let [hosts, setHosts] = useState([])

    useEffect(() => {
        socket.emit('vhosts/list')
        socket.on('vhosts/list', data => {
            setHosts(data)
        })
    }, [socket])
    
    return (
        <div className={styles.section} >
            <h1>Virtual Hosts</h1>
            <div className={styles.hostList}>
                {hosts.map(props => <Host key={props.ServerName} {...props} />)}
            </div>
        </div>
    )
}
