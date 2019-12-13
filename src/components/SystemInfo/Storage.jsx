import React, {useMemo, useState} from 'react'

import {formatBytesToString} from 'libs/formatBytes'
import UseInterval from 'hooks/UseInterval'

import Section from 'components/layout/Section'
import ProgressBar from 'components/common/ProgressBar'

import styles from 'styles/components/SystemInfo.module.scss'

const socket = require('libs/socket')

function getStorageUnits(fsSize) {
    return fsSize.map(data => {
        let used = formatBytesToString(data.used, false)
        let size = formatBytesToString(data.size, false)
        return (
            <div key={data.fs} className={styles.group} >
                <div title={data.fs} className={styles.name} >{data.fs}</div>
                <div className={styles.type} >{data.type}</div>
                <div className={styles.stats} >
                    {`${used} used of ${size}`}
                </div>
                <ProgressBar
                    title={data.use+'%'}
                    className={styles.bar}
                    percent={data.use}
                />
            </div>
        )
    })
}

export default function Storage() {

    let [fsSize, setFsSize] = useState([])

    UseInterval(() => {
        socket.emit('system', 'fsSize', setFsSize)
    }, 10000)

    let units = useMemo(() => {
        return getStorageUnits(fsSize)
    }, [fsSize])

    if(fsSize.length < 1) return false
    return (
        <Section title="Storage" pclass={styles.storage} >
            <div className={styles.models} >
                {units}
            </div>
        </Section>
    )
}
