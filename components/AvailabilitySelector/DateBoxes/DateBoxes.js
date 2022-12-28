import React from 'react'
import styles from "./DateBoxes.module.css"

const DateBoxes = (props) => {
    const dateStyle = ["btn", "btn-primary", "rounded", styles["btn_square_date"]].join(" ")
    const monthStyle = ["btn", "btn-white", "rounded", "border-0", styles["btn_square_month"]].join(" ")
    
    const { week, flagToday, today } = props
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

    /**
     * map over the dates, and return buttons for each date, 
     * highlighting today as well.
     */
    const convertDates = week.map((date, day) => {
        const dateNum = date.split('/')[1]
        return (
            (flagToday && day === today) 
            ? <button key={day} type="button" className={dateStyle}><b>{dateNum}</b></button>
            : <button key={day} type="button" className={dateStyle}>{dateNum}</button>)
    })

    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        {findMonth()}
                        {convertDates}
                    </div>
                </div>
            </div>
    )
}

export default DateBoxes