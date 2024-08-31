import { useSelector } from 'react-redux';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Title from '../../components/Title/Title'
import useGetAllProjects from '../../hooks/useGetAllProjects'

const Projects = () => {
  useGetAllProjects();
  const projectList = useSelector(store => store.project.project)
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des='MY PROJECTS' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
            {
              projectList && projectList.length > 0 ? (
                projectList.map((project) => (
                  <ProjectCard 
                    key={project._id}
                    name={project.projectName}
                    pic={project.projectPic}
                    desc={project.description}
                    link={project.projectLink}
                  />
                ))
              ) : (
                <p> No Project Found </p>
              )
            }
        </div>
    </section>
  )
}

export default Projects