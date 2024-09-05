// 68.	Demonstrate the use of map method in ReactJS to display array.
import React from 'react'

function DisplayArrUsingMap(){
    var names = ['samir','krunal','himanshu']
    return (
        <div>
        {
            names.map((name) => (
            <p>{name}</p>
            ))
        }
      </div>
  )
}

export default DisplayArrUsingMap;