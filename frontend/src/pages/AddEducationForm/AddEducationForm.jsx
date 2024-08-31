import AdminDashboardNavbar from '@/AdminComponents/Dashboard/AdminDashboardNavbar';
import { Button } from '../../components/ui/button';
import { Calendar } from '../../components/ui/calendar';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Textarea } from '../../components/ui/textarea';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import { EDUCATION_API_END_POINT } from '@/utils/URLS.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const AddEducationForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    school: '',
    degree: '',
    from: '',
    to: '',
    description: '',
  });


  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const isLoading = useSelector(store => store.loading.loading)
  const DateHandler = (name, date) => {
    const formattedDate = format(date, "dd/MM/yyyy");
    setInput((prevInput) => ({
      ...prevInput,
      [name]: formattedDate,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('school', input.school);
    formData.append('degree', input.degree);
    formData.append('from', input.from);
    formData.append('to', input.to);
    formData.append('description', input.description);

    try {
      const res = await axios.post(`${EDUCATION_API_END_POINT}/add`, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.data.success) {
        navigate('/admin/dashboard');
        toast.success(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'An error occurred');
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <AdminDashboardNavbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="text-xl font-titleFonts font-bold mb-5">Add Education</h1>

          <div className="my-2">
            <Label htmlFor="school">School</Label>
            <Input type="text" name="school" value={input.school} onChange={changeEventHandler} />
          </div>

          <div className="my-2">
            <Label htmlFor="degree">Degree</Label>
            <Input type="text" name="degree" value={input.degree} onChange={changeEventHandler} />
          </div>

          <div className="flex gap-2">
            <div className="flex-grow my-2">
              <Label htmlFor="from">From</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !input.from && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {input.from ? input.from : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={input.from ? new Date(input.from) : undefined}
                    onSelect={(date) => DateHandler('from', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex-grow my-2">
              <Label htmlFor="toDate">To</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !input.toDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {input.to ? input.to : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={input.to ? new Date(input.to) : undefined}
                    onSelect={(date) => DateHandler('to', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="my-2">
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" value={input.description} onChange={changeEventHandler}></Textarea>
          </div>

          <Button variant="outline" className="w-full mt-5 bg-designColor">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddEducationForm;
