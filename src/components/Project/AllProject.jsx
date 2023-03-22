import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_PROJECTS } from '../query/projectQuery'
import { NavLink } from 'react-router-dom'

const AllProject = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-4">AllProject</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.projects.map((project) => (
          <div
            key={project.id}
            className="card  bg-base-200 text-primary-content"
          >
            <div className="card-body">
              <h2 className="card-title">{project.name}!</h2>
              <p>{project.description}</p>

              <div
                className={`badge ${
                  project.status === 'Not Started'
                    ? 'badge-primary'
                    : project.status === 'In Progress'
                    ? 'badge-secondary'
                    : project.status === 'Completed'
                    ? 'badge-accent'
                    : null
                }`}
              >
                {project.status}
              </div>
              <div className="card-actions justify-end">
                <NavLink
                  to={`projects/${project.id}`}
                  className="btn btn-accent"
                >
                  View
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProject
