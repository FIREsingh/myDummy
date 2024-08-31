import { setRequests } from '@/redux/requestSlice';
import { REQUEST_API_END_POINT } from '@/utils/URLS.js';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllRequest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllRequests = async () => {
        try {
            const res = await axios.get(`${REQUEST_API_END_POINT}/view`)
            if (res.data.success) {
                dispatch(setRequests(res.data.requestList))
            }
        } catch (err) {
            console.log(err)
        }
    }
    fetchAllRequests();
  }, [dispatch])
}

export default useGetAllRequest;