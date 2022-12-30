import React from 'react'
import styles from './Month.module.css'

const Month = ({week, flagToday}) => {
    const monthStyle = ["btn", "btn-white", "rounded", "border-0", styles["btn_square_month"]].join(" ")

    const months = {
        "1" : "Jan",
        "2" : "Feb",
        "3" : "Mar",
        "4" : "Apr",
        "5" : "May",
        "6" : "Jun",
        "7" : "Jul",
        "8" : "Aug",
        "9" : "Sep",
        "10" : "Oct",
        "11" : "Nov",
        "12" : "Dec"
    }
    
    /**
     * Return a button for the current week's month, and highlighting 
     * the current month.
     */
    const findMonth = () => {
        const month = months[week[0].split('/')[0]] 
        return (
            flagToday
            ? <button value={month} type="button" className={monthStyle}><strong>{month}</strong></button>
            : <button value={month} type="button" className={monthStyle}>{month}</button>
            )
    }

    return findMonth()
}

export default Month