import { useAuth } from '@/hooks/useAuth';
import React from 'react'

const InboxPage = () => {


    const {user } = useAuth();
    const userRole = user?.role;



    const fetchChatRooms = async () => {
        
    }
  return (
    <div>InboxPage</div>
  )
}

export default InboxPage