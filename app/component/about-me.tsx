
// import { skills } from '@/data/page-data';
import React, {useId} from 'react'
import Skills from './skills';


const AboutMe = ({data, skills}) => {
  const {title , body}= data
  const id = useId();
    return (
    <section>
        <h2 className='mb-8'>{title}</h2>
        {body?.map((el,i)=> (
        <p className='mb-6' key={`${id}_${i}`}>{el}</p>))}
    
    <Skills data={skills}/>
    </section>

   
  )
}

export default AboutMe