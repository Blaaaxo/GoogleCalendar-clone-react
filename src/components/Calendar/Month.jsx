import React from 'react'
import Day from './Day'

export default function Month({ Month }) {
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5'>

            {/* recorre los las semanas */}
            {Month.map((week, index) => (

                <React.Fragment key={index}>

                    {/* recorre los días de la semana */}
                    {week.map((day, i) => (
                        <Day day={day} key={i} rowIndex={index} />
                    ))}
                </React.Fragment>
            ))}
                
        </div>
            )
}
