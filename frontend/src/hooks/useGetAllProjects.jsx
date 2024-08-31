import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PROJECT_API_END_POINT } from '../utils/URLS.js';
import { setProject } from '../redux/projectSlice.js';

const useGetAllProjects = (refresh) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllProjects = async () => {
        try {
            const res = await axios.get(`${PROJECT_API_END_POINT}/view`)
            if(res.data.success) {
                dispatch(setProject(res.data.projectList))
            }
        } catch (err) {
            console.log(err)
        }
    }
    fetchAllProjects();
  }, [refresh, dispatch])
}

export default useGetAllProjects;