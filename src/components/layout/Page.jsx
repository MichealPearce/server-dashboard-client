import React from 'react'
import cls from 'classnames'

import styles from 'styles/common.module.scss'

export default function Page(props) {
    return (
        <div {...props} className={cls(styles.page, props.className)} >
            {props.children}
        </div>
    )
}
