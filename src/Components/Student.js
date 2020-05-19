import React from 'react';

const Student = (props) => {
    return (
      <div>
        <p>Hello my name is {props.name} and {props.age} years old`</p>
      </div>
    )
  }

export default Student;