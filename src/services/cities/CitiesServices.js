import axios from 'axios'
import { API_URI } from '../../config/variables'

export const getCities = async (page, limit) => {
  return await axios
    .get(`${API_URI}/cities?page=${page}&limit=${limit}`)
    .then((res) => {
      return res.data?.cities
    })
}

export const getCityByName = async (cityName) => {
  return await axios
    .get(`${API_URI}/cities?limit=1&name=${cityName}`)
    .then((res) => {
      return res.data?.cities
    })
}

export const postCity = async (city) => {
  return await axios.post(`${API_URI}/cities`, city).then((res) => {
    return res.data
  })
}

export const deleteCity = async (cityId) => {
  return await axios.delete(`${API_URI}/cities/${cityId}`).then((res) => {
    return res.data
  })
}

export const editCity = async (cityId, changes) => {
  return await axios.put(`${API_URI}/cities/${cityId}`, changes).then((res) => {
    return res.data
  })
}
