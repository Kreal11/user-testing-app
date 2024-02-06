import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = ''
}

export const loginRequest = async (email, password) => {
  try {
    const response = await axiosInstance.post('/api/auth/login', {
      email,
      password
    })
    setToken(response.data.token)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}
export const logoutRequest = async () => {
  try {
    await axiosInstance.get('/api/auth/logout')
    clearToken()
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchUserTests = async () => {
  try {
    const response = await axiosInstance.get(`/api/auth/user/tests/`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}
export const fetchUpdatedTests = async (id, result) => {
  try {
    const response = await axiosInstance.patch(`/api/auth/user/tests/updated/${id}`, { result })
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchTestQuestions = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/auth/user/test/${id}`)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}
