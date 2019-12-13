import React from 'react'
import cls from 'classnames'
import styles from 'styles/common.module.scss'

export default function Column(props) {
    return (
        <div {...props} className={cls(styles.column, props.className)} >
            {props.children}
        </div>
    )
}
