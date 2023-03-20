import { useQuery } from '@apollo/client'
import { GET_CLIENT } from '../query/allQuery'

function SingleClient({ clientId }) {
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: clientId },
  })
  console.log({ loading, error, data, clientId })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const { client } = data
  return (
    <div>
      <h2>{client.name}</h2>
      <p>{client.email}</p>
      <p>{client.phone}</p>
    </div>
  )
}

export default SingleClient
