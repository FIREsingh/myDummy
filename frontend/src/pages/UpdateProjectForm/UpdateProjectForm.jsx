import AdminDashboardNavbar from '@/AdminComponents/Dashboard/AdminDashboardNavbar'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Textarea } from '../../components/ui/textarea'
import useGetProjectByID from '@/hooks/useGetProjectByID'
import { PROJECT_API_END_POINT } from '@/utils/URLS.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const UpdateProjectForm = () => {
    const params = useParams();
    const id = params.id;
    useGetProjectByID(id);
    const {singleProject} = useSelector(store => store.project)
    const [input, setInput] = useState({
        projectName: '',
        projectPic: '',
        projectLink: '',
        description: ''
    });

    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const changeFileHandler = (e) => {
        const file = e.target.file?.[0]
        setInput({
            ...input,
            projectPic: file
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('projectName', input.projectName);
        if (input.projectPic) {
            formData.append('projectPic', input.projectPic);
        }
        formData.append('projectLink', input.projectLink);
        formData.append('description', input.description);
        
        try {
            const res = await axios.post(`${PROJECT_API_END_POINT}/${id}/edit`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if(res.data.success){
                navigate('/admin/dashboard')
                console.log("Project Updated Successfully")
                toast.success(res.data.message)
            }

        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message)
        }
    
    }

    useEffect(() => {
        if (singleProject) {
            setInput({
                projectName: singleProject.projectName || '',
                projectPic: singleProject.projectPic || '',
                projectLink: singleProject.projectLink || '',
                description: singleProject.description || ''
            });
        }
    }, [singleProject]);
    return (
        <div>
            <AdminDashboardNavbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form  onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10" encType='multipart/form-data'>
                    <h1 className="text-xl font-titleFonts font-bold mb-5">Add Project</h1>
        
                    <div className="my-2">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input type="text" name="projectName" value={input.projectName} onChange={changeEventHandler} />
                    </div>

                    <div className="my-2">
                        <Label htmlFor="projectPic">Project Image</Label>
                        <Input accept="image/*" type="file" name="projectPic" onChange={changeFileHandler} />
                    </div>
            
                    <div className="my-2">
                        <Label htmlFor="projectLink">Project Link</Label>
                        <Input type="text" name="projectLink" value={input.projectLink} onChange={changeEventHandler} />
                    </div>

                    <div className="my-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea name="description" value={input.description} onChange={changeEventHandler}></Textarea>
                    </div>

                    <Button type='submit' variant="outline" className="w-full mt-5 bg-designColor">
                        Update
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProjectForm