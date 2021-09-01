import axios from 'axios'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
  return axios.post('http://localhost:4000/graphql?', {
    query,
  })
}

export const getAdsQuery = () => {
  return `{
        ads{id,title, body, photos{url, info, isPrimary}, username}
      }`
}

export const getCategoriesQuery = () => {
  return `{
          categories{id,title,description}
      }`
}
export const registerMutation = (
  username: string,
  password: string,
  email: string,
  role: string
) => {
  return `mutation{register(registerInput:{username:"${username}", password:"${password}",email:"${email}", role:"${role}"}){id,createdAt,email,username, token}}`
}
