import { setSingleExperience } from '@/redux/experienceSlice.js';
import { EXPERIENCE_API_END_POINT } from '@/utils/URLS.js';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const useGetExperienceById = (experienceId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleExperience = async () => {
        try {
            const res = await axios.get(`${EXPERIENCE_API_END_POINT}/${experienceId}/view`);
            if(res.data.success) {
                dispatch(setSingleExperience(res.data.experience))
            }
        } catch (err) {
            console.log(err)
        }
    }

    fetchSingleExperience();
  }, [experienceId, dispatch])
}

export default useGetExperienceById