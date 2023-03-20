import { useQuery } from '@apollo/client'
import { GET_CLIENT } from '../query/allQuery'

function SingleClient(clientId) {
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { myId: clientId },
  })
  console.log({ loading, error, data,clientId })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <div>Single client</div>
}

export default SingleClient
