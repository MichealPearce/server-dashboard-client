import {useState, useEffect} from 'react'

export const SetEffect = (action, query) => {
    return useEffect(() => {
        let check = true
        query.forEach(q => check = q)
        if(check) return action()
    }, query)
}
