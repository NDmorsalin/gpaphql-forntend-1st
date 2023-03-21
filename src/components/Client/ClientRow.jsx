import React from 'react'
import { FaBan } from 'react-icons/fa'
import { gql, useMutation, useQuery } from '@apollo/client'
import { DELETE_CLIENT, GET_CLIENTS } from '../query/allQuery'

const ClientRow = ({ client, setSingleClientId }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT)
  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="p-4 w-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <td
          onClick={() => setSingleClientId(client.id)}
          className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {client.name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
          {client.email}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {client.phone}
        </td>
        <td className="">
          <button
            onClick={() =>
              deleteClient({
                variables: {
                  id: client.id,
                },
                update(cache, { data: { deleteClient } }) {
                  const { clients } = cache.readQuery({ query: GET_CLIENTS })
                  cache.writeQuery({
                    query: GET_CLIENTS,
                    data: {
                      clients: clients.filter(
                        (client) => client.id !== deleteClient.id
                      ),
                    },
                  })
                },
                // refetchQueries: [{ query: GET_CLIENTS }],
              })
            }
            className="w-10 h-10   flex items-center justify-center  bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full"
            type="button"
          >
            <FaBan></FaBan>
          </button>
        </td>
      </tr>
    </>
  )
}

export default ClientRow
