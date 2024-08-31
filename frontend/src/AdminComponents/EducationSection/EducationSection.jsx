import { Button } from "../../components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import { MoreHorizontal, Plus } from "lucide-react";
import useGetAllEducation from "@/hooks/useGetAllEducation";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger 
} from "../../components/ui/alert-dialog";
import axios from "axios";
// import { toast } from "sonner";
import { EDUCATION_API_END_POINT } from "@/utils/URLS.js";
import { useState } from "react";

const EducationSection = () => {
    // Ensure the hook runs only once on mount if it should trigger a side effect
    const [refresh, setRefresh] = useState(false)
    useGetAllEducation(refresh);

    const navigate = useNavigate();
    const educationList = useSelector(store => store.education.education);

    const extractMonthAndYear = (date) => {
        const newDate = new Date(date);
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        return `${month}/${year}`;
    }

    const deleteHandler = async (educationId) => {
        try {
            const res = await axios.delete(`${EDUCATION_API_END_POINT}/${educationId}`);
            if (res.data.success) {
               setRefresh(!refresh)
               navigate('/admin/dashboard')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className='flex items-center justify-between p-2'>
                <h1 className='text-xl font-titleFonts font-bold'>Educations</h1>
                <Link to="/admin/addEducation">
                    <Button variant='outline' className='flex flex-row items-center gap-2 bg-green-400'>
                        Add New Education <Plus />
                    </Button>
                </Link>
            </div>
            <div className="mx-3">
                <Table>
                    <TableCaption>A list of your educations.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-left'>S.No</TableHead>
                            <TableHead className='text-center'>Degree</TableHead>
                            <TableHead className='text-center'>College</TableHead>
                            <TableHead className='text-center'>From</TableHead>
                            <TableHead className='text-center'>To</TableHead>
                            <TableHead className='text-right'>Actions</TableHead>  
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {educationList && educationList.length > 0 ? (
                            educationList.map((education, index) => (
                                <TableRow key={education._id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className='text-center'>{education.degree}</TableCell>
                                    <TableCell className='text-center'>{education.school}</TableCell>
                                    <TableCell className='text-center'>{extractMonthAndYear(education.from)}</TableCell>
                                    <TableCell className='text-center'>{extractMonthAndYear(education.to)}</TableCell>
                                    <TableCell className='text-right gap-2'>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant='ghost'>
                                                    <MoreHorizontal />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className='bg-white border-none'>
                                                <div className='flex items-center justify-center gap-4'>
                                                    <Button variant='ghost' className='bg-green-400' onClick={() => navigate(`/admin/education/${education._id}/edit`)}>
                                                        Edit
                                                    </Button>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button variant='ghost' className='bg-red-400'>
                                                                Delete
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent className='bg-white'>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This action cannot be undone. This will permanently delete your education record.
                                                                </AlertDialogDescription>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction onClick={() => deleteHandler(education._id)} className='bg-red-400'>Continue</AlertDialogAction>
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
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">No Education Records Found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default EducationSection;
