import React from 'react'
import { editCity } from '../../../../services/cities/CitiesServices'

import CityForm from '../../Forms/CityForm'

const ModalData = ({
  editing,
  toggleModalVisibility,
  city,
  toggleModalResponseVisibility,
  handleResponseChange,
}) => {
  const handleSubmit = async (data) => {
    const cityChanged = {
      name: data?.cityName,
      country: data?.cityCountry,
      timezone: data?.cityTimezone,
      population: data?.cityPopulation,
      location: {
        longitude: parseFloat(data?.cityLocationLongitude),
        latitude: parseFloat(data?.cityLocationLatitude),
      },
    }
    await editCity(city._id, cityChanged)
      .then((res) => {
        handleResponseChange({
          type: res.type,
          message: res.message,
        })
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
            {city !== null ? (
              <span>
                Editing{' '}
                <span className="text-secondary-content">{city.name}</span> city
              </span>
            ) : (
              <span className="text-secondary-content">Add new city</span>
            )}
          </p>
          <CityForm
            editing={editing ?? true}
            city={city}
            handleSubmitForm={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalData
