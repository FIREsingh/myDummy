import { useSelector } from 'react-redux';
import useGetAllExperiences from '../../hooks/useGetAllExperiences'
import ResumeCard from '../ResumeCard/ResumeCard'

const Experience = () => {
  useGetAllExperiences();
  const experienceList = useSelector(store => store.experience.experience)
  
  const extractMonthAndYear = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth()+1;
    const year = newDate.getFullYear();

    return `${month}/${year}`
  }

  const experienceDates = (from, to) => {
    const fromDate = extractMonthAndYear(from)
    const toDate = extractMonthAndYear(to)

    return `${fromDate} - ${toDate}`
  }
  return (
    <div className='w-full xl:w-1/2'>
        <div className='py-6 lgl:py-12 font-titleFonts flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>1998-2010</p>
            <h2 className='text-3xl md:text-4xl font-bold'>EXPERIENCE</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            {
              experienceList && experienceList.length > 0 ? 
              (
                experienceList.map((experience) => (
                  <ResumeCard 
                    key={experience._id}
                    title={experience.company}
                    subtitle={experience.position}
                    date={experienceDates(experience.from, experience.to)}
                    description={experience.description}
                  />
                ))
              ) :
             (<p> No Education Found</p>)
            }
        </div>
    </div>
  )
}

export default Experience