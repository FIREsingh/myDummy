import { useEffect, useState } from 'react'
import Navbar from '../../AdminComponents/Navbar/Navbar'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/URLS.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/authSlice.js'

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const {user} = useSelector(store => store.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', input.email);
        formData.append('password', input.password)

        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if(res.data.success) {
                dispatch(setUser(res.data.user))
                navigate('/admin/dashboard')
                console.log("Login Success")
            }
        } catch (err) {
            console.log(err)
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/admin/dashboard')
            console.log('Already Login')
            toast.success("Already Login")
            return;
        }
    }, [])
  return (
    <div>
        <Navbar />
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10 px-10 py-10'>
                <h1 className='font-bold text-ml mb-5'> Login </h1>
                <div className='my-5'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='w-full p-2 border border-gray-300 rounded-md' value={input.email} onChange={changeEventHandler} />
                </div>
                <div className='my-5'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='w-full p-2 border border-gray-300 rounded-md' name='password' value={input.password} onChange={changeEventHandler} />
                </div>
                <button className='w-full bg-designColor text-white rounded-md py-2 mt-2 text-xl'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login