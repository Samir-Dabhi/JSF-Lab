// 68.	Demonstrate the use of map method in ReactJS to display array.
import React from 'react'

function ProductData(){
    var products = [
        {id:1,name:"Mouse",price:500},
        {id:2,name:"Keyboard",price:1000},
        {id:3,name:"Moniter",price:5000}
    ]
    return (
        <>
        {
            products.map((ele) => (
            <li>{ele.id}-{ele.name}-{ele.price}</li>
            ))
        }
        </>
  )
}
export default ProductData;