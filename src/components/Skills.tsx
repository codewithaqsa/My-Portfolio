import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="flip-right">
                <h2 className='text-4xl md:text-5xl' >My Professional Abilitiese</h2>
                <p className='text-gray-500 pt-2'>
                I possess a strong foundation in web development technologies, including HTML, CSS, JavaScript, and TypeScript. With HTML and CSS, I have created structured, responsive layouts that enhance user experience across devices. My proficiency in JavaScript allows me to implement dynamic functionalities, while my knowledge of TypeScript ensures robust, maintainable code through type safety. I am adept at using these technologies in collaborative projects, contributing to seamless integration and effective problem-solving. My passion for continuous learning drives me to stay updated with industry trends and best practices, enabling me to deliver high-quality web applications
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-right">Typescript</h2>
                        <h2 data-aos="flip-right">React.js</h2>
                        <h2 data-aos="flip-right">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-right">Tailwind</h2>
                        <h2 data-aos="flip-right">Node.js</h2>
                        <h2 data-aos="flip-right">CSS</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills