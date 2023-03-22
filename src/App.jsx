import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useState } from 'react'
import './App.css'
import AddClient from './components/Client/AddClient'
import Client from './components/Client/Clients'
import { Header } from './components/Header/Header'
import AllProject from './components/Project/AllProject'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleProject from './Pages/SingleProject'
import Home from './Pages/Home'
import Root from './Pages/Root'
// import rootRoute from './components/router/RootRoute'

const rootRoute = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'projects/:projectId',
        element: <SingleProject></SingleProject>,
      },
    ],
  },
])

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
        <RouterProvider router={rootRoute} />
      </div>
    </ApolloProvider>
  )
}

export default App
