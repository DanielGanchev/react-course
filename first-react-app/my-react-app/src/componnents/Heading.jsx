import React from 'react'





function Heading() { let greetings;

  const customStyle = {
    color: 'red',
    fontSize: '20px',
    backgroundColor: 'black'
  }

  const currentTime = new Date().getHours()
  if (currentTime < 12) {
    greetings = 'Good Morning'
    customStyle.color = 'green'
  } else if (currentTime < 18) {
    greetings = 'Good Afternoon'
    customStyle.color = 'orange'
  } else {
    greetings = 'Good Night'
    customStyle.color = 'blue'
  }
  
  return <h1 className='heading' style={customStyle}>{greetings}</h1>;
}

export default Heading;