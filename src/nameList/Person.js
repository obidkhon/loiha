import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>meni ismim {person.name} va nen {person.age} yoshdaman  meni yoqtirgan IT dasturim   {person.skill }!</h1>
        </div>
    )
}

export default Person
