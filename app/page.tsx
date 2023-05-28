import { aboutMe, skills , professionalData} from '@/data/page-data'
import React from 'react'
import AboutMe from './component/about-me'
import ProfessionalExperience from './component/professional-experience'

const page = () => {
  return (
    <>
    
    <AboutMe data={aboutMe} skills={skills}/>
    <ProfessionalExperience data={professionalData}/>

    
    </>
  )
}

export default page