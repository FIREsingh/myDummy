import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { EDUCATION_API_END_POINT } from '../utils/URLS.js'
import { setEducation } from '../redux/educationSlice'



const useGetAllEducation = (refresh) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllEducations = async () => {
            try {
                const res = await axios.get(`${EDUCATION_API_END_POINT}/view`);
                if (res.data.success) {
                    dispatch(setEducation(res.data.educationList))
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchAllEducations();
    }, [dispatch, refresh])
}

export default useGetAllEducation;