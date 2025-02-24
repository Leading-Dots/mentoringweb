
import { useAuth } from '@/hooks/useAuth';
import MenteeList from './mentee/MenteeList';
import MentorList from './mentor/MentorList';

const ListComponent = () => {
    const {user} = useAuth();

    const role = user?.role
    if (!role) {
        return <div><MentorList /></div>
    }
    
    return <div>
        {role === "mentor" ? <MenteeList /> : <MentorList />}
    </div>
}

export default ListComponent