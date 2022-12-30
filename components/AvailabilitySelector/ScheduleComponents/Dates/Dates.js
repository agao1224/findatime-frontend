import React from 'react'
import styles from "./Dates.module.css"
import Month from "../Month/Month"

const Dates = ({week, flagToday=false, today}) => {
    const dateStyle = ["btn", "btn-primary", "rounded", styles["btn_square_date"]].join(" ")
    const monthStyle = ["btn", "btn-white", "rounded", "border-0", styles["btn_square_month"]].join(" ")

    /**
     * map over the dates, and return buttons for each date, 
     * highlighting today as well.
     */
    const convertDates = () => week.map((date, day) => {
        const dateNum = date.split('/')[1]
        return (
            (flagToday && day === today) 
            ? <button key={day} type="button" className={dateStyle}><b>{dateNum}</b></button>
            : <button key={day} type="button" className={dateStyle}>{dateNum}</button>)
    })

    return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Month flagToday={flagToday} week={week}/>
                        {convertDates()}
                    </div>
                </div>
            </div>
    )
}

export default Dates