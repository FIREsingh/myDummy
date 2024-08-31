import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProtectedRoute = ({children}) => {
  const {user} = useSelector(store => store.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user==null){
      navigate('/admin/login')
    }
  }, []);

  return (
    <>
        {children}
    </>
  )
}

export default ProtectedRoute