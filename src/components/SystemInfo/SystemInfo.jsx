import React from 'react'

import Row from 'components/layout/Row'
import Column from 'components/layout/Column'

import Memory from './Memory'
import Storage from './Storage'
import Network from './Network'

import styles from 'styles/components/SystemInfo.module.scss'

export default function SystemInfo() {
    return (
        <Row className={styles.systeminfo} >
            <Column className={styles.asideLeft} >
                <Memory />
                <Network />
            </Column>
            <Column className={styles.asideRight} >
                <Storage />
            </Column>
        </Row>
    )
}