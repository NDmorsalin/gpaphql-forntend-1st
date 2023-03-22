import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
    query  {
        projects{
            id
            name
            description
            status
        }
    }
`;

const GET_SINGLE_PROJECT = gql`
    query singleProject($id: ID!){
        project(id: $id){
            id
            name
            description
            status
            client{
                id
                name
                email
                phone
            }
        }
    }
`


const ADD_PROJECT = gql`
mutation addProject($name:String!, $description:String!, $status:ProjectStatus! ,$clientId: ID!){
    addProject(name:$name, description:$description,status:$status,clientId:$clientId){
        id
        name
        description
        status
        client{
            id
            name
            email
            phone
        }
    }
}
    `

const UPDATE_PROJECT = gql`
mutation updateProject($id:ID!, $name:String!, $description:String!, $status:ProjectStatusUpdate!){
    updateProject(id:$id,name:$name, description:$description,status:$status){
        id
        name
        description
        status
        client{
            id
            name
            email
            phone
        }
    }
}
    `

export { GET_ALL_PROJECTS, GET_SINGLE_PROJECT, ADD_PROJECT, UPDATE_PROJECT };