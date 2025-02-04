import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const HomeRouter = () => {
  
  const {user} = useAuth();

  if(user) {
    return <Navigate to="/home" />
  } else {
    return <Navigate to="/login" />
  }

}

export default HomeRouter
