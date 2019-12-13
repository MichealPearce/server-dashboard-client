import React from 'react'
import cls from 'classnames'
import styles from 'styles/common.module.scss'

export default function Row(props) {
    return (
        <div {...props} className={cls(styles.row, props.className)} >
            {props.children}
        </div>
    )
}
