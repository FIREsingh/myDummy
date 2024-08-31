import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import useGetAllRequest from '@/hooks/useGetAllRequest'
import { useSelector } from 'react-redux';


const RequestSection = () => {
    useGetAllRequest();
    const requestList = useSelector(store => store.request.requests);
    return (
        <div>
            <div className='flex items-center justify-between p-2'>
                <h1 className='text-xl font-titleFonts font-bold'>
                    Requests
                </h1>
            </div>
            <div className="mx-3">
                <Table>
                    <TableCaption> This is the list of requests recieved </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-left'>S.No</TableHead>
                            <TableHead className='text-center'>Name</TableHead>
                            <TableHead className='text-center'>Phone</TableHead>
                            <TableHead className='text-center'>Email</TableHead>
                            <TableHead className='text-center'>Subject</TableHead>
                            <TableHead className='text-center'>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { requestList && requestList.length > 0 ? (
                            requestList.map((request, index) => (
                                <TableRow key={index}>
                                    <TableCell className='text-left'>{index+1}</TableCell>
                                    <TableCell className='text-center'>{request.name}</TableCell>
                                    <TableCell className='text-center'>{request.mobile}</TableCell>
                                    <TableCell className='text-center'>{request.email}</TableCell>
                                    <TableCell className='text-center'>{request.subject}</TableCell>
                                    <TableCell className='text-center'>{request.message}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell className='text-left'>No Data</TableCell>
                                <TableCell className='text-center'>No Data</TableCell>
                                <TableCell className='text-center'>No Data</TableCell>
                                <TableCell className='text-center'>No Data</TableCell>
                                <TableCell className='text-center'>No Data</TableCell>
                                <TableCell className='text-center'>No Data</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
        
    )
}

export default RequestSection