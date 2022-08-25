import React from 'react'

import { deleteCity } from '../../../../services/cities/CitiesServices'

const ModalDelete = ({
  fetchCities,
  page,
  toggleModalVisibility,
  toggleModalResponseVisibility,
  city,
  handleResponseChange,
}) => {
  const handleDelete = async () => {
    await deleteCity(city._id)
      .then((res) => {
        handleResponseChange({
          type: res.type,
          message: res.message,
        })
        fetchCities(page)
      })
      .finally(() => {
        toggleModalVisibility()
        toggleModalResponseVisibility()
      })
  }

  return (
    <div>
      <div className="modal modal-open">
        <div className="modal-box relative">
          <button onClick={toggleModalVisibility}>
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </button>
          <p className="-mt-5 text-center text-xl text-primary font-bold">
            Are you sure?
          </p>
          <p className="mt-3">
            You are deleting{' '}
            <span className="text-secondary-content">{city.name}</span> city
          </p>
          <button
            onClick={handleDelete}
            className="btn btn-sm w-20 btn-error mt-5 hover:text-black"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
