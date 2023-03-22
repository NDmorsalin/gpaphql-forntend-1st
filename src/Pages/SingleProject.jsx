import React from 'react'
import { useParams, NavLink, useNavigate, redirect } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import {
  DELETE_PROJECT,
  GET_ALL_PROJECTS,
  GET_SINGLE_PROJECT,
} from '../components/query/projectQuery'
import UpdateProject from '../components/Project/UpdateProject'
import DeleteProject from '../components/Project/DeleteProject'

const SingleProject = () => {
  const { projectId } = useParams()
  const { lodging, error, data } = useQuery(GET_SINGLE_PROJECT, {
    variables: {
      id: projectId,
    },
  })
  

  if (lodging) return <p>Loading...</p>

  if (error) return <p>Error</p>

  data
  return (
    !lodging &&
    !error &&
    data && (
      <>
        <div className="card w-full max-w-xl mx-auto  bg-base-200 text-primary-content relative">
          <NavLink
            className="absolute top-4 right-4 btn py-1 btn-accent"
            to="/"
          >
            Back
          </NavLink>
          <div className="card-body">
            <h2 className="card-title">{data.project.name}!</h2>
            <p>{data.project.description}</p>

            <div
              className={`badge ${
                data.project.status === 'Not Started'
                  ? 'badge-primary'
                  : data.project.status === 'In Progress'
                  ? 'badge-secondary'
                  : data.project.status === 'Completed'
                  ? 'badge-accent'
                  : nul
              }`}
            >
              {data.project.status}
            </div>
            <div className="card-footer">
              <div className="">
                <h5 className="text-3xl text-center font-bold">Client info</h5>
                <p className="text-sm text-center">
                  {data.project.client?.name}
                </p>
                <p className="text-sm text-center">
                  {data.project.client?.email}
                </p>
                <p className="text-sm text-center">
                  {data.project.client?.phone}
                </p>
              </div>
              <div className="flex justify-between items-center my-4">
                <UpdateProject project={data.project}></UpdateProject>
                <DeleteProject projectId={projectId}></DeleteProject>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default SingleProject
