import { FaBell } from "react-icons/fa";
import { TbDoorExit } from "react-icons/tb";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/URLS.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";


const AdminDashboardNavbar = () => {
  const {user} = useSelector(store=>store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_END_POINT}/logout`, {
        withCredentials: true
      });

      if(res.data.success) {
        dispatch(setUser(null))
        navigate('/admin/login')
        toast.success(res.data.message)
      }
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message)
    }
  }
  return (
    <div className='w-full h-16 bg-bodyColor'>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl uppercase font-bold text-designColor font-titleFonts px-5 py-4 bold'>Admin Panel</h3>
          <div className='flex text-white items-center mx-10 gap-10'>
            <span className='border hover:text-designColor hover:border-designColor border-gray-300 p-2 rounded-full text-xl'>
              <FaBell />
            </span>
            <Link to='/admin/dashboard'>
              <h3 className='text-lg font-titleFonts font-medium  px-2 py-1 hover:text-designColor hover:border-designColor border-gray-300'>Dashboard</h3>
            </Link>
            <Button className='flex items-center gap-2 group hover:text-designColor text-xl' onClick={logoutHandler}>
                Logout <span><TbDoorExit /></span>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default AdminDashboardNavbar