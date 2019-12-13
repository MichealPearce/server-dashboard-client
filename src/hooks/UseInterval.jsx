import {useEffect, useState} from 'react'

/**
 * A solution for ensuring proper interval clearing when components unmount
 *
 * @export
 * @param {*} func
 * @param {*} interval
 * @returns intervalID
 */
export default function UseInterval(func, interval) {

    let [intervalID, setUpdater] = useState(false)  
    let [_mounted, _isMounted] = useState(true)

            
    useEffect(() => {
        func()
        setUpdater(setInterval(() => {
            //makes sure it's still mounted before running action
            if(_mounted) func()
        }, interval))

        return () => _isMounted(false)
    // eslint-disable-next-line
    }, [])

    //split up because of memory leaks
    useEffect(() => {
        return () => clearInterval(intervalID)
    }, [intervalID])

    return intervalID

}