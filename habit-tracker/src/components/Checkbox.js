import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addDate, toggleHabit } from '../reducers/dateReducer'

const Checkbox = ({ thisDate, i, habit, displayMonth, displayYear, addDate, toggleHabit, dates }) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        thisDate === undefined
            ? setChecked(false)
            : setChecked(dates.filter(d => d.id === thisDate.id)[0].habitsMarked.filter(h => h.name === habit.name).length > 0)
    })

    const handleClick = () => {
        console.log('Habit', habit.name, 'clicked on day:', i)
        thisDate === undefined
            ? addDate({ day: i, month: displayMonth + 1, year: displayYear, habitsMarked: [habit] })
            : toggleHabit(thisDate, habit)
    }

    return (
        <div style={{ border: 'solid', borderWidth: '1px', backgroundColor: '#d2d2d2', width: '20px' }} onClick={handleClick}>
            {checked
                ? 'x'
                : 'o'
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        dates: state.dates
    })
}

const mapDispatchToProps = {
    addDate,
    toggleHabit
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)