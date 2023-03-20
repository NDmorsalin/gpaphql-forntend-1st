import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useState } from 'react'
import './App.css'
import Client from './components/Client/Clients'
import { Header } from './components/Header/Header'
const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
  cache: new InMemoryCache(),
})
function App() {
  // const [clicked, setClicked] = useState(false)
  // console.log(client);
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto">
        <Header />
        <Client />
      </div>
    </ApolloProvider>
  )
}

export default App
