import { useMutation } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DELETE_PROJECT, GET_ALL_PROJECTS } from '../query/projectQuery'

const DeleteProject = ({ projectId }) => {
  const navigate = useNavigate()
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_ALL_PROJECTS }],
  })

  return (
    <div>
      <button
        type="button"
        className=" btn py-1 btn-warning"
        onClick={deleteProject}
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteProject
