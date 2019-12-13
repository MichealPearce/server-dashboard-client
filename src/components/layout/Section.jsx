import React, {useEffect, useState} from 'react'
import cls from 'classnames'

import styles from 'styles/common.module.scss'

export default function Section(props) {

    let {children, className} = props
    let [title, setTitle] = useState(false)

    function initTitle() {
        setTitle(<h2 className={styles.title} >
            {props.title}
        </h2>)
    } useEffect(initTitle, [props.title])

    return (
        <div {...props} className={cls(styles.section, props.pclass)} >
            {title}
            <div className={cls(styles.content, className)} >
                {children}
            </div>
        </div>
    )
}
