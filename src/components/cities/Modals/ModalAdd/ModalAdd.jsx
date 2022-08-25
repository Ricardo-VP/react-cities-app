import React from 'react'

import CityForm from '../../Forms/CityForm'

const ModalAdd = ({
  toggleModalVisibility,
  toggleModalResponseVisibility,
  handleResponseChange,
}) => {
  const handleSubmit = () => {
    toggleModalVisibility()
    toggleModalResponseVisibility()
    handleResponseChange({
      type: 'success',
      message: 'City edited successfully',
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
            editing={true}
            city={city}
            handleSubmitForm={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalAdd
