import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  getCities,
  getCityByName,
} from '../../../services/cities/CitiesServices'
import { API_URI } from '../../../config/variables'

const useCitiesDataTable = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalRows, setTotalRows] = useState(0)
  const [perPage, setPerPage] = useState(10)

  const fetchCities = async (page) => {
    setLoading(true)

    const cities = await getCities(page, perPage)

    setData(cities?.docs)
    setTotalRows(cities?.totalDocs)
    setLoading(false)
  }

  const fetchCityByName = async (name) => {
    setLoading(true)

    const cities = await getCityByName(name)

    setData(cities?.docs)
    setTotalRows(cities?.totalDocs)
    setLoading(false)
  }

  const handlePageChange = (page) => {
    fetchCities(page)
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true)

    const response = await axios.get(
      `${API_URI}/cities?page=${page}&limit=${newPerPage}&delay=1`
    )

    setData(response.data?.cities?.docs)
    setPerPage(newPerPage)
    setLoading(false)
  }

  useEffect(() => {
    fetchCities(1) // fetch page 1 of users
  }, [])

  return [
    data,
    loading,
    totalRows,
    handlePageChange,
    handlePerRowsChange,
    fetchCities,
    fetchCityByName,
  ]
}

export default useCitiesDataTable
