import React from 'react'
import Card from './Card'
import faker from 'faker'
import './Card.css'
import staffList1 from './staffList1'
import staffList2 from './staffList2'

const CarList = ()=>{
    return <div>
        <div className="row">
    {staffList1.map((staff)=>
     <Card 
    avator={staff.avator}
    name = {staff.name}
    position = {staff.position}
/>
)} </div>,
<div className="row">
    {staffList2.map((staff)=>
     <Card 
    avator={staff.avator}
    name = {staff.name}
    position = {staff.position}
/>
)}

    </div>
    </div> 
}

export default CarList