import React from 'react'
import Links from './Links'

function About(a) {
  console.log(a.links)
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>{a.bio}</p>
      <img src='https://i.imgur.com/mV8PQxj.gif' alt='I made this' />
      <Links github={a.links.github} linkedin={a.links.linkedin}/>
    </div>
  )
}

export default About
