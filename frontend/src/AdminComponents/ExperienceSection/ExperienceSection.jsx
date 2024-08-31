import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import useGetAllExperiences from "@/hooks/useGetAllExperiences";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../..//components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { EXPERIENCE_API_END_POINT } from "@/utils/URLS.js";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import axios from "axios";
import { useState } from "react";
const ExperienceSection = () => {
  const [refresh, setRefresh] = useState(false);
  useGetAllExperiences(refresh);
  const navigate = useNavigate();
  const experienceList = useSelector((store) => store.experience.experience);
  const extractMonthAndYear = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${month}/${year}`;
  };
  const deleteHandler = async (educationId) => {
    try {
      const res = await axios.delete(`${EXPERIENCE_API_END_POINT}/${educationId}`)
      if (res.data.success) {
        setRefresh(!refresh)
        navigate('/admin/dashboard')
      }
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <h1 className="text-xl font-titleFonts font-bold">Experiences</h1>
        <Link to="/admin/addExperience">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-green-400"
          >
            Add New Experience <CiCirclePlus />
          </Button>
        </Link>
      </div>
      <div className="mx-3">
        <Table>
          <TableCaption>A list of your experiences.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">S.No</TableHead>
              <TableHead className="text-center">Position</TableHead>
              <TableHead className="text-center">Company</TableHead>
              <TableHead className="text-center">From</TableHead>
              <TableHead className="text-center">To</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {experienceList && experienceList.length > 0 ? (
              experienceList.map((experience, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="text-center">
                    {experience.position}
                  </TableCell>
                  <TableCell className="text-center">
                    {experience.company}
                  </TableCell>
                  <TableCell className="text-center">
                    {extractMonthAndYear(experience.from)}
                  </TableCell>
                  <TableCell className="text-center">
                    {extractMonthAndYear(experience.to)}
                  </TableCell>
                  <TableCell className="text-right gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost">
                          <MoreHorizontal />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='bg-white border-none'>
                        <div className="flex items-center justify-center gap-4">
                          <Button
                            variant="ghost"
                            className="bg-green-400"
                            onClick={() =>
                              navigate(`/admin/education/${experience._id}/edit`)
                            }
                          >
                            Edit
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" className="bg-red-400">
                                Delete
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className='bg-white'>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete your education record.
                                </AlertDialogDescription>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => deleteHandler(experience._id)} className='bg-red-400'>
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
            ) : (
              <TableRow>
                <p> No Education Found </p>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExperienceSection;
