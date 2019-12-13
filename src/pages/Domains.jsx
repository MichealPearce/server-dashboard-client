import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Page from 'components/layout/Page'
import SubNavigation from 'components/Navigation/SubNavigation'

import styles from 'styles/pages/Domains.module.scss'

const socket = require('libs/socket')

export default function Domains() {

    let [domains, updateDomains] = useState(null)

    useEffect(() => {
        socket.emit('apache', 'list', data => {
            updateDomains(data.map(domain => {
                return (
                    <div key={domain.ServerName} className={styles.site} >
                        {domain.ServerName}
                    </div>
                )
            }))
        })
    }, [])

    if(!domains) return false
    return (
        <Page className={styles.page} >
            <SubNavigation>
                <Link to="/domains/add" >Add Domain</Link>
            </SubNavigation>
            {domains}
        </Page>
    )
}