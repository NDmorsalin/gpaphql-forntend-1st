import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_CLIENTS } from '../query/clientQuery'
import { ADD_PROJECT, GET_ALL_PROJECTS } from '../query/projectQuery'
import { FaList } from 'react-icons/fa'

const AddProject = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [clientId, setClientId] = useState('')
  const [status, setStatus] = useState('new')

  const { loading, error, data } = useQuery(GET_CLIENTS)

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      clientId,
      status,
    },
    update(caches, { data: { addProject } }) {
      const { projects } = caches.readQuery({
        query: GET_ALL_PROJECTS,
      })
      caches.writeQuery({
        query: GET_ALL_PROJECTS,
        data: { projects: [...projects, addProject] },
      })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, description, clientId })
    if (name && description && clientId) {
      addProject({
        variables: {
          name,
          description,
          clientId,
          status,
        },
      })
      setName('')
      setDescription('')
      setClientId('')
      setStatus('new')
    } else {
      return alert('Please enter All fields')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  return (
    !loading &&
    !error &&
    data && (
      <>
        <label htmlFor="addProject" className="btn bg-purple-600 text-white">
          <FaList className="mr-2"></FaList>
          Add Project
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="addProject" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="addProject"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <form
              onSubmit={handleSubmit}
              className="form-control w-full space-y-4"
            >
              {/* Name */}
              <div className="">
                <label htmlFor="name" className="label">
                  <span className="label-text">What is your Project name?</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Project Name"
                  id="name"
                  className="input input-bordered w-full"
                />
              </div>
              {/* description */}
              <div className="">
                <label htmlFor="description" className="label">
                  <span className="label-text">
                    What is your Project description?
                  </span>
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Project description"
                  id="description"
                  className="input input-bordered w-full"
                  name="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              {/* Status */}
              <div className="">
                <label htmlFor="status" className="label">
                  <span className="label-text">Select your project Status</span>
                </label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="select select-info w-full"
                >
                  <option value="new">Not Started</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              {/* Client */}
              <div className="">
                <label htmlFor="clients" className="label">
                  <span className="label-text">
                    Select your project clients
                  </span>
                </label>
                <select
                  id="clients"
                  onLoadStart={(e) => console.log('selected is loaded')}
                  onChange={(e) => setClientId(e.target.value)}
                  className="select select-info w-full"
                >
                  {data.clients.map((client, index) => {
                    return (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    )
                  })}
                </select>
              </div>

              <button type="submit" className="btn btn-active btn-primary">
                Submit Client info
              </button>
            </form>
          </div>
        </div>
      </>
    )
  )
}

export default AddProject
