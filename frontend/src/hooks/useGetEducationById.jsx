import { setSingleEducation } from "@/redux/educationSlice.js";
import { EDUCATION_API_END_POINT } from "@/utils/URLS.js";
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const useGetEducationById = (educationId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleEducation = async () => {
            try {
                const res = await axios.get(`${EDUCATION_API_END_POINT}/${educationId}/view`);
                if(res.data.success) {
                    dispatch(setSingleEducation(res.data.education))
                }
            } catch(err) {
                console.log(err)
            }
        }
        fetchSingleEducation();
    }, [educationId, dispatch])
}

export default useGetEducationById