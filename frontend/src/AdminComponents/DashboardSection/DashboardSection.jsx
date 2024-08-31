import Cards from '@/AdminComponents/Cards/Cards';
import { IoBookSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';

const DashboardSection = () => {
  const educations = useSelector(store => store.education.education)
  const experiences = useSelector(store => store.experience.experience)
  const projects = useSelector(store => store.project.project)
  const requests = useSelector(store => store.request.requests)
  return (
    <div className='grid grid-cols-4 gap-2'>
        <Cards title='Education' count={educations.length} icon=<IoBookSharp /> />
        <Cards title='Experience' count={experiences.length} icon=<FaShoppingBag /> />
        <Cards title='Project' count={projects.length} icon=<FaHtml5 /> />
        <Cards title='Request' count={requests.length} icon=<FaPhoneAlt /> />
    </div>
  )
}

export default DashboardSection