import React from 'react'
import moment from 'moment'
import DateBoxes from '../DateBoxes/DateBoxes'

const CreateDates = () => {
    const currentDate = moment(Date()).format('llll');

    /**
     * Given current date, set date to respective day 
     * (i.e Sat, December 24, 2022 do the following:
     *  1) Fill in the previous dates to fill in week (12/18 - 12/24)
     *  2) Fill in the following dates so that our calendar has 5 weeks
     *  3) For each week, the left side shows the month, and the right shows year
     *  4) Need to create boxes with respective date
     *  5) For each column of day, the day is shown on the top)
     */

    return (
        <div>
            Current Dates
            <DateBoxes />
        </div>
    )
}

export default CreateDates