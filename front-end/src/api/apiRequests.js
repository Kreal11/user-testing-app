import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export const loginRequest = async (email, password) => {
  try {
    const response = await axiosInstance.post('/api/auth/login', {
      email,
      password
    })
    console.log(response.data.user)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchUserTests = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/auth/user/tests/${userId}`)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}
