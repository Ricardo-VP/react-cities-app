import React from 'react'

import ModalData from './ModalData/ModalData'
import ModalDelete from './ModalDelete/ModalDelete'
import ModalResponse from './ModalResponse/ModalResponse'

const Modals = ({
  city,
  fetchCities,
  page,
  modalConfirmVisibility,
  toggleModalConfirmVisibility,
  modalResponseVisibility,
  toggleModalResponseVisibility,
  modalEditVisibility,
  toggleModalEditVisibility,
  response,
  handleResponseChange,
}) => {
  return (
    <>
      {modalConfirmVisibility === true && (
        <ModalDelete
          toggleModalVisibility={toggleModalConfirmVisibility}
          toggleModalResponseVisibility={toggleModalResponseVisibility}
          city={city}
          handleResponseChange={handleResponseChange}
          fetchCities={fetchCities}
          page={page}
        />
      )}
      {modalResponseVisibility === true && modalConfirmVisibility === false && (
        <ModalResponse
          toggleVisibility={toggleModalResponseVisibility}
          response={response}
        />
      )}
      {modalEditVisibility === true && (
        <ModalData
          handleResponseChange={handleResponseChange}
          toggleModalVisibility={toggleModalEditVisibility}
          city={city}
          toggleModalResponseVisibility={toggleModalResponseVisibility}
        />
      )}
    </>
  )
}

export default Modals
