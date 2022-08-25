import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component'

import useCitiesDataTable from './useCitiesDataTable'
import Actions from './Actions'

const CitiesDataTable = ({ cityFilter, enableFilter }) => {
  const [
    data,
    loading,
    totalRows,
    handlePageChange,
    handlePerRowsChange,
    fetchCities,
    fetchCityByName,
  ] = useCitiesDataTable()
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (cityFilter !== '' && cityFilter !== null && cityFilter !== undefined) {
      fetchCityByName(cityFilter)
    } else {
      fetchCities(page)
    }
  }, [enableFilter])

  const columns = [
    {
      name: <span className="text-secondary-content text-xl">{'Name'}</span>,
      selector: (row) => row.name,
      sortField: 'name',
      center: true,
      compact: true,
    },
    {
      name: <span className="text-secondary-content text-xl">{'Country'}</span>,
      selector: (row) => <span className="text-primary">{row.country}</span>,
      sortField: 'country',
      center: true,
      compact: true,
    },
    {
      name: (
        <span className="text-secondary-content text-xl">{'Timezone'}</span>
      ),
      selector: (row) => row.timezone,
      sortField: 'timezone',
      center: true,
      compact: true,
    },
    {
      name: (
        <span className="text-secondary-content text-xl">{'Population'}</span>
      ),
      selector: (row) => <span className="text-primary">{row.population}</span>,
      sortField: 'population',
      center: true,
      compact: true,
    },
    {
      name: (
        <span className="text-secondary-content text-xl">{'Latitude'}</span>
      ),
      selector: (row) => row.location.latitude,
      sortField: 'latitude',
      center: true,
      compact: true,
    },
    {
      name: (
        <span className="text-secondary-content text-xl">{'Longitude'}</span>
      ),
      selector: (row) => (
        <span className="text-primary">{row.location.longitude}</span>
      ),
      sortField: 'longitude',
      center: true,
      compact: true,
    },
    {
      name: <span className="text-secondary-content text-xl">{'Actions'}</span>,
      selector: (row) => (
        <Actions page={page} fetchCities={fetchCities} city={row} />
      ),
      center: true,
      compact: true,
    },
  ]

  return (
    <DataTable
      title={<span className="text-primary text-2xl font-bold">Cities</span>}
      theme="dark"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={(page) => {
        setPage(page)
        handlePageChange(page)
      }}
      persistTableHead
      progressComponent={
        <div className="py-10">
          <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-primary rounded-full animate-spin"></div>
          </div>
        </div>
      }
    />
  )
}

export default CitiesDataTable
