import React from 'react'
import cls from 'classnames'

import styles from 'styles/common.module.scss'

export default function ProgressBar(props) {
    return (
        <div {...props} className={cls(styles.progressBar, props.className)} >
            <div className={styles.bar} style={{width: props.percent+'%'}} />
        </div>
    )
}
