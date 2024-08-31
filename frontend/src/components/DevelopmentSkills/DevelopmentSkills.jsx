import SkillCard from '../SkillCard/SkillCard'


const DevelopmentSkills = () => {
  return (
    <div className='w-full lgl:w-1/2'>
        <div>
            <p className='text-sm text-designColor tracking-[4px]'>FEATURES</p>
            <h2 className='text-2xl md:text-4xl font-bold'>DEVELOPMENT SKILLS</h2>
        </div>
        <div className='mt-14 w-full flex flex-col gap-6'>
          <div>
            <SkillCard skillName='Skill Name' percent='100' />
          </div>
          <div>
            <SkillCard skillName='Skill Name' percent='90'/>
          </div>
          <div>
            <SkillCard skillName='Skill Name' percent='60'/>
          </div>
          <div>
            <SkillCard skillName='Skill Name' percent='70'/>
          </div>
          <div>
            <SkillCard skillName='Skill Name' percent='80'/>
          </div>
        </div>
    </div>
  )
}

export default DevelopmentSkills