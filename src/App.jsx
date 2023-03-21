import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useState } from 'react'
import './App.css'
import AddClient from './components/Client/AddClient'
import Client from './components/Client/Clients'
import { Header } from './components/Header/Header'
import { FaUser } from 'react-icons/fa'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})
const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
  cache,
})
function App() {
  // const [clicked, setClicked] = useState(false)
  // console.log(client);
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto">
        <Header />
        {/* The button to open modal */}
        <div className="my-8">
          <label htmlFor="my-modal-3" className="btn">
            <FaUser className="mr-2"></FaUser>
            Add Client
          </label>
        </div>
        <AddClient></AddClient>
        <Client />
      </div>
    </ApolloProvider>
  )
}

export default App
