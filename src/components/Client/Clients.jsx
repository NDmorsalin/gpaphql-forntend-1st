import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import ClientRow from './ClientRow'

import { GET_CLIENTS } from '../query/allQuery'
import SingleClient from './SingleClient'

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)
  const [singleClientId, setSingleClientId] = useState(null)
  // console.log({ loading, error, data })
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error :(</p>
  }
  return (
    <>
      {!loading && !error && data && (
        <div>
          <h1 className="text-center text-3xl font-bold mb-4" >All Clients</h1>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th scope="col" className="p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-all"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label htmlFor="checkbox-all" className="sr-only">
                                checkbox
                              </label>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Name Name
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Phone
                          </th>
                          <th scope="col" className="p-4">
                            <span className="sr-only">Delete</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {data.clients.map((client) => (
                          <ClientRow
                            key={client.id}
                            client={client}
                            setSingleClientId={setSingleClientId}
                          ></ClientRow>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {singleClientId && (
            <SingleClient clientId={singleClientId}></SingleClient>
          )}
        </div>
      )}
    </>
  )
}

export default Client
