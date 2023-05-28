'use client'
import React, {useState} from 'react'

const Skills = ({data}) => {
    const [activeTab, SetActiveTab] = useState('soft');
    console.log(activeTab)
    const SetBg = (active)=> (activeTab === active? 'bg-yellow' : 'bg-grey');
    const SetTabsAlignment = (tab)=> (tab === 'soft'? 'text-left' : 'text-right');

    const tabs =   (<div className='flex'>
    {['soft', 'hard'].map((el)=>(
         <button className={`btn ${SetBg(el)} ${SetTabsAlignment(el)}`} type='button' onClick={()=> SetActiveTab(el)}>{el} Skills </button>
         ))}
    </div>)

const content = (
<ul className={`flex flex-row flex-wrap content-start list-none gap-2 py-4 ${activeTab==='soft'? 'justify-start' : 'justify-end'} `}>
   
   {data[activeTab].map(({icon, text})=>( 
    <li key={text} className='skill'>
        <span>{icon}</span> {text}
    </li>
   ))}
</ul>
)
  return (
    <div>
        
    {tabs}
    {content}
    
    </div>
  )
}

export default Skills