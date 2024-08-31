import DesignSkills from '../DesignSkills/DesignSkills'
import DevelopmentSkills from '../DevelopmentSkills/DevelopmentSkills'
import {motion} from 'framer-motion'

const ResumeSkillSection = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration:1}}} className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
        <DesignSkills />
        <DevelopmentSkills />
    </motion.div>
  )
}

export default ResumeSkillSection