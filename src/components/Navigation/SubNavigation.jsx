import React from 'react'

import styles from 'styles/components/Navigation.module.scss'

export default function SubNavigation({children}) {
    return (
        <div className={styles.subnav} >
            {children}
        </div>
    )
}
