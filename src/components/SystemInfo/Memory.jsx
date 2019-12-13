import React, {useMemo, useState} from 'react'

//Utils
import formatBytes from 'libs/formatBytes'
import UseInterval from 'hooks/UseInterval'

//Components
import Section from 'components/layout/Section'
import ProgressBar from 'components/common/ProgressBar'

//Styles
import styles from 'styles/components/SystemInfo.module.scss'

const socket = require('libs/socket')

export default function Memory() {

    let [mem, setMem] = useState(false)

    UseInterval(() => {
        socket.emit('system', 'mem', setMem)
    }, 500)

    let memoryPercent = useMemo(() => {
        let {active, total} = mem
        let [a, t] = [formatBytes(active), formatBytes(total)]
        return (a/t)*100
    }, [mem])

    if(!mem) return false
    return (
        <Section
            title="Memory"
            className={styles.content}
            pclass={styles.memory}
        >   
            {<ProgressBar percent={memoryPercent} />}
            <div className={styles.details} >
                <h2 className={styles.memoryPercent} >
                    {memoryPercent.toString().substr(0, 5)+'%'}
                </h2>

                <div className={styles.numbers} >
                    {formatBytes(mem.active, true)} / {formatBytes(mem.total, true)}
                </div>
            </div>
        </Section>
    )
}
