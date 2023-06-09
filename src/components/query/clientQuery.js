import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
  query {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const GET_CLIENT = gql`
  query getSingleClient($id: ID!) {
    client(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const UPDATE_CLIENT = gql`
  mutation updateClient($id: ID!, $name: String, $email: String, $phone: String) {
    updateClient(id: $id, name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const UPDATE_DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;


export {
  GET_CLIENTS,
  GET_CLIENT,
  ADD_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT, UPDATE_DELETE_CLIENT
}