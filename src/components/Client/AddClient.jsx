import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_CLIENT, GET_CLIENTS } from '../query/clientQuery'
import { FaUser } from 'react-icons/fa'

const AddClient = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
    update(caches, { data: { addClient } }) {
      const { clients } = caches.readQuery({
        query: GET_CLIENTS,
      })
      caches.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      })
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone)
    if (name && email && phone) {
      addClient(name, email, phone)
      setName('')
      setEmail('')
      setPhone('')
    } else {
      return alert('Please enter All fields')
    }
  }
  return (
    <>
      <label htmlFor="addClient" className="btn">
        <FaUser className="mr-2"></FaUser>
        Add Client
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="addClient" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addClient"
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
                <span className="label-text">What is your Client name?</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Client Name"
                id="name"
                className="input input-bordered w-full"
              />
            </div>
            {/* Email */}
            <div className="">
              <label htmlFor="email" className="label">
                <span className="label-text">
                  What is your Client Email Address?
                </span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Client Email Address"
                id="email"
                className="input input-bordered w-full"
              />
            </div>
            {/* Phone */}
            <div className="">
              <label htmlFor="phone" className="label">
                <span className="label-text">
                  What is your Client phone number?
                </span>
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="tel"
                placeholder="Client phone number"
                id="phone"
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-active btn-primary">
              Submit Client info
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddClient
