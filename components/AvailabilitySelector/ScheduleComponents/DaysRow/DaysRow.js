import React from 'react'
import styles from "./DaysRow.module.css"


const DaysRow = () => {
    const daysRowStyle = ["btn", "btn-white", "rounded", "border-0", styles["btn_square_daysRow"]].join(" ")

    const showDaysRow = () => {
        const days = ['','S', 'M', 'T', "W", "T", 'F', 'S']
        return days.map((day) => {
            return <button type="button" className={daysRowStyle}>{day}</button>
        })
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {showDaysRow()}
                </div>
            </div>
        </div>
)
}

export default DaysRow