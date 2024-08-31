import SidePanel from '@/AdminComponents/Dashboard/SidePanel'
import DashboardSection from '../../AdminComponents/DashboardSection/DashboardSection'
import ProjectSection from '@/AdminComponents/ProjectsSection/ProjectsSection'
import ExperienceSection from '@/AdminComponents/ExperienceSection/ExperienceSection'
import EducationSection from '@/AdminComponents/EducationSection/EducationSection'
import { useState } from 'react'
import AdminDashboardNavbar from '@/AdminComponents/Dashboard/AdminDashboardNavbar'
import RequestSection from '@/AdminComponents/RequestSection/RequestSection'


const Dashboard = () => {
  const [dashboard, setDashboard] = useState(true);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [project, setProject] = useState(false);
  const [request, setRequest] = useState(false);
  return (
    <div>
      <AdminDashboardNavbar />
      <div className='flex gap-2'>
        <div className='w-1/6'>
          <SidePanel 
            setDashboard={setDashboard}
            setEducation={setEducation}
            setExperience={setExperience}
            setProject={setProject}
            setRequest={setRequest}
          />
        </div>
        <div className='w-5/6 mt-2'>
          {
            dashboard && (
              <DashboardSection />
            )
          }
          {
            project && (
              <ProjectSection />
            )
          }
          {
            experience && (
              <ExperienceSection />
            )
          }
          {
            education && (
              <EducationSection />
            )
          }
          {
            request && (
              <RequestSection />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard