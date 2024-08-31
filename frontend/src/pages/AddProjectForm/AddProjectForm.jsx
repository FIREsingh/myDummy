import AdminDashboardNavbar from '@/AdminComponents/Dashboard/AdminDashboardNavbar'
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { PROJECT_API_END_POINT } from '@/utils/URLS.js';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProjectForm = () => {
    const [input, setInput] = useState({
        projectName: '',
        projectPic: '',
        projectLink: '',
        description: '',
    })

    const navigate = useNavigate();
    
    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const changeFileHandler = (e) => {
        setInput({
            ...input,
            projectPic: e.target.files?.[0]
        })
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('projectName', input.projectName);
        formData.append('file', input.projectPic);
        formData.append('projectLink', input.projectLink);
        formData.append('description', input.description);

        try {
            const res = await axios.post(`${PROJECT_API_END_POINT}/add`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });

            if (res.data.success) {
                navigate('/admin/dashboard')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
          <AdminDashboardNavbar />
          <div className="flex items-center justify-center max-w-7xl mx-auto">
            <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10" encType='multipart/form-data'>
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
                <Label htmlFor="projecLink">Project Link</Label>
                <Input type="text" name="projectLink" value={input.projecLink} onChange={changeEventHandler} />
              </div>

              <div className="my-2">
                <Label htmlFor="description">Description</Label>
                <Textarea name="description" value={input.description} onChange={changeEventHandler}></Textarea>
              </div>

              <Button type='submit' variant="outline" className="w-full mt-5 bg-designColor">
                Add
              </Button>
            </form>
          </div>
        </div>
      );
}

export default AddProjectForm