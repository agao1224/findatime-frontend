import React from 'react'
import moment from 'moment'
import Dates from '../ScheduleComponents/Dates/Dates'
import DaysRow from '../ScheduleComponents/DaysRow/DaysRow'


const CreateDates = () => {    
    /**
     * Object of the "days" and the corresponding number (0-indexed)
     */
    const convertDayToNum = {
        "Sun" : 0,
        "Mon" : 1,
        "Tue" : 2,
        "Wed" : 3,
        "Thu" : 4,
        "Fri" : 5,
        "Sat" : 6,
    }

    /**
     * Returns an array of the previous days of the week given today's date
     */
    const getPastDates = (currentDay) => {
        const pastDatesArray = []

        while (currentDay > 0) {
            const yesterdays =  moment().subtract(currentDay, 'days').format('l');
            pastDatesArray.push(yesterdays)
            currentDay--;
        }
        return pastDatesArray
    }

    /**
     * Returns an 2D array, where each index is the week (5 weeks), and each
     * week contains the dates corresponding to the each week given today's date
     */
    const getNextDays = (pastDates) => {
        /**
         * Find the numer of days we need to fill up 5 weeks and loop over that
         */
        const weeks = [pastDates, [], [], [], []]
        const numOfDays = 35-pastDates.length
        let currWeek = 0

        for (var currDay = 0; currDay < numOfDays; currDay++) {
            /** 
             * get the day and push into current week list, and move on to
             * next week once the list has 7 days.
             */
            const getDay = moment().add(currDay, 'days').format('l')
            weeks[currWeek].push(getDay)
            if (weeks[currWeek].length === 7) {
                currWeek++
            }
        }
        return weeks
    }

    const currentDay = convertDayToNum[moment().format('ddd')]
    const pastDates = getPastDates(currentDay)
    const weeks = getNextDays(pastDates)

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
            <DaysRow />
            <Dates week={weeks[0]} flagToday={true} today={currentDay}/>
            <Dates week={weeks[1]} />
            <Dates week={weeks[2]} />
            <Dates week={weeks[3]} />
            <Dates week={weeks[4]} />
        </div>
    )
}

export default CreateDates