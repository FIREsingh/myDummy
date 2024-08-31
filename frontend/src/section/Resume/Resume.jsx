import { useState } from "react"
import ResumeEducationSection from "../../components/ResumeEducationSection/ResumeEducationSection"
import ResumeSkillSection from "../../components/ResumeSkillSection/ResumeSkillSection"
import Title from "../../components/Title/Title"

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title title="SOME DETAILS ABOUT ME" des='RESUME' />
        </div>
        <div>
          <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
              <li onClick={() => setEducationData(true) & setSkillsData(false) & setExperienceData(false) & setAchievementData(false)} className={`${educationData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>Education</li>
              <li onClick={() => setEducationData(false) & setSkillsData(true) & setExperienceData(false) & setAchievementData(false)} className={`${skillsData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>Professional Skills</li>
              <li onClick={() => setEducationData(false) & setSkillsData(false) & setExperienceData(true) & setAchievementData(false)} className={`${experienceData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>Experiences</li>
              <li onClick={() => setEducationData(false) & setSkillsData(false) & setExperienceData(false) & setAchievementData(true)} className={`${achievementData?"border-designColor rounded-lg":"border-transparent"} resumeli`}>Achievements</li>
          </ul>
        </div>
        {
          educationData && (
            <div className='py-12 font-titleFonts gap-20'>
              <ResumeEducationSection />
            </div> 
          )
        }
        {
          skillsData && (
            <div className='py-12 font-titleFonts gap-20'>
              <ResumeSkillSection />
            </div>
          )
        }
    </section>
  )
}

export default Resume