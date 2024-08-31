import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { EXPERIENCE_API_END_POINT } from '../utils/URLS.js'
import { setExperience } from "../redux/experienceSlice.js";


const useGetAllExperiences = (refresh) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllExperiences = async () => {
            try {
                const res = await axios.get(`${EXPERIENCE_API_END_POINT}/view`);
                if (res.data.success) {
                    dispatch(setExperience(res.data.experienceList));
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllExperiences();
    }, [dispatch, refresh])
}

export default useGetAllExperiences;