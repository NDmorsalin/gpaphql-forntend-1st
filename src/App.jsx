import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useState } from 'react'
import './App.css'
import Client from './components/Client/Client'
import { Header } from './components/Header/Header'
const client = new  ApolloClient({
  uri: 'http://localhost:5500/graphql',
  cache: new InMemoryCache()
})
function App() {
  const [count, setCount] = useState(0)
// console.log(client);
  return (
    <ApolloProvider client={client}>
       <div className="container mx-auto">
        <Header/>
        <Client/>
      </div>
    </ApolloProvider>
   
  )
}

export default App