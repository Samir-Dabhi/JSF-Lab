// 68.	Demonstrate the use of map method in ReactJS to display array.
import React from 'react'

function DisplayFaculty(){
    var names = ['Nileshsir','Jogisir','Chiragsir']
    return (
        <>
        {
            names.map((name) => (
            <li>{name}</li>
            ))
        }
        </>
      
  )
}

export default DisplayFaculty;