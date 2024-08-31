import { useSelector } from 'react-redux'
import ResumeCard from '../ResumeCard/ResumeCard'
import useGetAllEducation from '../../hooks/useGetAllEducation'


const Education = () => { 
  useGetAllEducation();
  const educationList = useSelector(store => store.education.education)

  const extractMonthAndYear = (date) => {
    const newDate = new Date(date)
    const month = newDate.getMonth()+1;
    const year = newDate.getFullYear();

    return `${month}/${year}`
  }
  const educationDates = (from, to) => {
    const fromDate = extractMonthAndYear(from)
    const toDate = extractMonthAndYear(to)
    return `${fromDate} - ${toDate}`
  }
  return (
    <div className='w-full xl:w-1/2'>
        <div className='py-6 lgl:py-12 font-titleFonts flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>1998-2010</p>
            <h2 className='text-23xl md:text-4xl font-bold'>EDUCATION</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          {
            educationList && educationList.length > 0 ? (
              educationList.map((edu) => (
                <ResumeCard 
                  key={edu._id} 
                  title={edu.degree}
                  subtitle={edu.school}
                  date={educationDates(edu.from, edu.to)}
                  description={edu.description}
                />
              ))
            ) : <p>No Education Records Found</p>
          }
        </div>
    </div>
  )
}

export default Education