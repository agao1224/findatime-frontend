import React from 'react'
import moment from 'moment'
import DateBoxes from '../DateBoxes/DateBoxes'

const CreateDates = () => {    
    /**
     * Returns the "day" of today's date
     */
    const findCurrentDay = () => {
        const getDay = moment().format('ddd') 
        switch(getDay) {
            case "Sun":
                return 0;
            case "Mon":
                return 1;
            case "Tue":
                return 2;
            case "Wed":
                return 3;
            case "Thu":
                return 4;
            case "Fri":
                return 5;
            case "Sat":
                return 6;
            default:
                return -1
        }
    }

    /**
     * Returns an array of the previous days of the week given today's date
     */
    const getPastDates = (currentDay) => {
        const pastDatesArray = []
        let counter = 0

        while (counter < currentDay) {
            const yesterdays =  moment().subtract(counter+1, 'days').format('l');
            pastDatesArray.push(yesterdays)
            counter++;
        }
        console.log(pastDatesArray)
        return pastDatesArray
    }

    /**
     * Returns an 2D array, where each index is the week (5 weeks), and each
     * week contains the dates corresponding to the each week given today's date
     */
    const getNextDays = (pastDates) => {
        const weeks = [pastDates, [], [], [], []]
        const numOfDays = 35-pastDates.length
        let currWeek = 0

        for (var currDay = 0; currDay < numOfDays; currDay++) {
            const getDay = moment().add(currDay, 'days').format('l')
            weeks[currWeek].push(getDay)
            if (weeks[currWeek].length === 7) {
                currWeek++
            }
        }
        return weeks
    }

    const currentDay = findCurrentDay()
    const pastDates = getPastDates(currentDay)
    const weeks = getNextDays(pastDates)
    console.log("Dates for each Weeks:")
    console.log(weeks[0])
    console.log(weeks[1]) 
    console.log(weeks[2]) 
    console.log(weeks[3]) 
    console.log(weeks[4])

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