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
import { format } from 'date-fns'; // Import the format function
import axios from 'axios';
import { EXPERIENCE_API_END_POINT } from '@/utils/URLS';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AddExperienceForm = () => {
  const [input, setInput] = useState({
    position: '',
    company: '',
    fromDate: '',
    toDate: '',
    description: '',
  });

  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const DateHandler = (name, date) => {
    const formattedDate = format(date, "dd/MM/yyyy"); // Format the date
    setInput((prevInput) => ({
      ...prevInput,
      [name]: formattedDate, // Store the formatted date in the state
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('position', input.position);
    formData.append('company', input.company);
    formData.append('from', input.fromDate);
    formData.append('to', input.toDate);
    formData.append('description', input.description);

    try {
      const res = await axios.post(`${EXPERIENCE_API_END_POINT}/add`, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.data.success) {
        navigate('/admin/dashboard')
        console.log("Experience Added Successfully")
        toast.success(res.data.message)
      }
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message)
    }
  };

  return (
    <div>
      <AdminDashboardNavbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10" encType='application/json'>
          <h1 className="text-xl font-titleFonts font-bold mb-5">Add Experience</h1>

          <div className="my-2">
            <Label htmlFor="position">Position</Label>
            <Input type="text" name="position" value={input.position} onChange={changeEventHandler} />
          </div>

          <div className="my-2">
            <Label htmlFor="company">Company</Label>
            <Input type="text" name="company" value={input.company} onChange={changeEventHandler} />
          </div>

          <div className="flex gap-2">
            <div className="flex-grow my-2">
              <Label htmlFor="fromDate">From</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !input.fromDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {input.fromDate ? input.fromDate : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={input.fromDate}
                    onSelect={(date) => DateHandler('fromDate', date)}
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
                    {input.toDate ? input.toDate : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={input.toDate}
                    onSelect={(date) => DateHandler('toDate', date)}
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

export default AddExperienceForm;
