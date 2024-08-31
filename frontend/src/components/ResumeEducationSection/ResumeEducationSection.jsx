import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import { motion } from 'framer-motion'

const ResumeEducationSection = () => {
  return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration:1}}} className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
            <Education />
            <Experience />
        </motion.div>
    );
};

export default ResumeEducationSection