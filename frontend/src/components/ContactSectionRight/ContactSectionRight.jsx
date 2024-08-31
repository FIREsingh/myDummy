import { useState } from 'react'
import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loadingSlice.js';
import axios from 'axios'
import {REQUEST_API_END_POINT} from '../../utils/URLS.js'
import { Input } from '../ui/input.jsx';
import { Textarea } from '../ui/textarea.jsx';
const ContactSectionRight = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    })

    const { loading } = useSelector(store => store.loading)
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input)
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('mobile', input.mobile);
        formData.append('email', input.email);
        formData.append('subject', input.subject);
        formData.append('message', input.message);

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${REQUEST_API_END_POINT}/add`, formData, {
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (res.data.success) {
                toast.success(res.data.message)
            }
        } catch (err) {
            console.log(err)
            toast.error(err.response.data.message)
        } finally {
            dispatch(setLoading(false));
        }
    }
  return (
    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
        <form onSubmit={submitHandler} className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'>
            <div className='w-full flex flex-col lgl:flex-row gap-10'>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Your Name
                    </p>
                    <Input 
                        className='contactInput' 
                        type='text' 
                        name='name'
                        onChange={changeEventHandler}
                        value={input.name}
                    />
                </div>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                        Phone
                    </p>
                    <Input 
                        className='contactInput' 
                        type='text' 
                        name='mobile'
                        onChange={changeEventHandler}
                        value={input.mobile}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                    Email
                </p>
                <Input 
                    className='contactInput'
                    type='email'
                    name='email'
                    onChange={changeEventHandler}
                    value={input.email}
                />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                    Subject
                </p>
                <Input 
                    className='contactInput'
                    type='text'
                    name='subject'
                    onChange={changeEventHandler}
                    value={input.subject}
                />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                    Message
                </p>
                <Textarea name='message' className='contactTextInput' cols='30' rows='10' onChange={changeEventHandler} value={input.message}></Textarea>
            </div>
            <div className='w-full'>
                {
                    loading ?
                    <button className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Please Wait...</button> : 
                    <button className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
                }
            </div>
        </form>
    </div>
  )
}

export default ContactSectionRight