import { Button } from '@/components/ui/button'
import React from 'react'
import { useParams } from 'react-router-dom'

const MenteeProfilePage = () => {
    const params = useParams()
  return (
    <div>
        Mentee id is {params.id}





        <Button
    
        >
            Make a session request
        </Button>
    </div>
  )
}

export default MenteeProfilePage