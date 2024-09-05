// 66.	Demonstrate the Event Handling in ReactJS.

import React from 'react'

function EventHandling(){
    function EventFunction(){
        console.log('button is clicked!');
    }
    return (
        <button onClick={EventFunction}>Click me!</button>
    )
}

export default EventHandling