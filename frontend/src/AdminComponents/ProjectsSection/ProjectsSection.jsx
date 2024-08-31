import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog";
import { Button } from "../../components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import useGetAllProjects from "../../hooks/useGetAllProjects";
import { PROJECT_API_END_POINT } from "@/utils/URLS.js";
import axios from "axios";
import { MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const [refresh, setRefresh] = useState(false);
  useGetAllProjects(refresh);
  const navigate = useNavigate();
  const projectList = useSelector((store) => store.project.project);
  const deleteHandler = async (projectId) => {
    try {
      const res = await axios.delete(`${PROJECT_API_END_POINT}/${projectId}`)
      if (res.data.success) {
        setRefresh(!refresh)
        navigate('/admin/dashboard')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div className='flex items-center justify-between p-2'>
        <h1 className='text-xl font-titleFonts font-bold'>Projects</h1>
        <Link to='/admin/project/addProject'>
          <Button variant='outline' className='flex items-center gap-2 bg-green-400'>
            Add New Project <Plus />
          </Button>
        </Link>
      </div>
      <div className="mx-3">
        <Table>
          <TableCaption>A list of your projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='text-left'>S.No</TableHead>
              <TableHead className='text-center'>Project Name</TableHead>
              <TableHead className='text-center'>Project Link</TableHead>
              <TableHead className='text-right'>Actions</TableHead>  
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              projectList && projectList.length > 0 ? 
              (
                projectList.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell className='text-center'>{project.projectName}</TableCell>
                    <TableCell className='text-center'>{project.projectLink}</TableCell>
                    <TableCell className='flex justify-end text-right gap-2'>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant='ghost'>
                            <MoreHorizontal />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='bg-white border-none'>
                          <div className='flex item-center justify-center gap-4'>
                            <Button variant='ghost' className='bg-green-400' onClick={() => navigate(`/admin/project/${project._id}/edit`)}>Edit</Button> 
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant='ghost' className='bg-red-400' onClick={() => deleteHandler(project._id)}>
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className='bg-white'>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Are you sure?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your project record.
                                  </AlertDialogDescription>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteHandler(project._id)} className='bg-red-400'>
                                      Continue
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogHeader>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))
              ) : 
              (
                <TableRow>
                  <p> No Project Found </p>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ProjectSection