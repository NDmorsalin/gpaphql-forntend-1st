import React from 'react'
import AddClient from '../components/Client/AddClient'
import Client from '../components/Client/Clients'
import AddProject from '../components/Project/AddProject'
import AllProject from '../components/Project/AllProject'

const Home = () => {
  return (
    <>
      <div className="my-8 space-x-4">
        <AddClient />
        <AddProject />
      </div>
      <AllProject />
      <Client />
    </>
  )
}

export default Home
