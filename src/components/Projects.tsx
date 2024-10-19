import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id : 0,
       title:"Countdown Timer",
        desc:"A Next-js and Typescript powered website to track time  with an interactive countdown feature.",
        img:"/project-1.jpg",
        tags:["Next.js", "CSS", "Typescript", "Node"],
    },
    {
       id : 1,
      title:"Weather Widget",
      desc:"A Next-js and Typescript based tool for fetching and displaying real-time weather.",
      img:"/project-2.jpg",
      tags:["Next.js", "CSS", "Typescript", "Node"],
},
]

const projects = () => {
  return (
    <div  id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        tltle={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default projects 