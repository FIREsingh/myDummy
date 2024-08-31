import { setSingleProject } from '@/redux/projectSlice.js';
import { PROJECT_API_END_POINT } from '@/utils/URLS.js';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetProjectByID = (projectId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleProject = async () => {
            try {
                const res = await axios.get(`${PROJECT_API_END_POINT}/${projectId}/view`);
                if (res.data.success) {
                    dispatch(setSingleProject(res.data.project));
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchSingleProject();
    }, [projectId, dispatch]);
};

export default useGetProjectByID;
