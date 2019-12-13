import React from 'react'
import {Switch, useLocation} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from 'styles/common.module.scss'
import 'styles/pageTransitions.scss'

export default function ViewContainer({children}) {
    let location = useLocation()
    console.log(location)
    return (
        <div className={styles.view} >
            <TransitionGroup className={styles.transContainer} >
                <CSSTransition
                    key={location.key}
                    classNames="pageTrans"
                    timeout={500}
                >
                    <Switch location={location} >
                        {children}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}