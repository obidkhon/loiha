import React from 'react'
import Person from './Person'

function NameList() {
    const perons = [
        {
            id:0,
          name:'Olima',
          skill: 'Java',
          age:11,
        },
    {
        id:1,
        name:'Shaxnoza',
        skill: 'Js',
        age:31,
    },
    {
        
     id:2,   
        age:41,
        
      name:  'Laylo',
      skill: 'react',
    }
]

const personList=    perons.map( person=>   < Person  person= {person}/>  )

 
    return <div>
            { 
            personList
            }
        </div>
    
}

export default NameList
