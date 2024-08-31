import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const SidePanel = ({ setDashboard, setEducation, setExperience, setProject, setRequest }) => {

  const panelHandler = (panelComponent) => {
    // Reset all panels
    setDashboard(false);
    setEducation(false);
    setExperience(false);
    setProject(false);
    setRequest(false);

    // Activate the selected panel
    switch (panelComponent) {
      case 'dashboard':
        setDashboard(true);
        break;
      case 'education':
        setEducation(true);
        break;
      case 'experience':
        setExperience(true);
        break;
      case 'project':
        setProject(true);
        break;
      case 'request':
        setRequest(true);
        break;
      default:
        break;
    }
  }

  return (
    <div className='w-full h-[89vh] border bg-bodyColor'>
      <div className='flex flex-col items-center text-designColor'>
        {/* Dashboard Button */}
        <div className='w-full m-2'>
          <div
            className='px-12 flex items-center gap-3 p-2 font-titleFonts group hover:bg-designColor hover:text-white duration-300'
            onClick={() => panelHandler('dashboard')}
          >
            Dashboard <span><MdDashboard /></span>
          </div>
        </div>

        {/* Education Button */}
        <div className='w-full m-2'>
          <div
            className='px-12 flex items-center gap-3 p-2 font-titleFonts group hover:bg-designColor hover:text-white duration-300'
            onClick={() => panelHandler('education')}
          >
            Education <span><IoBookSharp /></span>
          </div>
        </div>

        {/* Experience Button */}
        <div className='w-full m-2'>
          <div
            className='px-12 flex items-center gap-3 p-2 font-titleFonts group hover:bg-designColor hover:text-white duration-300'
            onClick={() => panelHandler('experience')}
          >
            Experience <span><FaShoppingBag /></span>
          </div>
        </div>

        {/* Projects Button */}
        <div className='w-full m-2'>
          <div
            className='px-12 flex items-center gap-3 p-2 font-titleFonts group hover:bg-designColor hover:text-white duration-300'
            onClick={() => panelHandler('project')}
          >
            Projects <span><FaHtml5 /></span>
          </div>
        </div>
        <div className='w-full m-2'>
          <div
            className='px-12 flex items-center gap-3 p-2 font-titleFonts group hover:bg-designColor hover:text-white duration-300'
            onClick={() => panelHandler('request')}
          >
            Requests <span><FaPhoneAlt /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel;
