import { useParams } from 'react-router-dom'

const SessionDetailsPage = () => {
    const params = useParams()

  return (
    <div>SessionDetailsPage
        {JSON.stringify(params)}
    </div>
  )
}

export default SessionDetailsPage