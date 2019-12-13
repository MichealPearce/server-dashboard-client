import React from 'react'
import {Route} from 'react-router-dom'

//Components
import Navigation from 'components/Navigation'
import LoadingScreen from 'components/common/LoadingScreen'

import View from 'components/layout/View'

import Pages from 'pages'

//Styles
import styles from 'styles/App.module.scss'

//connection to server
const socket = require('libs/socket')

export default function App() {
    if (!socket) return <LoadingScreen />
    return (
        <div className={styles.app} >
            <Navigation />
            <View>
                <Route exact path="/" component={Pages.Home} />
            </View>
        </div>
    );
}
