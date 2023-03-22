import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { FaChartBar } from 'react-icons/fa'
import { UPDATE_PROJECT, GET_SINGLE_PROJECT } from '../query/projectQuery'

const UpdateProject = ({ project }) => {
  const [name, setName] = useState(project?.name)
  const [description, setDescription] = useState(project?.description)
  const [status, setStatus] = useState(project?.status)

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, description })
    updateProject({
      variables: {
        id: project.id,
        name,
        description,
        status,
      },
    })
  }

  return (
    <>
      <label htmlFor="updateProject" className=" btn py-1 btn-info">
        <FaChartBar className="mr-2"></FaChartBar>
        Update Project
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="updateProject" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="updateProject"
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

            <button type="submit" className="btn btn-active btn-primary">
              Submit Project info
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateProject
